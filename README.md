# RBCA React + Supabase

React/Vite frontend for the Dr. Monty P. Jones Rice Biodiversity Center for Africa.

## Development

1. Copy `.env.example` to `.env.local` and add the Supabase project URL and publishable key.
2. Install dependencies with `npm install`.
3. Start the frontend with `npm run dev`.

### Admin access

Create administrator identities in Supabase Auth, then create a matching profile from the SQL editor:

```sql
insert into public.profiles (id, display_name, role)
values ('AUTH_USER_UUID', 'RBCA Administrator', 'admin');
```

Set these server-side environment variables in local and Vercel environment settings:

- `SUPABASE_URL`
- `SUPABASE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_SESSION_SECRET`

Redeploy after changing Vercel variables. The admin dashboard only accepts Supabase Auth credentials whose profile role is `admin`; credentials are never stored in source code.

Apply the database schema with the Supabase CLI:

```powershell
supabase db push
```

The migration in `supabase/migrations/20260918000000_rbca_backend.sql` owns the application backend schema, constraints, timestamp triggers, and row-level security. Supabase Auth owns identities; service-role operations must run in Edge Functions or another trusted server environment and must never be bundled into the browser.
