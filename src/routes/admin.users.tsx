import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/users")({
  component: () => (
    <CrudPage
      title="Users"
      subtitle="Manage admin accounts and role assignments."
      storeKey="amgc_users"
      seed={seeds.users}
      searchKeys={["name", "email"] as any}
      columns={[
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "role", label: "Role" },
        {
          key: "status", label: "Status",
          render: (r: any) => (
            <span className={`px-2 py-1 rounded text-xs ${r.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
              {r.status}
            </span>
          ),
        },
      ]}
      fields={[
        { name: "name", label: "Full Name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "role", label: "Role", type: "select", options: ["Super Admin", "Admin", "Editor", "Viewer"] },
        { name: "status", label: "Status", type: "select", options: ["active", "suspended"] },
      ]}
    />
  ),
});
