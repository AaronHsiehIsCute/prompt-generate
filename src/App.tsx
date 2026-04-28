import { useMemo, useState } from 'react';
import OptionTree from './components/OptionTree';
import JsonPreview from './components/JsonPreview';
import PromptPreview from './components/PromptPreview';
import { PROMPT_CATEGORIES } from './data/promptOptions';
import { buildImageSpec, getResolvedSelections } from './utils/buildImageSpec';
import { buildPrompt } from './utils/buildPrompt';

export default function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [rawPrompt, setRawPrompt] = useState('');
  const [extraNotes, setExtraNotes] = useState('');

  const resolvedIds = useMemo(() => getResolvedSelections(selectedIds), [selectedIds]);
  const imageSpec = useMemo(() => buildImageSpec(selectedIds, extraNotes), [selectedIds, extraNotes]);
  const finalPrompt = useMemo(() => buildPrompt(imageSpec), [imageSpec]);

  const onToggle = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">勾選式圖片 Prompt 產生器 MVP</h1>
      <div className="grid gap-4 xl:grid-cols-3">
        <section>
          <OptionTree categories={PROMPT_CATEGORIES} selectedIds={selectedIds} resolvedIds={resolvedIds} onToggle={onToggle} />
          <div className="mt-4 rounded-lg border bg-white p-4">
            <h2 className="mb-2 font-semibold text-slate-700">自由補充需求</h2>
            <textarea value={extraNotes} onChange={(e) => setExtraNotes(e.target.value)} rows={4} className="w-full rounded border p-2 text-sm" />
          </div>
        </section>
        <JsonPreview spec={imageSpec} />
        <PromptPreview rawPrompt={rawPrompt} finalPrompt={finalPrompt} onRawPromptChange={setRawPrompt} />
      </div>
    </main>
  );
}
