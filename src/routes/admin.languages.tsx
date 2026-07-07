import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/languages")({
  component: () => (
    <CrudPage
      title="Language Management"
      subtitle="Enable languages available across the AMGC website."
      storeKey="amgc_languages"
      seed={seeds.languages}
      searchKeys={["name", "code"] as any}
      columns={[
        { key: "code", label: "Code" },
        { key: "name", label: "Language" },
        {
          key: "active", label: "Active",
          render: (r: any) => (
            <span className={`px-2 py-1 rounded text-xs ${r.active ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
              {r.active ? "Active" : "Disabled"}
            </span>
          ),
        },
        {
          key: "default", label: "Default",
          render: (r: any) => r.default ? <span className="text-gold font-medium">★ Default</span> : "—",
        },
      ]}
      fields={[
        { name: "code", label: "Code (e.g. en, ar)", required: true },
        { name: "name", label: "Display Name", required: true },
        { name: "active", label: "Active", type: "select", options: ["true", "false"] },
        { name: "default", label: "Default Language", type: "select", options: ["true", "false"] },
      ]}
    />
  ),
});
