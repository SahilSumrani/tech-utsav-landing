-- Public visitors can only read published updates. Only UUIDs explicitly
-- added to site_admins by the project owner can create, edit or remove rows.
create table if not exists public.site_admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.community_updates (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 5 and 120),
  summary text not null check (char_length(summary) between 20 and 500),
  category text not null check (category in ('Learning resource', 'Opportunity', 'Community update')),
  source_url text not null check (source_url ~ '^https://'),
  deadline date,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.site_admins enable row level security;
alter table public.community_updates enable row level security;

drop policy if exists "Admins can read their own membership" on public.site_admins;
create policy "Admins can read their own membership"
  on public.site_admins for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Anyone can read published community updates" on public.community_updates;
create policy "Anyone can read published community updates"
  on public.community_updates for select to anon, authenticated
  using (status = 'published' or exists (
    select 1 from public.site_admins where site_admins.user_id = (select auth.uid())
  ));

drop policy if exists "Admins can create community updates" on public.community_updates;
create policy "Admins can create community updates"
  on public.community_updates for insert to authenticated
  with check (exists (
    select 1 from public.site_admins where site_admins.user_id = (select auth.uid())
  ));

drop policy if exists "Admins can edit community updates" on public.community_updates;
create policy "Admins can edit community updates"
  on public.community_updates for update to authenticated
  using (exists (
    select 1 from public.site_admins where site_admins.user_id = (select auth.uid())
  ))
  with check (exists (
    select 1 from public.site_admins where site_admins.user_id = (select auth.uid())
  ));

drop policy if exists "Admins can delete community updates" on public.community_updates;
create policy "Admins can delete community updates"
  on public.community_updates for delete to authenticated
  using (exists (
    select 1 from public.site_admins where site_admins.user_id = (select auth.uid())
  ));

grant select on public.site_admins to anon, authenticated;
grant select on public.community_updates to anon, authenticated;
grant insert, update, delete on public.community_updates to authenticated;
