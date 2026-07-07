import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/careers")({
  component: () => (
    <CrudPage
      title="Careers"
      subtitle="Manage open positions across AMGC."
      storeKey="amgc_careers"
      seed={seeds.careers}
      searchKeys={["title", "location"] as any}
      columns={[
        { key: "title", label: "Job Title" },
        { key: "location", label: "Location" },
        { key: "type", label: "Type" },
        {
          key: "status", label: "Status",
          render: (r: any) => (
            <span className={`px-2 py-1 rounded text-xs font-medium ${r.status === "open" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
              {r.status}
            </span>
          ),
        },
      ]}
      fields={[
        { name: "title", label: "Job Title", required: true },
        { name: "location", label: "Location" },
        { name: "type", label: "Employment Type", type: "select", options: ["Full-time", "Part-time", "Contract", "Internship"] },
        { name: "status", label: "Status", type: "select", options: ["open", "closed"] },
        { name: "description", label: "Description", type: "richtext" },
        { name: "applicationUrl", label: "Application Link", type: "url" },
      ]}
    />
  ),
});
