import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from "react";
import { PageHeader, Card, Field, inputCls } from "@/components/admin/ui";

const KEY = "amgc_settings";
type Settings = {
  companyName: string; companyLogo: string;
  email: string; phone: string; address: string;
  facebook: string; twitter: string; linkedin: string; instagram: string; youtube: string;
  footerText: string;
};
const defaults: Settings = {
  companyName: "AMGC — Abdoulwahab Mahamoud Group Companies",
  companyLogo: "",
  email: "abdoulwahabimportexport@gmail.com",
  phone: "+253 21 000 000",
  address: "Djibouti City, Republic of Djibouti",
  facebook: "", twitter: "", linkedin: "", instagram: "", youtube: "",
  footerText: "© AMGC. Building Africa's Future.",
};

export const Route = createFileRoute("/admin/settings")({ component: SettingsPage });

function SettingsPage() {
  const { register, handleSubmit, reset } = useForm<Settings>({ defaultValues: defaults });
  useEffect(() => { try { const raw = localStorage.getItem(KEY); if (raw) reset(JSON.parse(raw)); } catch {} }, [reset]);
  const onSubmit = handleSubmit((v) => {
    localStorage.setItem(KEY, JSON.stringify(v));
    toast.success("Settings saved");
  });
  return (
    <>
      <PageHeader title="Settings" subtitle="Global company information used across the website." />
      <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Company</h3>
          <Field label="Company Name"><input {...register("companyName")} className={inputCls} /></Field>
          <Field label="Company Logo URL"><input {...register("companyLogo")} className={inputCls} /></Field>
          <Field label="Footer Text"><input {...register("footerText")} className={inputCls} /></Field>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Contact Information</h3>
          <Field label="Email"><input type="email" {...register("email")} className={inputCls} /></Field>
          <Field label="Phone"><input {...register("phone")} className={inputCls} /></Field>
          <Field label="Address"><input {...register("address")} className={inputCls} /></Field>
        </Card>
        <Card className="p-6 lg:col-span-2">
          <h3 className="font-semibold mb-4">Social Media Links</h3>
          <div className="grid sm:grid-cols-2 gap-x-6">
            <Field label="Facebook"><input {...register("facebook")} className={inputCls} /></Field>
            <Field label="Twitter / X"><input {...register("twitter")} className={inputCls} /></Field>
            <Field label="LinkedIn"><input {...register("linkedin")} className={inputCls} /></Field>
            <Field label="Instagram"><input {...register("instagram")} className={inputCls} /></Field>
            <Field label="YouTube"><input {...register("youtube")} className={inputCls} /></Field>
          </div>
        </Card>
        <div className="lg:col-span-2 flex justify-end">
          <button className="h-10 px-5 rounded-md bg-navy-deep text-white text-sm font-medium hover:bg-navy">Save settings</button>
        </div>
      </form>
    </>
  );
}
