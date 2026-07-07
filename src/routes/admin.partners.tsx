import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/partners")({
  component: () => (
    <CrudPage
      title="Partner Profiles"
      subtitle="Manage strategic partners and their public links."
      storeKey="amgc_partners"
      seed={seeds.partners}
      searchKeys={["name"] as any}
      columns={[
        { key: "name", label: "Company" },
        {
          key: "website", label: "Website",
          render: (r: any) => r.website ? <a href={r.website} target="_blank" className="text-navy hover:text-gold underline">Visit</a> : "—",
        },
      ]}
      fields={[
        { name: "name", label: "Company Name", required: true },
        { name: "website", label: "Website URL", type: "url" },
        { name: "logo", label: "Logo URL", type: "url" },
        { name: "description", label: "Description", type: "textarea" },
      ]}
    />
  ),
});
