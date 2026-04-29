import { useState } from 'react';
import type { PromptCategory } from '../types/prompt';

interface Props {
  categories: PromptCategory[];
  selectedIds: string[];
  resolvedIds: string[];
  onToggle: (id: string, categoryId: string, multi: boolean) => void;
}

export default function OptionTree({ categories, selectedIds, resolvedIds, onToggle }: Props) {
  const selected = new Set(selectedIds);
  const resolved = new Set(resolvedIds);
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <section key={category.id} className="rounded-lg border bg-white p-4">
          <h2 className="font-semibold text-slate-700 mb-3">{category.label}</h2>
          <div className="space-y-2 text-sm">
            {category.groups.map((group) => {
              const isOpen = openGroups.includes(group.id);
              const selectedInGroup = group.subOptions.filter((s) => selected.has(s.id)).length;
              return (
                <div key={group.id} className="rounded border border-slate-200">
                  <button type="button" className="w-full text-left px-3 py-2 bg-slate-50 hover:bg-slate-100 flex justify-between items-center" onClick={() => toggleGroup(group.id)}>
                    <span className="font-medium">{group.label} {selectedInGroup > 0 ? <em className="text-xs text-blue-600">({selectedInGroup} 已選)</em> : null}</span>
                    <span>{isOpen ? '▾' : '▸'}</span>
                  </button>
                  {isOpen ? (
                    <div className="p-3 space-y-2">
                      {group.description ? <p className="text-xs text-slate-500">{group.description}</p> : null}
                      {group.subOptions.map((option) => {
                        const manual = selected.has(option.id);
                        const auto = !manual && resolved.has(option.id);
                        return (
                          <label key={option.id} className="flex items-start gap-2 cursor-pointer">
                            <input type="checkbox" checked={manual || auto} onChange={() => onToggle(option.id, category.id, category.multi)} className="mt-1" />
                            <span>{option.label}{auto ? <em className="ml-2 text-xs text-blue-600">(自動)</em> : null}</span>
                          </label>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
