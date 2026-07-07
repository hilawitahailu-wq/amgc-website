import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { useAdminAuth } from "@/lib/admin/auth";
import { Lock, Mail } from "lucide-react";

export const Route = createFileRoute("/admin/login")({ component: Login });

function Login() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string }>({
    defaultValues: { email: "admin@amgc.com", password: "admin123" },
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome back");
      navigate({ to: "/admin/dashboard" });
    } catch (e: any) {
      toast.error(e.message || "Login failed");
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep opacity-90" />
        <div className="relative">
          <div className="font-display text-3xl text-gold tracking-widest">AMGC</div>
          <p className="text-white/60 text-sm mt-1">Admin Console</p>
        </div>
        <div className="relative">
          <h2 className="font-display text-4xl leading-tight">Building Africa's Future Through Trade, Industry & Innovation.</h2>
          <p className="text-white/60 mt-4 max-w-md">Manage your content, news, projects, careers and global presence from one unified dashboard.</p>
        </div>
        <div className="relative text-xs text-white/40">© {new Date().getFullYear()} AMGC Group</div>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-slate-500 mt-1">Access the AMGC content management system.</p>

          <div className="mt-8">
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                {...register("email", { required: "Email required" })}
                className="w-full pl-9 pr-3 h-11 text-sm rounded-md border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/40"
                placeholder="you@amgc.com"
              />
            </div>
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium">Password</label>
              <Link to="/admin/forgot-password" className="text-xs text-navy hover:text-gold">Forgot?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="password"
                {...register("password", { required: "Password required", minLength: { value: 4, message: "Min 4 chars" } })}
                className="w-full pl-9 pr-3 h-11 text-sm rounded-md border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/40"
                placeholder="••••••••"
              />
            </div>
            {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
          </div>

          <button
            disabled={loading}
            className="mt-6 w-full h-11 rounded-md bg-navy-deep text-white text-sm font-medium hover:bg-navy transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <p className="text-xs text-slate-400 text-center mt-6">
            Demo: any email + password (min 4 chars)
          </p>
        </form>
      </div>
    </div>
  );
}
