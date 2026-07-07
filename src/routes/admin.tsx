import { createFileRoute, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";
import { AdminAuthProvider, useAdminAuth } from "@/lib/admin/auth";
import { AdminLayout } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin")({
  component: AdminShell,
});

function AdminShell() {
  return (
    <AdminAuthProvider>
      <Toaster richColors position="top-right" />
      <Gate>
        <Outlet />
      </Gate>
    </AdminAuthProvider>
  );
}

function Gate({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const { user } = useAdminAuth();
  const isAuthPage = pathname === "/admin/login" || pathname === "/admin/forgot-password";

  useEffect(() => {
    if (!user && !isAuthPage) navigate({ to: "/admin/login" });
    if (user && isAuthPage) navigate({ to: "/admin/dashboard" });
  }, [user, isAuthPage, pathname]);

  if (isAuthPage) return <>{children}</>;
  if (!user) return null;
  return <AdminLayout>{children}</AdminLayout>;
}
