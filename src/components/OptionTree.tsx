import { useMemo, useState } from 'react';
import type { PromptCategory } from '../types/prompt';

interface Props {
  categories: PromptCategory[];
  selectedIds: string[];
  resolvedIds: string[];
  onToggle: (id: string, categoryId: string, multi: boolean) => void;
}

export default function OptionTree({ categories, selectedIds, resolvedIds, onToggle }: Props) {
  const selected = useMemo(() => new Set(selectedIds), [selectedIds]);
  const resolved = useMemo(() => new Set(resolvedIds), [resolvedIds]);
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const [openSubOptions, setOpenSubOptions] = useState<string[]>([]);

  const t1 = (id: string) => setOpenGroups((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  const t2 = (id: string) => setOpenSubOptions((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return <div className="space-y-3">{categories.map((cat) => <section key={cat.id} className="rounded-lg border bg-white p-3">
    <h2 className="font-semibold mb-2">{cat.label}</h2>
    <div className="grid gap-2 md:grid-cols-2">
      {cat.groups.map((g) => <div key={g.id} className="border rounded">
        <button type="button" className="w-full px-2 py-1 text-left bg-slate-50 flex justify-between" onClick={() => t1(g.id)}><span>{g.label}</span><span>{openGroups.includes(g.id)?'▾':'▸'}</span></button>
        {openGroups.includes(g.id) && <div className="p-2 space-y-1">{g.subOptions.map((s) => {
          const hasLeaves = !!s.leaves?.length;
          return <div key={s.id} className="rounded border border-slate-100 p-1">
            <div className="flex items-center justify-between">
              <label className="text-sm flex items-center gap-2"><input type="checkbox" checked={selected.has(s.id)||resolved.has(s.id)} onChange={() => onToggle(s.id, cat.id, cat.multi)} />{s.label}</label>
              {hasLeaves && <button type="button" className="text-xs text-blue-600" onClick={() => t2(s.id)}>{openSubOptions.includes(s.id)?'收合':'展開子項'}</button>}
            </div>
            {hasLeaves && openSubOptions.includes(s.id) && <div className="mt-1 grid grid-cols-2 gap-1">{s.leaves?.map((l) => <label key={l.id} className="text-xs flex items-center gap-1"><input type="checkbox" checked={selected.has(l.id)||resolved.has(l.id)} onChange={() => onToggle(l.id, cat.id, true)} />{l.label}</label>)}</div>}
          </div>;
        })}</div>}
      </div>)}
    </div>
  </section>)}</div>;
}
