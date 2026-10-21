# Supabase setup

The website uses the public Supabase URL and anon/publishable key in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. These values are visible in browser requests by design. Never use a `service_role` key in a `VITE_*` variable or in browser code.

1. Put the project URL and a valid anon/publishable key in the local `.env.local` file. It is ignored by Git. Set the same variables in the deployment provider's environment settings for production builds.
2. Apply `migrations/20261022000000_community_updates.sql` in the Supabase SQL editor or through the Supabase CLI.
3. Disable public signups in Supabase Auth. Invite the owner/admin account from the Supabase dashboard.
4. Add that invited user's UUID to `public.site_admins` from the Supabase SQL editor. Only allowlisted users can publish.
5. Publish updates from `/admin`. Each listing requires a source URL; only published rows appear on the public homepage.

No service-role key or admin password belongs in this repository. The anon key is a public client key; row-level security in the migration is what protects writes and draft content.
