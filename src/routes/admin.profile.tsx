import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAdminAuth } from "@/lib/admin/auth";
import { PageHeader, Card, Field, inputCls } from "@/components/admin/ui";
import { Camera } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/profile")({ component: Profile });

function Profile() {
  const { user, updateProfile } = useAdminAuth();
  const { register: reg, handleSubmit } = useForm({ defaultValues: { name: user?.name, email: user?.email } });
  const pw = useForm<{ current: string; next: string; confirm: string }>();
  const [preview, setPreview] = useState<string | undefined>(user?.avatar);

  const saveProfile = handleSubmit((v) => {
    updateProfile({ name: v.name, email: v.email, avatar: preview });
    toast.success("Profile updated");
  });
  const changePw = pw.handleSubmit((v) => {
    if (v.next !== v.confirm) return toast.error("Passwords do not match");
    toast.success("Password changed");
    pw.reset();
  });

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setPreview(r.result as string);
    r.readAsDataURL(f);
  };

  return (
    <>
      <PageHeader title="Profile" subtitle="Your personal admin account." />
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="p-6 lg:col-span-2">
          <h3 className="font-semibold mb-4">Personal Information</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-gold to-amber-600 grid place-items-center text-navy-deep text-2xl font-semibold overflow-hidden">
                {preview ? <img src={preview} className="h-full w-full object-cover" /> : user?.name?.[0]}
              </div>
              <label className="absolute bottom-0 right-0 h-7 w-7 rounded-full bg-navy-deep text-white grid place-items-center cursor-pointer">
                <Camera className="h-3.5 w-3.5" />
                <input type="file" accept="image/*" className="hidden" onChange={onFile} />
              </label>
            </div>
            <div>
              <p className="font-medium">{user?.name}</p>
              <p className="text-sm text-slate-500">{user?.role}</p>
            </div>
          </div>
          <form onSubmit={saveProfile}>
            <Field label="Full Name"><input {...reg("name")} className={inputCls} /></Field>
            <Field label="Email"><input {...reg("email")} className={inputCls} /></Field>
            <button className="h-10 px-5 rounded-md bg-navy-deep text-white text-sm font-medium hover:bg-navy">Save profile</button>
          </form>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Change Password</h3>
          <form onSubmit={changePw}>
            <Field label="Current Password"><input type="password" {...pw.register("current", { required: true })} className={inputCls} /></Field>
            <Field label="New Password"><input type="password" {...pw.register("next", { required: true, minLength: 6 })} className={inputCls} /></Field>
            <Field label="Confirm New Password"><input type="password" {...pw.register("confirm", { required: true })} className={inputCls} /></Field>
            <button className="h-10 px-5 rounded-md bg-navy-deep text-white text-sm font-medium hover:bg-navy">Update password</button>
          </form>
        </Card>
      </div>
    </>
  );
}
