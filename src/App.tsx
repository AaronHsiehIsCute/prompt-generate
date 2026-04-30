import { useMemo, useState } from 'react';
import OptionTree from './components/OptionTree';
import PromptPreview from './components/PromptPreview';
import { PROMPT_CATEGORIES } from './data/promptOptions';
import { buildPromptFromSelections } from './utils/buildPrompt';

const byCategory = new Map(PROMPT_CATEGORIES.map((c) => [c.id, c.groups.flatMap((g) => g.subOptions.flatMap((s) => [s.id, ...(s.leaves?.map((l) => l.id) ?? [])]))] as const));

export default function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [subject, setSubject] = useState('a portrait of a traveler');
  const [rawPrompt, setRawPrompt] = useState('');
  const [extraNotes, setExtraNotes] = useState('');
  const [focalLength, setFocalLength] = useState(50);

  const result = useMemo(() => buildPromptFromSelections(subject, selectedIds, extraNotes, focalLength), [subject, selectedIds, extraNotes, focalLength]);

  const onToggle = (id: string, categoryId: string, multi: boolean) => {
    setSelectedIds((prev) => {
      const has = prev.includes(id);
      if (has) return prev.filter((x) => x !== id);
      if (multi) return [...prev, id];
      const sameCategoryIds = new Set(byCategory.get(categoryId) ?? []);
      return [...prev.filter((x) => !sameCategoryIds.has(x)), id];
    });
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-slate-100 to-white">
      <h1 className="text-2xl font-bold mb-1">選項式照片 Prompt 產生器</h1>
      <p className="mb-4 text-sm text-slate-600">快速組出可直接貼到 AI 的攝影 prompt。</p>

      <div className="mb-4 rounded-lg border bg-white p-4">
        <h2 className="mb-2 font-semibold text-slate-700">主題描述（必填）</h2>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full rounded border p-2 text-sm" placeholder="例如：a red fox walking in snow" />
      </div>


      <div className="mb-4 rounded-lg border bg-white p-4">
        <h2 className="mb-2 font-semibold text-slate-700">焦距拉條（影像透視感）</h2>
        <input type="range" min={16} max={200} step={1} value={focalLength} onChange={(e) => setFocalLength(Number(e.target.value))} className="w-full" />
        <p className="mt-1 text-sm text-slate-600">目前：{focalLength}mm（越小越廣角、越大壓縮感越強）</p>
      </div>


      

      <div className="grid gap-4 xl:grid-cols-2 items-start">
        <section>
          <OptionTree categories={PROMPT_CATEGORIES} selectedIds={selectedIds} resolvedIds={result.appliedOptionIds} onToggle={onToggle} />
          <div className="mt-4 rounded-lg border bg-white p-4">
            <h2 className="mb-2 font-semibold text-slate-700">自由補充需求</h2>
            <textarea value={extraNotes} onChange={(e) => setExtraNotes(e.target.value)} rows={4} className="w-full rounded border p-2 text-sm" />
          </div>
        </section>
        <PromptPreview rawPrompt={rawPrompt} finalPrompt={result.normalizedPrompt} onRawPromptChange={setRawPrompt} />
      </div>
    </main>
  );
}
