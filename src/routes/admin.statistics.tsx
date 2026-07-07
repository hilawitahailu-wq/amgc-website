import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/statistics")({
  component: () => (
    <CrudPage
      title="Statistics"
      subtitle="Animated counters displayed on the website."
      storeKey="amgc_stats"
      seed={seeds.statistics}
      searchKeys={["label"] as any}
      columns={[
        { key: "order", label: "#" },
        { key: "icon", label: "Icon" },
        { key: "label", label: "Label" },
        { key: "value", label: "Value" },
      ]}
      fields={[
        { name: "label", label: "Label", required: true },
        { name: "value", label: "Value", type: "number", required: true },
        { name: "icon", label: "Icon (emoji or class)" },
        { name: "order", label: "Display Order", type: "number" },
      ]}
    />
  ),
});
