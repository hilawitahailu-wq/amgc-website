import { useState, type ReactNode } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

type Col<T> = { key: keyof T | string; label: string; render?: (row: T) => ReactNode; className?: string };

export function DataTable<T extends { id: string }>({
  rows, columns, onEdit, onDelete, searchKeys = [], pageSize = 10,
}: {
  rows: T[];
  columns: Col<T>[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  searchKeys?: (keyof T)[];
  pageSize?: number;
}) {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const filtered = q
    ? rows.filter((r) => searchKeys.some((k) => String(r[k] ?? "").toLowerCase().includes(q.toLowerCase())))
    : rows;
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setPage(1); }}
            placeholder="Search..."
            className="w-full pl-9 pr-3 h-9 text-sm rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gold/40"
          />
        </div>
        <span className="text-xs text-slate-500">{filtered.length} records</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-left">
            <tr>
              {columns.map((c) => (
                <th key={String(c.key)} className={`px-4 py-3 font-medium ${c.className ?? ""}`}>{c.label}</th>
              ))}
              {(onEdit || onDelete) && <th className="px-4 py-3 font-medium text-right">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 && (
              <tr><td colSpan={columns.length + 1} className="px-4 py-12 text-center text-slate-400">No records found</td></tr>
            )}
            {paged.map((r) => (
              <tr key={r.id} className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                {columns.map((c) => (
                  <td key={String(c.key)} className={`px-4 py-3 ${c.className ?? ""}`}>
                    {c.render ? c.render(r) : String((r as any)[c.key] ?? "")}
                  </td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      {onEdit && (
                        <button onClick={() => onEdit(r)} className="h-8 w-8 grid place-items-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600">
                          <Pencil className="h-4 w-4" />
                        </button>
                      )}
                      {onDelete && (
                        <button onClick={() => onDelete(r)} className="h-8 w-8 grid place-items-center rounded hover:bg-red-50 dark:hover:bg-red-950 text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pages > 1 && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm">
          <span className="text-slate-500">Page {page} of {pages}</span>
          <div className="flex gap-1">
            <button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className="px-3 h-8 rounded border border-slate-200 dark:border-slate-700 disabled:opacity-40">Prev</button>
            <button disabled={page === pages} onClick={() => setPage((p) => p + 1)} className="px-3 h-8 rounded border border-slate-200 dark:border-slate-700 disabled:opacity-40">Next</button>
          </div>
        </div>
      )}
    </Card>
  );
}

export function AddButton({ onClick, label = "Add New" }: { onClick: () => void; label?: string }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-navy-deep text-white text-sm font-medium hover:bg-navy transition">
      <Plus className="h-4 w-4" /> {label}
    </button>
  );
}

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/50" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      {children}
    </label>
  );
}

export const inputCls =
  "w-full px-3 h-10 text-sm rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gold/40";
