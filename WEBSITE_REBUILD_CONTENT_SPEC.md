# RBCA Website Rebuild Content and Data Specification

**Source project:** Laravel 11 application in this repository  
**Purpose:** Complete reference for rebuilding the Rice Biodiversity Center for Africa (RBCA) website with a new frontend, such as React + Vite, while preserving page content, routes, forms, integrations, and data contracts.

## 1. Rebuild Principles

- Preserve the existing database data and migration history.
- Preserve public URL paths wherever possible.
- Keep Laravel or another compatible service as the backend until every form, authentication flow, export, and survey workflow has an equivalent API.
- Use React + Vite for the new UI, but do not move secrets into browser code.
- Treat the current Blade files as the authoritative source for the public copy and asset references.
- Keep all claims, numbers, citations, image references, and external links below unless content owners approve updates.
- Never commit real API client keys or admin passwords. Use server environment variables.

## 2. Site Identity and Shared UI

**Organization:** Rice Biodiversity Center for Africa (RBCA), also referred to as AfricaRice Genebank.

**Primary public title:** Dr. Monty P. Jones Rice Biodiversity Center for Africa.

**Shared layout:** `resources/views/layouts/webtemp.blade.php`

Shared navigation categories represented in the current layout:

- Home
- About: Inauguration, Genebank
- Species: African rice, Asian rice, Interspecific genotypes, Wild relatives
- What we do / routine operations: Collection and acquisition, Conservation, Safety duplication, Regeneration, Characterization, Distribution, Database management
- Research activities: Genomics of genebanks, Quality control analysis, Sub-setting
- Publications: Journals/articles, Book
- Data: Subsets, Genomics data, Characterization data
- Request for germplasm
- Contact
- Feedback/questionnaire pages
- CGIAR Molecular Characterisation Survey

Shared visual and functional dependencies:

- Bootstrap CSS and JS
- Animate.css
- Bootstrap Icons, Boxicons, Remixicon
- AOS animation library
- GLightbox
- Swiper
- Isotope and ImagesLoaded
- Main site JavaScript: `public/files/src/js/main.js`
- Main site CSS: `public/files/src/css/main.css`
- Existing Vite entry points: `resources/css/app.css`, `resources/js/app.js`

## 3. Public Route and Content Inventory

### 3.1 Home

| URL | Source | Displayed content |
|---|---|---|
| `/` | `resources/views/pages/home.blade.php` | Hero, RBCA introduction, About section, mandate/activity tabs, publication callout, statistics/content sections, shared footer. |

#### Home hero copy

- **Welcome to the Dr. Monty P. Jones Rice Biodiversity Center for Africa**
- RBCA is described as a leading agricultural innovation center, housing the world's most extensive collection of African rice and the largest rice genetic repository on the continent.
- Inventory claim: nearly 22,000 accessions.
- Facility capacity claim: up to 60,000 rice varieties under optimal conditions.
- Purpose: preserve genetic resources for resilient, high-yielding varieties adapted to Africa's agro-ecological zones.
- CTA: `Get start`, linking to `#about`.

#### Home publication slide

- **New publication: Application of Genomics in Supporting Efficient Conservation and Utilization of Plant Genetic Resources**
- Summary: genomics applications in seed-bank ex situ conservation and use; acquisition gap analysis; identification of rare, threatened, and novel resources.
- CTA: `Read More`, linking to `/book`.

#### Home About copy

- RBCA is one of 11 international CGIAR genebanks operating within the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA).
- AfricaRice represents an association of 28 African countries and conserves rice genetic resources in trust for humanity, making them available to all.
- AfricaRice works with national programs and international organizations.
- Collection claim: almost 21,035 accessions in ultra-modern infrastructure, with capacity for up to 60,000 accessions.
- 85% of the collection originated in Africa.
- The collection includes two cultivated rice species and related wild African species.
- The resources support development of varieties adapted to African agro-ecologies.
- CTA: `Read More`, linking to `/genebank`.

#### Home activity tabs

- **Promoting the Conservation of African Rice:** preserve traditional African rice varieties; support drought tolerance, disease resistance, and yield; work with farmers and indigenous communities; collaborate through seed treaties and research networks.
- **Managing Genebank Operations:** acquisition/documentation; storage/preservation; quality control; distribution/access; data management; maintain resources for future generations.
- **Driving Scientific Research and Innovation:** use genomics, bioinformatics, and high-throughput sequencing; support gene discovery, donor identification, genetic preservation, regeneration, and characterization.
- **Showcasing Biodiversity and Raising Awareness:** explore rare/resilient varieties and wild relatives; educational outreach; global collaboration; research for climate resilience, food security, and ecosystem restoration.
- **Fostering Collaboration and Knowledge Sharing:** activity label present in the home tab navigation; preserve the full tab content from the Blade source when rebuilding.

Home image references include `files/img/pub/pub1.jpeg`, `files/img/home/cons.jpg`, `cons2.jpg`, `oppp.jpg`, and `work.jpg`.

### 3.2 About

| URL | Page title | Content |
|---|---|---|
| `/inauguration` | Inauguration | RBCA inauguration history and facility role. Hero images: `files/img/about/inauguration/slide1.jpg`, `slide2.jpg`. |
| `/genebank` | About the genebank | Climate-change context, germplasm interdependence, RBCA collection mandate, conservation, safety duplication, monitoring, regeneration, characterization, data management, and distribution. Hero: `files/img/about/genebank/slide1.jpg`. |

#### Inauguration copy points

- Officially inaugurated on 21 February 2020 at the AfricaRice Research Station in M'Bé near Bouaké, Côte d'Ivoire.
- Ceremony led by Dr Abdallah Toikeusse Mabri, Minister of Higher Education and Scientific Research, in the presence of Mr Gaoussou Touré, Minister for the Promotion of Rice.
- Donor/support references: African Development Bank, CGIAR Genebank Platform, Global Crop Diversity Trust, and AfricaRice member countries.
- Participants included AfricaRice Board representatives, international and national partners, local government representatives, and traditional chiefs.
- New genebank holds almost 21,035 accessions in long-term storage in trust for humanity under ITPGRFA.
- RBCA is one of 11 CGIAR genebanks and manages modern cultivars, traditional varieties, and related wild African species.
- Resources support varieties adapted to African agro-ecologies, education, food security, poverty reduction, and cultural awareness.

#### Genebank copy points

- Africa is vulnerable to climate change, with genetic diversity declining and biotic/abiotic stresses changing.
- Broad geographical germplasm is needed for breeding, research, and training; no country is self-sufficient.
- Rice is a major global crop and a staple in Africa.
- RBCA collects/acquires wild accessions, landraces, traditional/farmer varieties, and improved varieties.
- Mandate includes ex situ conservation, safety duplication, monitoring, regeneration, characterization, data management, and distribution.
- RBCA is described as the third-largest rice collection globally and largest in Africa.
- References include IRRI, Dale Bumpers National Rice Research Center, Genesys, and climate-change source links.

### 3.3 Species

| URL | Title | Core content |
|---|---|---|
| `/species-african` | African rice | `Oryza glaberrima Steud.` is approximately 17% of the collection; stress resistance/tolerance; cultivation in Guinea-Bissau, Guinea, Sierra Leone, Ghana/Togo; nutritional and farmer-use context; genetic diversity, molecular diversity, SNP and DArTseq research. |
| `/species-asian` | Asian rice | `Oryza sativa L.` is approximately 79% of the collection, including about 49% indica and 30% japonica; history of introduction to West Africa; stress limitations; research references. |
| `/interspecifics` | Interspecific genotypes | Crosses between African and Asian rice; NERICA varieties; ARICA varieties; approximately 3% of the collection; DArTseq genetic relatedness results and breeding implications. |
| `/wild` | Wild relatives | Five wild species: `O. longistaminata`, `O. barthii`, `O. punctata`, `O. brachyantha`, `O. eichingeri`; collectively about 1% of collection; stress-resistance value; GBIF herbarium data and collecting-mission targets. |

Species hero assets are under `public/files/img/species/{african,asian,inter,wild}/`.

Important publication/reference links embedded in these pages include AGRIS, Crop Science, PLOS ONE, Springer, ResearchGate, PubMed, Nature, Wiley, NCBI PMC, Frontiers in Plant Science, GBIF, Gramene, and AfricaRice/ARICA resources. Preserve their target URLs as reference metadata.

### 3.4 What We Do / Routine Operations

| URL | Page | Content to preserve |
|---|---|---|
| `/acquisition` | Collection / Acquisition | More than 25 Oryza species exist; only African and Asian rice are cultivated; RBCA holds about 21,300 registered samples, 85% from Africa; five wild species; direct collection since the 1970s and donations from NARS, ORSTOM, IRAT, IITA, and CIAT; legal compliance. |
| `/conservation` | Conservation | Seed-bank ex situ conservation; STS/MTS/LTS conditions; drying room 15–19 C and RH 14–18%; MTS 2–5 C and about 35% RH; LTS -21 to -16 C, 6% moisture, hermetic aluminum packets; monitoring, fire protection, backup power; ITPGRFA/FAO; seed-health, germination, viability testing; active collection checks every 5 years and base collection checks every 10 years. |
| `/safety-duplication` | Safety duplication | Risk mitigation through genetically identical duplicates at another location; black-box approach; one duplicate per accession; suitable secure low-risk location; sufficient quantity and packaging; primary site NCGRP, Fort Collins, USA; secondary site Svalbard Global Seed Vault, Norway; legal agreements and depositor control. |
| `/regeneration` | Regeneration | Renewal/multiplication/rejuvenation; reasons include purification, quantity, low viability, poor quality, or pathogens; thresholds of 75% for wild and 85% for cultivated species; stock threshold below 100 g; genetic integrity risks; post-rainy season, greenhouse protection, equal plant sampling, genotyping quality control. |
| `/characterization` | Characterization | Morphological/agronomic characterization during regeneration; traits include color, tillering, flowering/maturity, height, leaf, floral, panicle, and seed characters; field-cycle methods; at least 10 plants per accession per replication; phenotypic diversity, subset identification, throughput and quantitative-trait limitations. |
| `/distribution` | Distribution | Free small seed quantities for breeding, research, and education worldwide; governed by ITPGRFA and CBD; SMTA, phytosanitary, import/export requirements; historical metrics: 124,604 samples to 164 institutions in 57 countries from 1995–2019; 63% DOI samples; 14,114 of 21,300 accessions with DOI; species-specific distribution percentages and 2012–2019 figures. |
| `/data-management` | Database management | Genebank information management includes documentation, capture, custodianship, protection, and access to activities, metadata, software, IT, media, reports, policies, and protocols; searchable systems support requests, downloads, feedback, curation, and regeneration planning; references Genesys and GRIN-Global. |

Relevant operation images are under `public/files/img/operation/`.

### 3.5 Research Activities

| URL | Page | Content |
|---|---|---|
| `/genomics-for-genebank` | Genomics of Genebanks | Low-cost high-density GBS/DArTseq enables curation, allele mining, molecular passports, diversity profiling, subset/minicore creation, gap analysis, and correction of mislabels/classification. Pilot: about 4,000 accessions and 31,739 DArTseq SNPs; later total 9,120 genotyped, 8,381 public in Genesys. |
| `/quality-control-analysis` | Quality Control Analysis | Preserve the complete Blade text and references covering seed quality, identity, genetic integrity, testing, and routine genebank QC. Source: `resources/views/pages/activitie/quality.blade.php`. |
| `/sub-setting` | Sub-setting | Preserve the complete Blade text and references covering subsets/minicore collections and representative genetic diversity. Source: `resources/views/pages/activitie/sub.blade.php`. |

### 3.6 Publications

| URL | Source | Content |
|---|---|---|
| `/articles` | `resources/views/pages/publication/journal.blade.php` | Journal/article publication listings and links. Preserve every title, author/year, image, DOI, and external URL from the source view. |
| `/book` | `resources/views/pages/publication/book.blade.php` | Book/chapter publication content, including “Application of Genomics in Supporting Efficient Conservation and Utilization of Plant Genetic Resources.” Preserve all linked publication metadata. |

The home page links to `/book` for the genomics publication. Publication images are under `public/files/img/pub/`.

### 3.7 Data Pages

| URL | Page | Content/data |
|---|---|---|
| `/subsets` | Subsets | Static description and external Genesys subset link(s); preserve all subset names, summaries, downloads, and links in `resources/views/pages/data/subset.blade.php`. |
| `/genomics-data` | Genomics data | Genotype-data description and download/reference links. Source: `resources/views/pages/data/genomic.blade.php`. |
| `/characterization-data` | Characterization data | Phenotype/characterization datasets, Genesys dataset link, instructions for filtering Africa Rice Center data in Genesys. Source: `resources/views/pages/data/chardata.blade.php`. |

### 3.8 Request for Germplasm / Genesys

| URL | Source | Behavior |
|---|---|---|
| `/request-for-germplasm` | `resources/views/pages/genesys.blade.php` | Embeds Genesys UI v1.6.0 into `#genesys-container`. |

Navigation labels inside the embed:

- Home
- Overview
- Map
- Bibliography
- Cart
- Subsets
- Datasets
- Trait data

External scripts:

- `https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.css`
- `https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.js`
- `https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-ui.js`

Genesys configuration required as server environment variables:

```env
API_GEN_URL=https://api.genesys-pgr.org
API_GEN_CLIENTID=<Genesys client id>
API_GEN_CLIENTKEY=<Genesys client key>
API_GEN_CAPTCHA=<public captcha site key>
API_GEN_INSCODE=<institute code, currently CIV033>
```

Do not put `API_GEN_CLIENTKEY` in a React bundle. Proxy token/API calls through the backend or use the vendor-approved embedded UI configuration. The current configured client can obtain an OAuth token but may receive `403 Forbidden` from Genesys endpoints if its permissions/origin access are not enabled. The rebuild must support requesting authorization for local and production origins.

### Secret and environment configuration

The live `.env` file is the source of truth for local credentials. Do not copy its values into this document, source control, a React bundle, screenshots, issue reports, or frontend-delivered configuration. The following inventory identifies every value that must be provisioned for a new deployment:

| Variable | Required | Sensitivity | Used by |
|---|---:|---|---|
| `APP_KEY` | Yes | Secret | Laravel encryption, sessions, signed cookies |
| `DB_PASSWORD` | Yes when database requires it | Secret | MySQL/MariaDB connection |
| `API_GEN_CLIENTID` | Yes for the Genesys embed | Credential identifier | Genesys OAuth client |
| `API_GEN_CLIENTKEY` | Yes for the Genesys embed | **Secret** | Genesys OAuth client credential; backend only |
| `API_GEN_CAPTCHA` | Yes for the Genesys embed | Public integration key | Genesys/reCAPTCHA client configuration |
| `API_GEN_URL` | Yes | Public endpoint | Genesys API base URL |
| `API_GEN_INSCODE` | Yes | Public institute identifier | Genesys institute filter |
| `SURVEY_ADMIN_PASSWORD` | Yes for survey administration | Secret bcrypt hash | Admin login; store a bcrypt hash, never plaintext |
| `MAIL_HOST` | If contact/reset email is enabled | Infrastructure credential/config | Outgoing email |
| `MAIL_PORT` | If contact/reset email is enabled | Infrastructure config | Outgoing email |
| `MAIL_USERNAME` | If SMTP authentication is enabled | Secret | Outgoing email |
| `MAIL_PASSWORD` | If SMTP authentication is enabled | Secret | Outgoing email |
| `MAIL_ENCRYPTION` | If SMTP requires encryption | Infrastructure config | Outgoing email |
| `MAIL_FROM_ADDRESS` | Yes for production email | Public/config | Outgoing email sender |
| `AWS_ACCESS_KEY_ID` | Only if S3 storage is used | Secret identifier | Optional object storage |
| `AWS_SECRET_ACCESS_KEY` | Only if S3 storage is used | **Secret** | Optional object storage |
| `AWS_DEFAULT_REGION` | Only if S3 storage is used | Config | Optional object storage |
| `AWS_BUCKET` | Only if S3 storage is used | Config | Optional object storage |
| `REDIS_PASSWORD` | Only if Redis authentication is enabled | Secret | Optional cache/queue/session backend |

Safe deployment template:

```env
APP_KEY=base64:<generate-with-laravel>
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=<database-name>
DB_USERNAME=<database-user>
DB_PASSWORD=<database-password>

API_GEN_URL=https://api.genesys-pgr.org
API_GEN_CLIENTID=<request-from-Genesys-administrator>
API_GEN_CLIENTKEY=<request-from-Genesys-administrator>
API_GEN_CAPTCHA=<public-site-key>
API_GEN_INSCODE=CIV033

SURVEY_ADMIN_PASSWORD=<bcrypt-hash-only>
MAIL_HOST=<smtp-host>
MAIL_PORT=2525
MAIL_USERNAME=<smtp-user>
MAIL_PASSWORD=<smtp-password>
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=<verified-sender>
```

Provisioning commands:

```powershell
# Generate a new Laravel application key after creating the local .env.
C:\xampp\php\php.exe artisan key:generate

# Generate a bcrypt hash without placing the plaintext password in the document.
C:\xampp\php\php.exe -r "echo password_hash('TYPE_PASSWORD_LOCALLY', PASSWORD_BCRYPT), PHP_EOL;"

# Clear configuration after changing environment variables.
C:\xampp\php\php.exe artisan config:clear
```

Operational requirements:

- Replace the existing Genesys client if the API returns `403 Forbidden`; OAuth success alone does not prove API permission.
- Ask the Genesys administrator to authorize both the local and production origins.
- Rotate any credential that has been pasted into a public issue, chat, commit, or document.
- Keep `.env` and production secret storage outside version control. Commit only `.env.example` with placeholders.
- Never expose `API_GEN_CLIENTKEY`, `DB_PASSWORD`, `MAIL_PASSWORD`, `AWS_SECRET_ACCESS_KEY`, or the plaintext survey admin password to browser code.

### 3.9 Contact

| URL | Content |
|---|---|
| `/contact` | Hero “CONTACT US”; Google Maps embed for Africa Rice Center; location `01 BP 2551, Bouaké, Côte d’Ivoire`; telephone `+225 27 22 48 09 20`; fax `+225 27 31 63 25 78`; email `m.ndjiondjop@cgiar.org`; contact form fields: name, email, subject, message. The current form is a front-end form with `action="#"`; a new site should add a real protected mail endpoint. |

## 4. Questionnaire and Feedback Systems

### 4.1 Feedback questionnaire

Routes:

- `GET /feedback`
- `GET/POST /page-1`
- `GET/POST /page-2`
- `GET/POST /page-3`
- `GET/POST /page-4`
- `GET/POST /page-5`
- `GET /end`
- `GET /fb-all-data`
- `GET /export_xls` authenticated

Behavior:

- Starts with email validation and duplicate check.
- Stores a multi-step response in the session under `data`.
- Collects institution, user group, germplasm request, traits, characterization/evaluation goals, future traits, percentage, seed rate, service rate, and comments.
- Final submission persists a `Feed` record and clears session state.
- `GET /fb-all-data` paginates feedback records.
- Authenticated `/export_xls` downloads `feeddata.xls` using `ExportFeed`.

### 4.2 NARS evaluation

Routes:

- `GET/POST /nars-evaluation`
- `GET /nars-evaluation-end`
- `GET /nars-evaluation-data`
- `GET /export_xls_ne`

Collected fields include name, email, institution, contact, stress traits, facilities, hotspot location, location, and rice genetic resources. Persisted model/table: `Feedsw` / `feedsws`. Export class: `ExportFeedsw`.

### 4.3 CGIAR Molecular Characterisation Survey

Routes:

- `GET /molecular-characterisation-survey` landing page
- `GET /survey` full survey
- `POST /survey/submit`
- `POST /survey/draft`
- `GET /survey/draft/{uuid}`
- `GET /thank-you/{uuid}`
- `GET /admin/login`
- `POST /admin/login`
- `POST /admin/logout`
- `GET /admin`
- `GET /admin/responses`
- `GET /admin/export/csv`
- `GET /admin/export/json`

Survey title: **CGIAR Genebank Accelerator · AoW5 Molecular Characterisation**.  
Subtitle: **Molecular Characterisation Survey**.  
Description: **Survey of National Genebank Managers — Strengthening NARS Partner Capacity for Integrated In-situ and Ex-situ Conservation**.

Six modules:

1. About You and Your Institution
2. Sequencing Knowledge and Experience
3. Infrastructure and Resources
4. Data Management and Sharing
5. Genetic Resources and DSI Policies, Laws and Experiences
6. Interest in Future Collaborative DSI Generation for Genebank Use

The complete question definitions, labels, options, conditional rules, matrix rows, ranking rules, placeholders, and images are the authoritative data model in `config/survey.php`. It contains Q1–Q54, including conditional questions, matrix questions, multi-select questions, long text, email, single-select, and ranking question types.

Important validation rules:

- Q2 email is required and must be valid.
- Completed responses are unique by normalized email.
- Q38 and Q50 must contain exactly ranks 1, 2, and 3.
- Drafts save arbitrary answer JSON and current section metadata.
- Survey submissions save raw answers plus analytics fields for Q34, Q38, Q43, and Q50.

## 5. Database/Data Model

### `users`

Laravel Breeze authentication table. Preserve user id, name, email, password, email verification timestamp, remember token, and timestamps.

### `feeds`

Legacy feedback/questionnaire response table. Fields:

- id, email, institution, accession
- `cgiar_3`, `nars_3`, `university_3`, `individual_3`, `famer_3`, `requested`
- NARS exchange/share/send/evaluation booleans and explanation text fields
- stress/trait booleans for question 6
- use-purpose booleans for question 7
- future-trait booleans and `other_8`
- percent, seedrate, servicerate, comments
- created_at, updated_at

### `feedsws`

NARS evaluation table:

- id
- name
- email
- institution
- contact
- stress_traits
- facilities
- hotspot_location
- location
- rice_genetic
- created_at, updated_at

### `accessions`

Legacy accession lookup table from `2024_07_22_214025_create_accessions_table.php`. Preserve every column and index exactly from the migration/model; it supports accession search and selection in legacy questionnaire code.

### `feeders`

Legacy feeder/accession-related table from `2024_07_22_214146_create_feeders_table.php`. Preserve migration/model fields exactly.

### `feedsws`-related source tables

`2024_11_26_113831_create_feedsws_table.php` defines the current NARS evaluation table. Check the migration when importing an existing production database rather than recreating it blindly.

### `survey_responses`

- id
- response_uuid, unique
- respondent_name, email, unique normalized email
- institution, position, country
- answers JSON/text
- q34_constraint
- q38_ranked_needs JSON/text
- q43_uncertainty
- q50_ranked_support JSON/text
- submitted_at
- created_at, updated_at

### `survey_drafts`

- id
- draft_uuid, unique
- email nullable
- answers JSON/text
- last_saved_at
- created_at, updated_at

### Laravel infrastructure tables

- `cache`
- `cache_locks`
- `jobs`
- `job_batches`
- `failed_jobs`
- `sessions`
- `password_reset_tokens`

The current application uses database sessions, so the replacement must retain the sessions table or intentionally switch to a documented alternative.

## 6. API and Backend Contracts

Recommended new API boundary for a React client:

- `GET /api/site/pages` or static CMS/content bundle for informational page content.
- `POST /api/feedback/start`, `POST /api/feedback/step/{step}`, `POST /api/feedback/submit`.
- `GET /api/feedback` protected admin endpoint.
- `GET /api/feedback/export.xlsx` protected endpoint.
- `POST /api/nars-evaluation`, `GET /api/nars-evaluation/export.xlsx`.
- `GET /api/survey/config` generated from `config/survey.php`.
- `POST /api/survey/drafts`, `GET /api/survey/drafts/{uuid}`, `POST /api/survey/submit`.
- `POST /api/admin/login`, `POST /api/admin/logout`, `GET /api/admin/summary`, `GET /api/admin/responses`, `GET /api/admin/export.csv`, `GET /api/admin/export.json`.
- `POST /api/contact` with validation, throttling, spam protection, and mail delivery.
- Genesys calls should use the approved vendor embed or a backend proxy; never expose the client key in public JavaScript.

Preserve CSRF/authentication behavior. A React SPA served by Laravel can use session cookies and CSRF tokens; a separate frontend origin should use a formally configured token strategy such as Sanctum.

## 7. Asset Inventory and Migration Notes

- Main image root: `public/files/img/`
- Main static libraries: `public/files/src/`
- CGIAR survey assets: `public/files/cgiarsurvey/`
- Survey images include hero, overview, section images, and CGIAR logos.
- `public/files/src/lib/imagesloaded/imagesloaded.pkgd.min.js` is required by the main site's Isotope initialization.
- Preserve all image paths used in Blade pages, including carousel order and figure captions.
- Convert Blade `asset(...)` references to a centralized React asset map or Laravel `/files/...` URLs.
- Do not copy inline SVG illustrations into a CMS without preserving their visual appearance and accessibility labels.

## 8. Authentication and Authorization

Current auth is Laravel Breeze-style:

- register, login, logout
- forgot/reset password
- email verification
- confirm password
- password update
- profile edit/update/delete
- dashboard route requiring `auth` and `verified`
- authenticated Excel export

Separate survey admin auth uses `SURVEY_ADMIN_PASSWORD` and a session flag `is_admin`, with rate limiting. Rebuild it with a real admin identity/role if possible, while maintaining backward-compatible access during transition.

## 9. Migration Acceptance Checklist

- Every route in `routes/web.php` has a React route or an intentional backend-only route.
- Home, About, Species, What We Do, Publications, Data, Genebank, Contact, Feedback, NARS evaluation, and CGIAR survey pages render all source copy and media.
- Existing database data imports without loss.
- Feedback and survey submissions produce records equivalent to current tables.
- Draft save/load and duplicate-email protection work.
- Q38 and Q50 ranking validation remains exact.
- CSV, JSON, and Excel exports preserve every field.
- Auth, email verification, profile operations, and protected exports work.
- Genesys embed/API works with authorized credentials and approved origins.
- Contact form delivers or clearly reports messages.
- Public URLs, redirects, and external reference links are preserved.
- Mobile layout, image carousels, tabs, survey navigation, and accessibility states are tested.

## 10. Source of Truth Files

- Routes: `routes/web.php`, `routes/auth.php`
- Page controllers: `app/Http/Controllers/PagesController.php`
- Feedback controller: `app/Http/Controllers/QuesController.php`
- CGIAR survey controller: `app/Http/Controllers/SurveyController.php`
- Admin controller: `app/Http/Controllers/AdminController.php`
- Public copy: `resources/views/pages/**/*.blade.php`
- Survey question schema: `config/survey.php`
- Survey views: `resources/views/survey/**/*.blade.php`
- Database schema: `database/migrations/*.php`
- Shared layout/navigation: `resources/views/layouts/webtemp.blade.php`, `resources/views/layouts/navigation.blade.php`
- Main styles/scripts: `public/files/src/css/main.css`, `public/files/src/js/main.js`
- CGIAR survey styles/scripts: `public/files/cgiarsurvey/css/app.css`, `public/files/cgiarsurvey/js/survey.js`
