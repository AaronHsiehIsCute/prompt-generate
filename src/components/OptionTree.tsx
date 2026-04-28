import type { PromptCategory } from '../types/prompt';

interface Props {
  categories: PromptCategory[];
  selectedIds: string[];
  resolvedIds: string[];
  onToggle: (id: string) => void;
}

export default function OptionTree({ categories, selectedIds, resolvedIds, onToggle }: Props) {
  const selected = new Set(selectedIds);
  const resolved = new Set(resolvedIds);

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <section key={category.id} className="rounded-lg border bg-white p-4">
          <h2 className="mb-2 font-semibold text-slate-700">{category.label}</h2>
          <div className="space-y-2 text-sm">
            {category.options.map((option) => {
              const manual = selected.has(option.id);
              const auto = !manual && resolved.has(option.id);
              return (
                <label key={option.id} className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={manual || auto} onChange={() => onToggle(option.id)} className="mt-1" />
                  <span>
                    {option.label}
                    {auto ? <em className="ml-2 text-xs text-blue-600">(自動補上)</em> : null}
                  </span>
                </label>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
