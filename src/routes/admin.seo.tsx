import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from "react";
import { PageHeader, Card, Field, inputCls } from "@/components/admin/ui";

const KEY = "amgc_seo";
type SEO = {
  metaTitle: string; metaDescription: string; keywords: string;
  ogImage: string; favicon: string; canonical: string; robots: string;
};
const defaults: SEO = {
  metaTitle: "AMGC — Africa's Diversified Group",
  metaDescription: "Building Africa's future through Trade, Industry & Innovation.",
  keywords: "AMGC, Africa, trade, logistics, manufacturing",
  ogImage: "", favicon: "", canonical: "https://amgc.com",
  robots: "User-agent: *\nAllow: /",
};

export const Route = createFileRoute("/admin/seo")({ component: SeoPage });

function SeoPage() {
  const { register, handleSubmit, reset } = useForm<SEO>({ defaultValues: defaults });
  useEffect(() => {
    try { const raw = localStorage.getItem(KEY); if (raw) reset(JSON.parse(raw)); } catch {}
  }, [reset]);
  const onSubmit = handleSubmit((v) => {
    localStorage.setItem(KEY, JSON.stringify(v));
    toast.success("SEO settings saved");
  });
  return (
    <>
      <PageHeader title="SEO Settings" subtitle="Meta tags, Open Graph and search engine directives." />
      <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Meta Tags</h3>
          <Field label="Meta Title"><input {...register("metaTitle")} className={inputCls} /></Field>
          <Field label="Meta Description"><textarea rows={3} {...register("metaDescription")} className={inputCls + " h-auto py-2"} /></Field>
          <Field label="Keywords (comma separated)"><input {...register("keywords")} className={inputCls} /></Field>
          <Field label="Canonical URL"><input {...register("canonical")} className={inputCls} /></Field>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Assets & Directives</h3>
          <Field label="Open Graph Image URL"><input {...register("ogImage")} className={inputCls} /></Field>
          <Field label="Favicon URL"><input {...register("favicon")} className={inputCls} /></Field>
          <Field label="robots.txt"><textarea rows={6} {...register("robots")} className={inputCls + " h-auto py-2 font-mono text-xs"} /></Field>
        </Card>
        <div className="lg:col-span-2 flex justify-end">
          <button className="h-10 px-5 rounded-md bg-navy-deep text-white text-sm font-medium hover:bg-navy">Save changes</button>
        </div>
      </form>
    </>
  );
}
