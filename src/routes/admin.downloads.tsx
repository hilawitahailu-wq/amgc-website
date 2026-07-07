import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/downloads")({
  component: () => (
    <CrudPage
      title="Downloads"
      subtitle="Upload brochures, reports and documents (PDF, DOCX, ZIP)."
      storeKey="amgc_downloads"
      seed={seeds.downloads}
      searchKeys={["name", "category"] as any}
      columns={[
        { key: "name", label: "File Name" },
        { key: "category", label: "Category" },
        { key: "type", label: "Type" },
        { key: "size", label: "Size" },
      ]}
      fields={[
        { name: "name", label: "File Name", required: true },
        { name: "category", label: "Category", type: "select", options: ["Brochures", "Reports", "Presentations", "Legal", "Other"] },
        { name: "type", label: "File Type", type: "select", options: ["PDF", "DOCX", "ZIP", "XLSX"] },
        { name: "size", label: "File Size" },
        { name: "url", label: "File URL", type: "url" },
      ]}
    />
  ),
});
