import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/divisions")({
  component: () => (
    <CrudPage
      title="Business Divisions"
      subtitle="Manage AMGC's business divisions and their assets."
      storeKey="amgc_divisions"
      seed={seeds.divisions}
      searchKeys={["name"] as any}
      columns={[
        { key: "icon", label: "Icon" },
        { key: "name", label: "Division" },
      ]}
      fields={[
        { name: "name", label: "Division Name", required: true },
        { name: "icon", label: "Icon (emoji or short tag)" },
        { name: "iconImage", label: "Icon Upload", type: "file", accept: "image/*" },
        { name: "bannerImage", label: "Banner Upload", type: "file", accept: "image/*" },
        { name: "description", label: "Description", type: "textarea" },
      ]}
    />
  ),
});
