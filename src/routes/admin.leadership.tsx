import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/leadership")({
  component: () => (
    <CrudPage
      title="Leadership"
      subtitle="Manage executives, chairman and board members."
      storeKey="amgc_leadership"
      seed={seeds.leadership}
      searchKeys={["name", "title"] as any}
      columns={[
        { key: "order", label: "#" },
        { key: "name", label: "Name" },
        { key: "title", label: "Title" },
      ]}
      fields={[
        { name: "name", label: "Full Name", required: true },
        { name: "title", label: "Title / Role", required: true },
        { name: "photo", label: "Profile Photo", type: "file", accept: "image/*" },
        { name: "order", label: "Display Order", type: "number" },
        { name: "bio", label: "Biography", type: "textarea" },
      ]}
    />
  ),
});
