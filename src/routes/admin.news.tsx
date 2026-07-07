import { createFileRoute } from "@tanstack/react-router";
import { CrudPage } from "@/components/admin/CrudPage";
import { seeds } from "@/lib/admin/store";

export const Route = createFileRoute("/admin/news")({
  component: () => (
    <CrudPage
      title="News"
      subtitle="Manage news articles, drafts and publishing."
      storeKey="amgc_news"
      seed={seeds.news}
      searchKeys={["title", "author"] as any}
      columns={[
        { key: "title", label: "Title" },
        { key: "author", label: "Author" },
        { key: "date", label: "Date" },
        {
          key: "status", label: "Status",
          render: (r: any) => (
            <span className={`px-2 py-1 rounded text-xs font-medium ${r.status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
              {r.status}
            </span>
          ),
        },
      ]}
      fields={[
        { name: "title", label: "Title", required: true },
        { name: "author", label: "Author" },
        { name: "date", label: "Publish Date", type: "text" },
        { name: "excerpt", label: "Excerpt", type: "textarea" },
        { name: "body", label: "Body", type: "richtext" },
        { name: "heroImage", label: "Hero Image", type: "file", accept: "image/*" },
        { name: "status", label: "Status", type: "select", options: ["draft", "published"] },
      ]}
    />
  ),
});
