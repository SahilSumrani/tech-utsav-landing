import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Lock, Mail, AlertCircle, Eye, EyeOff, ShieldCheck } from "lucide-react";

interface AdminLoginProps {
  onSuccess: () => void;
}

export function AdminLogin({ onSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState("admin@techutsav.in");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (
      (email.trim() === "admin@techutsav.in" || email.trim() === "admin") &&
      (password === "admin123" || password === "techutsav2026")
    ) {
      localStorage.setItem("techutsav_admin_auth", "true");
      onSuccess();
    } else {
      setLoginError("Invalid credentials. Try: admin@techutsav.in / admin123");
    }
  };

  return (
    <div className="min-h-screen bg-[#07130F] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E65A24]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#005A3C]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E65A24] text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            TechUtsav Operations
          </div>
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
            Community Admin Portal
          </h1>
          <p className="mt-2 text-sm text-[#EAE2D7]/65">
            Secure console for events, gallery snapshots, and movement channels.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#0B1E17]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-7 shadow-2xl shadow-black/60">
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/80 mb-1.5">
                Admin Identity / Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E65A24] transition-colors font-sans"
                  placeholder="admin@techutsav.in"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/80 mb-1.5">
                Security Passkey
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/15 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E65A24] transition-colors font-sans"
                  placeholder="Enter passkey (e.g. admin123)"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[11px] text-[#EAE2D7]/70 font-mono">
              <span className="text-[#E65A24] font-semibold">Demo Access:</span> Use{" "}
              <span className="text-white">admin@techutsav.in</span> with key{" "}
              <span className="text-white">admin123</span>
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#E65A24] hover:bg-[#d54e1b] text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-[#E65A24]/20 active:scale-[0.99] cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              Authenticate & Enter Console
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <Link
              to="/"
              className="text-xs text-[#EAE2D7]/60 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              ← Return to Public TechUtsav Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
