import { useEffect, useRef } from "react";

export function RichTextEditor({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value || "";
    }
  }, [value]);

  const handleInput = () => {
    if (ref.current) onChange(ref.current.innerHTML);
  };

  const exec = (command: string, valueArg?: string) => {
    document.execCommand(command, false, valueArg ?? null);
    handleInput();
    ref.current?.focus();
  };

  return (
    <div className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="flex flex-wrap gap-2 p-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950">
        <button type="button" onClick={() => exec("bold")} className="rounded px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200">
          Bold
        </button>
        <button type="button" onClick={() => exec("italic")} className="rounded px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200">
          Italic
        </button>
        <button type="button" onClick={() => exec("underline")} className="rounded px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200">
          Underline
        </button>
        <button type="button" onClick={() => exec("insertUnorderedList")} className="rounded px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200">
          Bullet List
        </button>
        <button type="button" onClick={() => exec("insertOrderedList")} className="rounded px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200">
          Numbered List
        </button>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        className="min-h-[160px] p-4 text-sm leading-6 text-slate-900 dark:text-slate-100"
        onInput={handleInput}
      />
    </div>
  );
}
