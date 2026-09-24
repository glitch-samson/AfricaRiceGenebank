# Germplasm Request Page Architecture

## 1. Purpose

This document defines the architecture for the Rice Biodiversity Center of Africa (RBCA) germplasm request page. The page allows users to browse AfricaRice genebank material, filter the collection, add accessions to a cart, and submit a germplasm request through the Genesys PGR embedded user interface.

The design is based on the current Laravel implementation and separates:

- the RBCA website shell and navigation;
- the Genesys embedded catalogue and shopping-cart workflow;
- Laravel configuration and environment management;
- external Genesys API and CAPTCHA services.

## 2. Current Implementation

### 2.1 Request route

The public route is already registered:

```php
Route::get('/request-for-germplasm', [PagesController::class, 'genesys'])->name('req');
```

The route is linked from the global navigation in `resources/views/layouts/webtemp.blade.php`.

### 2.2 Controller

`App\Http\Controllers\PagesController::genesys()` currently only returns the view:

```php
public function genesys(){ return view('pages.genesys'); }
```

There is no local request controller, form request, database model, mail notification, or order persistence for this workflow. The actual catalogue, cart, CAPTCHA, and request submission are delegated to Genesys.

### 2.3 View

The active view is `resources/views/pages/genesys.blade.php`. It currently:

1. extends the RBCA website layout;
2. renders a hero section and a set of hash-based Genesys navigation links;
3. creates the `#genesys-container` mount element;
4. creates a JavaScript `genesysConfig` object;
5. passes environment values into the Genesys client;
6. calls `genesys.showGenesysUI(...)` when the global `genesys` object exists;
7. shows an error message when the embedded client is unavailable.

The intended configuration is:

```js
const genesysConfig = {
    apiUrl: "...",
    clientId: "...",
    clientKey: "...",
    shoppingCart: { enabled: true },
    captchaSiteKey: "...",
    filter: { institute: { code: ["..."] } },
};
```

### 2.4 Important current gap

The CDN stylesheet and JavaScript dependencies are commented out in the active view:

```html
<!--link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.css" />
<script src="https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-ui.js"></script-->
```

As a result, `genesys` will normally be undefined and the page will display “Embedded UI is not loaded.” The older `resources/views/pages/genesys1.blade.php` demonstrates the intended CDN integration, but contains hard-coded production credentials and must not be used as a credential source.

## 3. Target Architecture

```text
Browser
  |
  | GET /request-for-germplasm
  v
Laravel route: req
  |
  v
PagesController::genesys()
  |
  v
resources/views/pages/genesys.blade.php
  |-- RBCA web layout, navigation, branding
  |-- Genesys CDN CSS/JS assets
  |-- config('genesys.*') serialized into safe public JS config
  v
Genesys Embedded UI
  |-- catalogue and accession search
  |-- institute filter
  |-- shopping cart
  |-- CAPTCHA challenge
  |-- request submission
  v
Genesys API
```

Laravel is the presentation host and configuration boundary. Genesys remains the system of record for accession inventory, cart contents, request processing, and request status unless a future integration explicitly adds local persistence.

## 4. Request-Page Responsibilities

### 4.1 Laravel responsibilities

Laravel should:

- expose the named `req` route;
- render the page using the existing RBCA layout;
- read Genesys configuration from Laravel config, not directly throughout the view;
- expose only values that are safe for browser use;
- render a clear fallback when required configuration is missing;
- load the correct Genesys assets in a controlled order;
- provide page metadata, accessibility labels, and loading/error states;
- apply the institute filter that limits results to the intended genebank collection;
- avoid logging client keys, CAPTCHA values, cart contents, or personal request data.

### 4.2 Genesys responsibilities

The Genesys embedded client should:

- retrieve collection and accession data from the configured API;
- render search, filters, overview, map, subsets, datasets, traits, and cart views;
- validate and submit the user’s cart request;
- enforce Genesys-side request rules and CAPTCHA requirements;
- return API and request errors to the user through its UI.

### 4.3 Browser responsibilities

The browser should:

- download the vendor assets over HTTPS;
- mount the UI in `#genesys-container`;
- never receive server-only secrets;
- provide a usable fallback if JavaScript, the CDN, the API, or CAPTCHA is unavailable.

## 5. Recommended Laravel Structure

### 5.1 Configuration file

Create `config/genesys.php` as the single configuration boundary:

```php
<?php

return [
    'assets_url' => env('GENESYS_ASSETS_URL', 'https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist'),
    'api_url' => env('GENESYS_API_URL'),
    'client_id' => env('GENESYS_CLIENT_ID'),
    'client_key' => env('GENESYS_CLIENT_KEY'),
    'captcha_site_key' => env('GENESYS_CAPTCHA_SITE_KEY'),
    'institute_code' => env('GENESYS_INSTITUTE_CODE'),
    'enabled' => env('GENESYS_ENABLED', true),
    'shopping_cart_enabled' => env('GENESYS_SHOPPING_CART_ENABLED', true),
];
```

Use `config('genesys.*')` in application code and views. Do not call `env()` directly from Blade after configuration caching, except during a deliberately temporary migration. This keeps deployment configuration compatible with `php artisan config:cache`.

### 5.2 Controller

Keep the controller thin, but pass a configuration object explicitly:

```php
public function genesys()
{
    abort_unless(config('genesys.enabled'), 404);

    return view('pages.genesys', [
        'genesys' => [
            'apiUrl' => config('genesys.api_url'),
            'clientId' => config('genesys.client_id'),
            'clientKey' => config('genesys.client_key'),
            'captchaSiteKey' => config('genesys.captcha_site_key'),
            'instituteCode' => config('genesys.institute_code'),
            'shoppingCartEnabled' => config('genesys.shopping_cart_enabled'),
            'assetsUrl' => config('genesys.assets_url'),
        ],
    ]);
}
```

Before rendering, validate that the public page has the required non-empty values. In production, a configuration failure should be visible to monitoring and should render a controlled setup message rather than a broken JavaScript object.

### 5.3 View and asset loading

The active view should:

1. load `genesys-deps.css` in the document head or through a layout stack;
2. load `genesys-deps.js` before `genesys-ui.js`;
3. load both with HTTPS and a pinned package version;
4. mount the UI only after the scripts have loaded;
5. use JSON encoding when passing configuration into JavaScript;
6. avoid interpolating unescaped environment values into JavaScript strings;
7. display a loading state before initialization;
8. display an actionable error if initialization fails.

Recommended Blade pattern:

```blade
@push('styles')
<link rel="stylesheet" href="{{ rtrim($genesys['assetsUrl'], '/') }}/genesys-deps.css">
@endpush

@push('scripts')
<script src="{{ rtrim($genesys['assetsUrl'], '/') }}/genesys-deps.js" defer></script>
<script src="{{ rtrim($genesys['assetsUrl'], '/') }}/genesys-ui.js" defer></script>
<script>
    window.RBCA_GENESYS_CONFIG = @json([
        'apiUrl' => $genesys['apiUrl'],
        'clientId' => $genesys['clientId'],
        'clientKey' => $genesys['clientKey'],
        'captchaSiteKey' => $genesys['captchaSiteKey'],
        'shoppingCart' => ['enabled' => $genesys['shoppingCartEnabled']],
        'filter' => ['institute' => ['code' => [$genesys['instituteCode']]]],
    ]);
</script>
@endpush
```

The layout must provide `@stack('styles')` in the head and `@stack('scripts')` before `</body>`.

### 5.4 Initialization script

Use a small page-specific JavaScript module or inline script to:

- wait until the vendor scripts are available;
- verify that `window.genesys.showGenesysUI` exists;
- initialize once;
- catch initialization errors;
- replace the loading state with an accessible error message;
- avoid exposing configuration values in console logs.

Pseudo-flow:

```text
DOMContentLoaded
  -> find #genesys-container
  -> check required configuration
  -> check window.genesys.showGenesysUI
  -> call showGenesysUI(container, config)
  -> on error: show fallback and report generic failure
```

### 5.5 End-to-end implementation procedure

Implement the page in this order:

1. Add `config/genesys.php` using the configuration shown above.
2. Add the `GENESYS_*` placeholders to `.env.example` and set real values only in the deployment environment.
3. Update `PagesController::genesys()` to read `config('genesys.*')` and pass a named `$genesys` array to the view.
4. Change `resources/views/pages/genesys.blade.php` so it no longer calls `env()` directly.
5. Add the Genesys dependency stylesheet and scripts to the active view or to the shared layout stacks.
6. Keep `genesys-deps.js` before `genesys-ui.js`; the UI script depends on the dependency bundle.
7. Initialize the UI after the deferred scripts have loaded and after `#genesys-container` exists.
8. Pass the configured institute code as the only catalogue filter. An empty filter must be treated as a deployment error, not as permission to show every institute.
9. Test the page in staging with a known accession and a test cart. Do not submit a real request during automated tests.
10. Remove or quarantine `genesys1.blade.php` after the active view is migrated, because it contains hard-coded provider credentials.

The minimum production path is therefore:

```text
.env
  -> config/genesys.php
  -> PagesController::genesys()
  -> genesys.blade.php
  -> window.genesys.showGenesysUI()
  -> Genesys API through the embedded client
```

### 5.6 Safe variable consumption

The existing view uses the old variable names directly:

| Current variable | New variable | Consumed as |
|---|---|---|
| `API_GEN_URL` | `GENESYS_API_URL` | `genesysConfig.apiUrl` |
| `API_GEN_CLIENTID` | `GENESYS_CLIENT_ID` | `genesysConfig.clientId` |
| `API_GEN_CLIENTKEY` | `GENESYS_CLIENT_KEY` | `genesysConfig.clientKey` |
| `API_GEN_CAPTCHA` | `GENESYS_CAPTCHA_SITE_KEY` | `genesysConfig.captchaSiteKey` |
| `API_GEN_INSCODE` | `GENESYS_INSTITUTE_CODE` | `genesysConfig.filter.institute.code[0]` |

Do not make the migration by renaming only the `.env` entries. The Blade view currently calls `env()` and also hard-codes `shoppingCart.enabled`. The complete migration must move all values through Laravel configuration:

```php
// app/Http/Controllers/PagesController.php
public function genesys()
{
  abort_unless(config('genesys.enabled'), 404);

  return view('pages.genesys', [
    'genesys' => [
      'apiUrl' => config('genesys.api_url'),
      'clientId' => config('genesys.client_id'),
      'clientKey' => config('genesys.client_key'),
      'captchaSiteKey' => config('genesys.captcha_site_key'),
      'instituteCode' => config('genesys.institute_code'),
      'shoppingCartEnabled' => config('genesys.shopping_cart_enabled'),
      'assetsUrl' => config('genesys.assets_url'),
    ],
  ]);
}
```

Then serialize only the values needed by the embedded client:

```blade
<script>
  window.RBCA_GENESYS_CONFIG = @json([
    'apiUrl' => $genesys['apiUrl'],
    'clientId' => $genesys['clientId'],
    'clientKey' => $genesys['clientKey'],
    'shoppingCart' => [
      'enabled' => $genesys['shoppingCartEnabled'],
    ],
    'captchaSiteKey' => $genesys['captchaSiteKey'],
    'filter' => [
      'institute' => [
        'code' => [$genesys['instituteCode']],
      ],
    ],
  ]);
</script>
```

`@json` is required here so values containing quotes, backslashes, or other JavaScript-sensitive characters are encoded as data instead of being concatenated into executable JavaScript. The client key is still visible to the browser; this is acceptable only if Genesys explicitly defines it as an embedded-client credential.

## 6. Genesys API and Embedded Client Contract

### 6.1 API used by this repository

This repository does not call a documented Genesys REST endpoint from PHP. It uses the Genesys PGR embedded UI package, which receives the API base URL and credentials in JavaScript and performs catalogue and request operations in the browser.

The integration point present in the codebase is:

```js
genesys.showGenesysUI(document.getElementById('genesys-container'), genesysConfig);
```

The API configuration passed to that client is:

```js
{
  apiUrl: 'https://api.genesys-pgr.org',
  clientId: '<provider-issued-client-id>',
  clientKey: '<provider-issued-client-key>',
  captchaSiteKey: '<provider-issued-public-site-key>',
  shoppingCart: { enabled: true },
  filter: { institute: { code: ['CIV033'] } }
}
```

The embedded client is responsible for selecting the concrete catalogue, accession, cart, CAPTCHA, and request endpoints. Do not invent or hard-code REST paths in the Laravel application unless the Genesys provider supplies and approves a separate server-side API contract.

### 6.2 Embedded assets

The active integration requires these version-pinned assets:

```text
{GENESYS_ASSETS_URL}/genesys-deps.css
{GENESYS_ASSETS_URL}/genesys-deps.js
{GENESYS_ASSETS_URL}/genesys-ui.js
```

For the default configuration:

```text
https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.css
https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.js
https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-ui.js
```

Load the CSS in the page head. Load the dependency JavaScript before the UI JavaScript. Use HTTPS only, and change the package version deliberately after testing because the embedded client is a vendor API dependency.

### 6.3 API request flow

The supported request flow is:

```text
Embedded UI
  -> Genesys API: load filtered institute catalogue
  -> Genesys API: load accession details and related data
  -> Browser: maintain the Genesys shopping cart
  -> Genesys CAPTCHA service: validate the challenge
  -> Genesys API: submit the germplasm request
  -> Embedded UI: show confirmation or provider error
```

Laravel should not proxy these requests by default. A proxy is needed only if the provider confirms that `clientKey` is a server secret or if RBCA requires local auditing, notifications, or workflow control. A proxy implementation would require a provider-documented endpoint list, authentication scheme, request/response schemas, timeout policy, retry policy, and personal-data handling rules.

### 6.4 Configuration validation before API use

Before rendering the page, verify that all values required by the embedded client are present:

```php
$required = [
  'genesys.api_url',
  'genesys.client_id',
  'genesys.client_key',
  'genesys.captcha_site_key',
  'genesys.institute_code',
  'genesys.assets_url',
];

foreach ($required as $key) {
  if (blank(config($key))) {
    report(new RuntimeException("Missing Genesys configuration: {$key}"));
    abort(503, 'The germplasm request service is temporarily unavailable.');
  }
}
```

Do not include the missing value, client key, or CAPTCHA key in the error response. In production, report only the configuration key name to the server-side error system.

### 6.5 Direct REST integration is a separate design

If a future requirement is to consume Genesys data from Laravel rather than through the embedded UI, create a dedicated service such as `App\\Services\\GenesysClient`. That service must be based on the provider's official API documentation and should define methods such as:

```php
interface GenesysClient
{
  public function searchAccessions(array $filters): array;

  public function getAccession(string $identifier): array;

  public function submitRequest(array $payload): array;
}
```

The service should use Laravel's HTTP client with configured timeouts, structured error handling, redacted logging, and retries only for safe idempotent reads. Do not retry request submission automatically unless the provider supplies an idempotency mechanism. Store only the provider request ID locally if local tracking is required.

## 7. Environment Variables

### 6.1 Required application variables

These are standard Laravel variables and are required for the page to run correctly in each environment.

| Variable | Required | Example | Purpose |
|---|---:|---|---|
| `APP_ENV` | Yes | `production` | Selects the application environment. |
| `APP_KEY` | Yes | Generated key | Encrypts Laravel cookies and other encrypted values. |
| `APP_DEBUG` | Yes | `false` | Must be `false` in production. |
| `APP_URL` | Yes | `https://genebank.example.org` | Canonical application URL. |
| `LOG_CHANNEL` | Yes | `stack` | Application logging channel. |
| `LOG_LEVEL` | Yes | `warning` | Avoids noisy production logs while retaining failures. |

### 6.2 Required Genesys variables

These variables should be added to `.env.example` and configured in each deployment environment.

| Variable | Required | Public in browser | Example | Purpose |
|---|---:|---:|---|---|
| `GENESYS_API_URL` | Yes | Yes | `https://api.genesys-pgr.org` | Base API endpoint used by the embedded client. |
| `GENESYS_CLIENT_ID` | Yes | Yes | Provider-issued client ID | Identifies the embedded Genesys client. |
| `GENESYS_CLIENT_KEY` | Yes, confirm with Genesys provider | Yes in current integration | Provider-issued client key | Client credential currently expected by the embedded UI. Confirm whether this is intended to be browser-exposed and whether it can be restricted by origin. |
| `GENESYS_CAPTCHA_SITE_KEY` | Yes | Yes | Provider-issued public site key | Public CAPTCHA site key used by the embedded request workflow. |
| `GENESYS_INSTITUTE_CODE` | Yes | Yes | `CIV033` | Limits the catalogue to the RBCA/AfricaRice institute collection. |
| `GENESYS_ASSETS_URL` | Yes | Yes | `https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist` | Version-pinned CDN directory for `genesys-deps` and `genesys-ui` assets. |
| `GENESYS_ENABLED` | Recommended | No | `true` | Feature flag for enabling or disabling the page. |
| `GENESYS_SHOPPING_CART_ENABLED` | Recommended | Yes | `true` | Enables the cart/request workflow. |

### 6.3 Security interpretation of the client key

The existing integration passes `API_GEN_CLIENTKEY` to the browser. This document therefore treats the key as a provider-issued client credential, not as a server-only secret. Before production rollout, confirm with the Genesys service owner that:

- the key is explicitly intended for embedded browser use;
- it is restricted to approved origins where supported;
- it has only the minimum required permissions;
- it can be rotated without downtime;
- request submission is protected by CAPTCHA and provider-side controls.

If Genesys requires the key to remain secret, the design must change to a Laravel proxy or server-side integration. In that model, the browser receives only a short-lived token or session-specific public configuration, while Laravel stores the private credential and calls Genesys server-to-server.

### 6.4 Optional mail and notification variables

The current embedded workflow does not send mail through Laravel. Add these only if RBCA later needs local request notifications, confirmations, or operational alerts:

| Variable | Example | Purpose |
|---|---|---|
| `MAIL_MAILER` | `smtp` | Laravel mail transport. |
| `MAIL_HOST` | `smtp.example.org` | SMTP host. |
| `MAIL_PORT` | `587` | SMTP port. |
| `MAIL_USERNAME` | `notifications@example.org` | SMTP username. |
| `MAIL_PASSWORD` | Secret | SMTP password. |
| `MAIL_ENCRYPTION` | `tls` | SMTP encryption mode. |
| `MAIL_FROM_ADDRESS` | `notifications@example.org` | Sender address. |
| `MAIL_FROM_NAME` | `${APP_NAME}` | Sender display name. |
| `GERMPLASM_REQUEST_NOTIFICATION_EMAIL` | `genebank@example.org` | Internal request notification recipient if local notifications are implemented. |

## 8. Proposed `.env.example` Additions

Add the following block to the project’s `.env.example`:

```dotenv
# Genesys PGR embedded germplasm request page
GENESYS_ENABLED=true
GENESYS_API_URL=https://api.genesys-pgr.org
GENESYS_CLIENT_ID=
GENESYS_CLIENT_KEY=
GENESYS_CAPTCHA_SITE_KEY=
GENESYS_INSTITUTE_CODE=CIV033
GENESYS_ASSETS_URL=https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist
GENESYS_SHOPPING_CART_ENABLED=true
```

Do not commit actual client credentials, private keys, or production CAPTCHA values to the repository. `.env.example` should contain placeholders only.

## 9. Data Flow

### 8.1 Page load

1. User selects **Request for germplasm** from the RBCA navigation.
2. Laravel resolves the `req` route.
3. `PagesController::genesys()` verifies that the feature is enabled.
4. Laravel loads `config/genesys.php` values.
5. The Blade view renders the RBCA shell and Genesys mount point.
6. Browser loads pinned Genesys assets over HTTPS.
7. The initialization script passes the API URL, client identity, CAPTCHA site key, cart setting, and institute filter to Genesys.
8. Genesys loads the filtered collection into the mount point.

### 8.2 Request submission

1. User searches or browses accessions.
2. User opens accession details and adds selected material to the cart.
3. User reviews the cart.
4. Genesys presents its request form and CAPTCHA challenge.
5. Genesys validates and submits the request to the Genesys API.
6. Genesys shows confirmation or an API error.
7. Laravel remains outside the transaction unless a future webhook or API integration is added.

### 8.3 Future local integration

If RBCA needs local reporting or workflow management, add a separate integration rather than coupling the Blade page directly to a new local schema:

```text
Genesys request submitted
  -> Genesys webhook or scheduled API synchronization
  -> Laravel integration service
  -> GermplasmRequest model
  -> admin review/notification/reporting
```

The local record should store the Genesys request identifier, not duplicate the entire Genesys accession catalogue.

## 10. Error and Fallback States

The page must handle at least these cases:

| Condition | User-facing behavior | Operational action |
|---|---|---|
| Genesys feature disabled | Show a controlled “temporarily unavailable” page or 404. | Confirm deployment flag and release status. |
| Missing required environment variable | Show a setup error without exposing values. | Log a configuration error without credentials. |
| CDN asset blocked or unavailable | Show an embedded UI unavailable message with contact guidance. | Monitor CDN and CSP failures. |
| Genesys global unavailable | Show retry/contact guidance in `#genesys-container`. | Check asset order, CDN, and browser console in a controlled environment. |
| API unavailable | Keep the RBCA shell usable and show catalogue unavailable state. | Monitor Genesys API status and response failures. |
| Invalid institute code | Show no-results or configuration error, not an unrestricted catalogue. | Verify `GENESYS_INSTITUTE_CODE`. |
| CAPTCHA failure | Let the Genesys UI show retry guidance. | Check site-key/domain configuration. |
| Request submission failure | Preserve cart state where Genesys supports it and show retry guidance. | Check API response and provider logs. |

## 11. Security and Privacy Requirements

- Serve the request page and all vendor assets over HTTPS.
- Never hard-code credentials in Blade, committed JavaScript, or `genesys1.blade.php`.
- Remove or archive `genesys1.blade.php` after migration because it contains hard-coded provider credentials.
- Confirm whether the Genesys client key is browser-safe before production use.
- Restrict provider credentials by origin and permissions where supported.
- Keep `APP_DEBUG=false` in production.
- Do not log API keys, CAPTCHA values, user emails, cart contents, or request payloads.
- Add a Content Security Policy allowing only the required Genesys API, CDN, and CAPTCHA origins.
- Add a privacy notice explaining that request data is submitted to Genesys and identifying the responsible data controller.
- Ensure the external provider’s terms, retention policy, and CAPTCHA processing are acceptable to RBCA.
- Do not introduce a local database copy of personal request data without a retention and access policy.

## 12. Testing Strategy

### 11.1 Automated Laravel tests

Add feature tests for:

- `GET /request-for-germplasm` returns HTTP 200 when `GENESYS_ENABLED=true`;
- the page contains the Genesys mount element;
- the page contains the configured institute code and API endpoint in the serialized config;
- the page does not expose unrelated environment variables;
- disabled configuration returns the agreed 404 or unavailable response;
- missing required configuration produces a controlled response rather than malformed JavaScript.

Use test configuration values only. Do not use production Genesys credentials in CI.

### 11.2 Browser checks

Verify in a real browser that:

- the request link is reachable from the main navigation;
- the embedded UI loads after the vendor assets;
- only the configured institute collection is visible;
- search, accession details, cart, and request submission work;
- CAPTCHA loads on the approved domain;
- mobile layouts remain usable;
- a blocked CDN/API produces a readable fallback;
- browser refresh does not corrupt the surrounding RBCA layout.

### 11.3 Deployment smoke test

After deployment:

1. Open the production request URL.
2. Confirm no missing-variable error appears.
3. Confirm the browser network tab reaches the configured Genesys API.
4. Search for a known AfricaRice accession.
5. Add a test accession to the cart.
6. Stop before submitting a real request unless the provider supplies a test mode.
7. Verify that no client credential is printed in application logs.

## 13. Implementation Sequence

1. Create `config/genesys.php`.
2. Add the Genesys variables to `.env.example`.
3. Configure the variables in local, staging, and production environments.
4. Replace direct `env()` calls in `genesys.blade.php` with controller-provided config values.
5. Restore the pinned Genesys CSS and JavaScript assets in the active page using a layout stack.
6. Add a page-specific initialization and fallback script.
7. Add CSP rules for the required Genesys and CAPTCHA origins.
8. Remove or quarantine hard-coded credentials in `genesys1.blade.php`.
9. Add Laravel feature tests and browser smoke checks.
10. Deploy to staging and verify the configured institute filter and cart request flow.
11. Deploy to production only after confirming client-key browser safety with the Genesys provider.

## 14. Definition of Done

The germplasm request page is ready when:

- the named route works in the target environment;
- all required environment variables are documented and configured;
- the Genesys assets load from a pinned HTTPS source;
- the UI initializes without console errors;
- the collection is restricted to the intended institute code;
- users can browse, filter, add accessions, and submit a request;
- CAPTCHA works on the production hostname;
- failure states are readable and do not expose secrets;
- automated and browser checks pass;
- no hard-coded production credentials remain in the repository;
- ownership of submitted request data between RBCA and Genesys is documented.

## 15. Repository References

- Route: `routes/web.php`
- Controller: `app/Http/Controllers/PagesController.php`
- Active view: `resources/views/pages/genesys.blade.php`
- Legacy reference view: `resources/views/pages/genesys1.blade.php`
- Shared layout: `resources/views/layouts/webtemp.blade.php`
- Environment template: `.env.example`
