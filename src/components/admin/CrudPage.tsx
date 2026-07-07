import { useMemo, useState, type ReactNode } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { AddButton, DataTable, Field, Modal, PageHeader, inputCls } from "@/components/admin/ui";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { useCollection } from "@/lib/admin/store";

export type FieldSpec = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "select" | "number" | "url" | "email" | "richtext" | "file" | "checkbox";
  options?: string[];
  required?: boolean;
  accept?: string;
};

export function CrudPage<T extends { id: string }>({
  title, subtitle, storeKey, seed, columns, fields, searchKeys,
}: {
  title: string;
  subtitle?: string;
  storeKey: string;
  seed: T[];
  columns: { key: keyof T | string; label: string; render?: (r: T) => ReactNode }[];
  fields: FieldSpec[];
  searchKeys: (keyof T)[];
}) {
  const col = useCollection<T>(storeKey, seed);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<T | null>(null);

  const openNew = () => { setEditing(null); setOpen(true); };
  const openEdit = (row: T) => { setEditing(row); setOpen(true); };
  const doDelete = (row: T) => {
    if (confirm(`Delete "${(row as any)[searchKeys[0]] ?? row.id}"?`)) {
      col.remove(row.id);
      toast.success("Deleted");
    }
  };

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} action={<AddButton onClick={openNew} />} />
      <DataTable
        rows={col.items}
        columns={columns as any}
        onEdit={openEdit}
        onDelete={doDelete}
        searchKeys={searchKeys}
      />
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? `Edit ${title}` : `Add ${title}`}>
        <CrudForm
          key={editing?.id ?? "new"}
          fields={fields}
          initial={editing ?? undefined}
          onSubmit={(values) => {
            if (editing) {
              col.update(editing.id, values as Partial<T>);
              toast.success("Updated");
            } else {
              col.add(values as Omit<T, "id">);
              toast.success("Created");
            }
            setOpen(false);
          }}
        />
      </Modal>
    </>
  );
}

function CrudForm({ fields, initial, onSubmit }: { fields: FieldSpec[]; initial?: any; onSubmit: (v: any) => void }) {
  const { register, watch, setValue, handleSubmit, formState: { errors } } = useForm({ defaultValues: initial ?? {} });
  const [previews, setPreviews] = useState<Record<string, string>>(() => {
    const initialPreview: Record<string, string> = {};
    fields.forEach((field) => {
      if (initial?.[field.name] && typeof initial[field.name] === "string") {
        initialPreview[field.name] = initial[field.name];
      }
    });
    return initialPreview;
  });

  const values = watch();
  const hasFileFields = useMemo(() => fields.some((field) => field.type === "file"), [fields]);

  const handleFileChange = (field: string, file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setValue(field, result, { shouldDirty: true });
      setPreviews((prev) => ({ ...prev, [field]: result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((f) => (
        <Field key={f.name} label={f.label}>
          {f.type === "textarea" ? (
            <textarea
              rows={4}
              {...register(f.name, { required: f.required })}
              className={inputCls + " h-auto py-2"}
            />
          ) : f.type === "richtext" ? (
            <RichTextEditor
              value={String(values[f.name] ?? "")}
              onChange={(value) => setValue(f.name, value)}
            />
          ) : f.type === "select" ? (
            <select {...register(f.name, { required: f.required })} className={inputCls}>
              <option value="">Select...</option>
              {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : f.type === "checkbox" ? (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register(f.name)}
                className="h-4 w-4 rounded border-slate-300 text-gold focus:ring-gold/40"
              />
              <span className="text-sm text-slate-600">Enabled</span>
            </div>
          ) : f.type === "file" ? (
            <div className="space-y-2">
              {previews[f.name] && (
                <img src={previews[f.name]} alt={f.label} className="h-32 w-full rounded-md object-cover border border-slate-200" />
              )}
              <input
                type="file"
                accept={f.accept ?? "*/*"}
                onChange={(event) => handleFileChange(f.name, event.target.files?.[0])}
                className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
              />
            </div>
          ) : (
            <input
              type={f.type ?? "text"}
              {...register(f.name, { required: f.required, valueAsNumber: f.type === "number" })}
              className={inputCls}
              placeholder={f.type === "url" ? "https://example.com" : undefined}
            />
          )}
          {errors[f.name] && <p className="text-xs text-red-600 mt-1">Required</p>}
        </Field>
      ))}
      <div className="flex justify-end gap-2 mt-2">
        <button type="submit" className="h-10 px-5 rounded-md bg-navy-deep text-white text-sm font-medium hover:bg-navy">
          {initial ? "Save changes" : "Create"}
        </button>
      </div>
    </form>
  );
}
