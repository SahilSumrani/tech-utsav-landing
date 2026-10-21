import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase, isSupabaseConfigured, type CommunityUpdate } from "@/lib/supabase";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Community updates admin — TechUtsav India" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedInEmail, setSignedInEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [updates, setUpdates] = useState<CommunityUpdate[]>([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const loadAdminState = async () => {
    if (!supabase) return;
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setSignedInEmail(user?.email ?? null);
    if (!user) {
      setIsAdmin(false);
      setUpdates([]);
      return;
    }

    const { data: membership, error: membershipError } = await supabase
      .from("site_admins")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();
    if (membershipError || !membership) {
      setIsAdmin(false);
      setMessage(
        "This account does not have publishing access. Ask the project owner to grant admin access.",
      );
      return;
    }

    setIsAdmin(true);
    const { data, error } = await supabase
      .from("community_updates")
      .select(
        "id, title, summary, category, source_url, deadline, published_at, created_at, status",
      )
      .order("created_at", { ascending: false });
    if (error) setMessage(error.message);
    else setUpdates((data as CommunityUpdate[] | null) ?? []);
  };

  useEffect(() => {
    if (!supabase) return;
    void loadAdminState();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      window.setTimeout(() => void loadAdminState(), 0);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;
    setBusy(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    setPassword("");
    setBusy(false);
    await loadAdminState();
  };

  const handlePublish = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setBusy(true);
    setMessage("");
    const status = form.get("status") as "draft" | "published";
    const { error } = await supabase.from("community_updates").insert({
      title: form.get("title"),
      summary: form.get("summary"),
      category: form.get("category"),
      source_url: form.get("source_url"),
      deadline: form.get("deadline") || null,
      status,
      published_at: status === "published" ? new Date().toISOString() : null,
    });
    if (error) setMessage(error.message);
    else {
      formElement.reset();
      setMessage(status === "published" ? "Update published." : "Draft saved.");
      await loadAdminState();
    }
    setBusy(false);
  };

  const handleDelete = async (id: string) => {
    if (!supabase) return;
    setBusy(true);
    const { error } = await supabase.from("community_updates").delete().eq("id", id);
    setMessage(error?.message ?? "Update deleted.");
    await loadAdminState();
    setBusy(false);
  };

  const handleSignOut = async () => {
    await supabase?.auth.signOut();
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-[#F8F1E5] px-4 py-12 text-[#111814] sm:px-6">
      <div className="mx-auto max-w-3xl">
        <a className="text-sm font-semibold text-[#006143] hover:text-[#E65A24]" href="/">
          ← Back to TechUtsav India
        </a>
        <h1 className="mt-6 font-display text-4xl font-bold">Community updates</h1>
        <p className="mt-2 text-sm leading-6 text-[#4A554E]">
          Publish only useful information you have checked against its original source.
        </p>

        {!isSupabaseConfigured && (
          <Notice>
            Supabase is not configured for this deployment. Add the VITE_SUPABASE_URL and
            VITE_SUPABASE_ANON_KEY environment variables.
          </Notice>
        )}
        {message && <Notice>{message}</Notice>}

        {!signedInEmail && isSupabaseConfigured && (
          <form
            onSubmit={handleLogin}
            className="mt-8 grid gap-4 rounded-3xl border border-[#E3D9C9] bg-white p-6 shadow-sm"
          >
            <h2 className="font-display text-2xl font-bold">Admin sign in</h2>
            <label className="grid gap-1 text-sm font-semibold">
              Email
              <input
                required
                type="email"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-xl border border-[#D8D0C4] px-3 py-2 font-normal"
              />
            </label>
            <label className="grid gap-1 text-sm font-semibold">
              Password
              <input
                required
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="rounded-xl border border-[#D8D0C4] px-3 py-2 font-normal"
              />
            </label>
            <button
              disabled={busy}
              className="min-h-11 rounded-full bg-[#003B27] px-5 font-bold text-white disabled:opacity-60"
            >
              {busy ? "Signing in…" : "Sign in"}
            </button>
          </form>
        )}

        {signedInEmail && !isAdmin && (
          <div className="mt-8 rounded-3xl border border-[#E3D9C9] bg-white p-6">
            <p>Signed in as {signedInEmail}</p>
            <button
              onClick={() => void handleSignOut()}
              className="mt-4 font-semibold text-[#006143]"
            >
              Sign out
            </button>
          </div>
        )}

        {isAdmin && (
          <>
            <div className="mt-8 flex items-center justify-between rounded-2xl border border-[#E3D9C9] bg-white px-5 py-4 text-sm">
              <span>
                Signed in as <strong>{signedInEmail}</strong>
              </span>
              <button onClick={() => void handleSignOut()} className="font-semibold text-[#006143]">
                Sign out
              </button>
            </div>
            <form
              onSubmit={handlePublish}
              className="mt-5 grid gap-4 rounded-3xl border border-[#E3D9C9] bg-white p-6 shadow-sm"
            >
              <h2 className="font-display text-2xl font-bold">Add a verified update</h2>
              <label className="grid gap-1 text-sm font-semibold">
                Title
                <input
                  required
                  minLength={5}
                  maxLength={120}
                  name="title"
                  className="rounded-xl border border-[#D8D0C4] px-3 py-2 font-normal"
                />
              </label>
              <label className="grid gap-1 text-sm font-semibold">
                Summary
                <textarea
                  required
                  minLength={20}
                  maxLength={500}
                  name="summary"
                  rows={3}
                  className="rounded-xl border border-[#D8D0C4] px-3 py-2 font-normal"
                />
              </label>
              <label className="grid gap-1 text-sm font-semibold">
                Category
                <select
                  name="category"
                  className="rounded-xl border border-[#D8D0C4] px-3 py-2 font-normal"
                >
                  <option>Learning resource</option>
                  <option>Opportunity</option>
                  <option>Community update</option>
                </select>
              </label>
              <label className="grid gap-1 text-sm font-semibold">
                Original source URL
                <input
                  required
                  type="url"
                  pattern="https://.*"
                  name="source_url"
                  placeholder="https://"
                  className="rounded-xl border border-[#D8D0C4] px-3 py-2 font-normal"
                />
              </label>
              <label className="grid gap-1 text-sm font-semibold">
                Deadline (optional)
                <input
                  type="date"
                  name="deadline"
                  className="rounded-xl border border-[#D8D0C4] px-3 py-2 font-normal"
                />
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  disabled={busy}
                  name="status"
                  value="published"
                  className="min-h-11 rounded-full bg-[#003B27] px-5 font-bold text-white disabled:opacity-60"
                >
                  Publish update
                </button>
                <button
                  disabled={busy}
                  name="status"
                  value="draft"
                  className="min-h-11 rounded-full border border-[#003B27] px-5 font-bold text-[#003B27] disabled:opacity-60"
                >
                  Save draft
                </button>
              </div>
            </form>
            <section className="mt-8" aria-labelledby="saved-updates">
              <h2 id="saved-updates" className="font-display text-2xl font-bold">
                Saved updates
              </h2>
              <div className="mt-4 grid gap-3">
                {updates.map((update) => (
                  <article
                    key={update.id}
                    className="flex flex-wrap items-start justify-between gap-3 rounded-2xl border border-[#E3D9C9] bg-white p-5"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#E65A24]">
                        {update.category} · {"status" in update ? String(update.status) : "saved"}
                      </p>
                      <h3 className="mt-1 font-semibold">{update.title}</h3>
                      <p className="mt-1 text-sm text-[#4A554E]">{update.summary}</p>
                      <a
                        className="mt-2 inline-block text-sm text-[#006143] underline"
                        href={update.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open source
                      </a>
                    </div>
                    <button
                      disabled={busy}
                      onClick={() => void handleDelete(update.id)}
                      className="rounded-full border border-red-200 px-4 py-2 text-xs font-bold text-red-700"
                    >
                      Delete
                    </button>
                  </article>
                ))}
                {updates.length === 0 && (
                  <p className="rounded-2xl bg-white p-5 text-sm text-[#4A554E]">
                    No updates saved yet.
                  </p>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

function Notice({ children }: { children: string }) {
  return (
    <p
      role="status"
      className="mt-5 rounded-2xl border border-[#D5E6DC] bg-white px-4 py-3 text-sm text-[#355242]"
    >
      {children}
    </p>
  );
}
