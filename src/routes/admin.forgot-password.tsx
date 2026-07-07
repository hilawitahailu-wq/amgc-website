import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/forgot-password")({ component: Forgot });

function Forgot() {
  const { register, handleSubmit } = useForm<{ email: string }>();
  const onSubmit = handleSubmit(async ({ email }) => {
    await new Promise((r) => setTimeout(r, 500));
    toast.success(`Reset link sent to ${email}`);
  });
  return (
    <div className="min-h-screen grid place-items-center bg-slate-50 p-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white p-8 rounded-lg border border-slate-200">
        <h1 className="text-2xl font-semibold">Forgot password</h1>
        <p className="text-sm text-slate-500 mt-1">We'll email you a reset link.</p>
        <label className="block mt-6">
          <span className="text-sm font-medium">Email</span>
          <input
            {...register("email", { required: true })}
            type="email"
            className="mt-1.5 w-full h-11 px-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold/40"
          />
        </label>
        <button className="mt-6 w-full h-11 rounded-md bg-navy-deep text-white text-sm font-medium hover:bg-navy">Send reset link</button>
        <Link to="/admin/login" className="block text-center text-sm text-navy mt-4 hover:text-gold">Back to login</Link>
      </form>
    </div>
  );
}
