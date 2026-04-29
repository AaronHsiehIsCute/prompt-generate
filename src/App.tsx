import { useMemo, useState } from 'react';
import OptionTree from './components/OptionTree';
import PromptPreview from './components/PromptPreview';
import { PROMPT_CATEGORIES } from './data/promptOptions';
import { buildPromptFromSelections } from './utils/buildPrompt';

const byCategory = new Map(PROMPT_CATEGORIES.map((c) => [c.id, c.options.map((o) => o.id)] as const));

export default function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [subject, setSubject] = useState('a portrait of a traveler');
  const [rawPrompt, setRawPrompt] = useState('');
  const [extraNotes, setExtraNotes] = useState('');

  const result = useMemo(() => buildPromptFromSelections(subject, selectedIds, extraNotes), [subject, selectedIds, extraNotes]);

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
    <main className="min-h-screen p-6 bg-slate-50">
      <h1 className="text-2xl font-bold mb-1">選項式照片 Prompt 產生器</h1>
      <p className="mb-4 text-sm text-slate-600">已移除 imageSpec JSON，直接輸出 AI 易讀、去重後的單行 prompt。</p>

      <div className="mb-4 rounded-lg border bg-white p-4">
        <h2 className="mb-2 font-semibold text-slate-700">主題描述（必填）</h2>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full rounded border p-2 text-sm" placeholder="例如：a red fox walking in snow" />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
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
