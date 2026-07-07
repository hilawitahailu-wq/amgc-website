import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/projects")({
  component: () => (
    <CrudPage
      title="Projects"
      subtitle="Manage all AMGC projects across divisions."
      storeKey="amgc_projects"
      seed={seeds.projects}
      searchKeys={["title", "division", "location"] as any}
      columns={[
        { key: "title", label: "Project" },
        { key: "division", label: "Division" },
        { key: "location", label: "Location" },
        {
          key: "status", label: "Status",
          render: (r: any) => (
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              r.status === "active" ? "bg-emerald-100 text-emerald-700" :
              r.status === "planning" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-700"
            }`}>{r.status}</span>
          ),
        },
      ]}
      fields={[
        { name: "title", label: "Title", required: true },
        { name: "division", label: "Division", type: "select", options: ["Logistics", "Manufacturing", "Agriculture", "Mining", "Construction", "Trading"] },
        { name: "location", label: "Location" },
        { name: "status", label: "Status", type: "select", options: ["planning", "active", "completed"] },
        { name: "summary", label: "Summary", type: "textarea" },
        { name: "details", label: "Details", type: "richtext" },
        { name: "coverImage", label: "Cover Image", type: "file", accept: "image/*" },
      ]}
    />
  ),
});
