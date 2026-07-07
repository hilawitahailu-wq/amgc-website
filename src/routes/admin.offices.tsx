import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/offices")({
  component: () => (
    <CrudPage
      title="Office Locations"
      subtitle="Manage AMGC's global office presence."
      storeKey="amgc_offices"
      seed={seeds.offices}
      searchKeys={["country", "city"] as any}
      columns={[
        { key: "country", label: "Country" },
        { key: "city", label: "City" },
        { key: "phone", label: "Phone" },
        { key: "email", label: "Email" },
      ]}
      fields={[
        { name: "country", label: "Country", required: true },
        { name: "city", label: "City", required: true },
        { name: "address", label: "Address" },
        { name: "phone", label: "Phone" },
        { name: "email", label: "Email", type: "email" },
        { name: "map", label: "Google Maps URL", type: "url" },
      ]}
    />
  ),
});
