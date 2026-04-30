import { useMemo } from 'react';
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

  return (
    <div className="rounded-xl border bg-white p-3 shadow-sm">
      <h2 className="mb-2 text-sm font-semibold text-slate-700">滑鼠移入分類後展開子選項</h2>
      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.id} className="group relative rounded-lg border border-slate-200 bg-slate-50 p-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{cat.label}</span>
              <span className="text-xs text-slate-500">{cat.groups.length} 組</span>
            </div>

            <div className="pointer-events-none invisible absolute left-0 top-full z-20 mt-1 w-[28rem] max-w-[95vw] rounded-xl border bg-white p-3 shadow-xl group-hover:pointer-events-auto group-hover:visible">
              <div className="grid gap-3 md:grid-cols-2">
                {cat.groups.map((g) => (
                  <div key={g.id} className="rounded-lg border border-slate-100 p-2">
                    <p className="mb-1 text-xs font-semibold text-slate-600">{g.label}</p>
                    <div className="space-y-1">
                      {g.subOptions.map((s) => (
                        <div key={s.id} className="rounded border border-slate-100 p-1">
                          <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" checked={selected.has(s.id) || resolved.has(s.id)} onChange={() => onToggle(s.id, cat.id, cat.multi)} />
                            {s.label}
                          </label>
                          {s.leaves?.length ? (
                            <div className="mt-1 grid grid-cols-2 gap-1 pl-5">
                              {s.leaves.map((l) => (
                                <label key={l.id} className="flex items-center gap-1 text-xs text-slate-700">
                                  <input type="checkbox" checked={selected.has(l.id) || resolved.has(l.id)} onChange={() => onToggle(l.id, cat.id, true)} />
                                  {l.label}
                                </label>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
