import { useMemo, useState } from 'react';
import OptionTree from './components/OptionTree';
import DiffViewer from './components/DiffViewer';
import { PROMPT_CATEGORIES } from './data/promptOptions';
import { buildPromptFromSelections } from './utils/buildPrompt';
import { buildDiff } from './utils/buildDiff';

const byCategory = new Map(PROMPT_CATEGORIES.map((c) => [c.id, c.groups.flatMap((g) => g.subOptions.flatMap((s) => [s.id, ...(s.leaves?.map((l) => l.id) ?? [])]))] as const));

const PRESETS: Array<{ name: string; picks: string[] }> = [
  { name: 'Neon City', picks: ['style.cinematic', 'city.rain', 'color.teal', 'light.split', 'focal.35'] },
  { name: 'Soft Portrait', picks: ['style.editorial', 'emo.joy.smile', 'light.clamshell', 'focal.85', 'comp.bokeh'] },
  { name: 'Travel Documentary', picks: ['style.docu', 'city.street', 'motion.crowd', 'focal.24'] },
  { name: 'Golden Love Story', picks: ['style.fineart', 'emo.joy.relaxed', 'light.golden', 'nature.lake', 'focal.85'] },
  { name: 'Street Energy', picks: ['style.street', 'motion.panning', 'city.metro', 'color.teal', 'focal.24'] },
  { name: 'Minimal Commercial', picks: ['style.commercial', 'comp.center', 'color.silver', 'light.clamshell', 'focal.58'] },
  { name: 'Moody Lonely Night', picks: ['emo.lonely.lookaway', 'city.rain', 'color.blue', 'light.split', 'focal.135'] },
  { name: 'Adventure Outdoor', picks: ['style.docu', 'nature.mountain', 'light.overcast', 'comp.leading', 'focal.35'] },
];

export default function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [subject, setSubject] = useState('a portrait of a traveler');
  const [rawPrompt, setRawPrompt] = useState('');
  const [extraNotes, setExtraNotes] = useState('');

  const result = useMemo(() => buildPromptFromSelections(subject, selectedIds, extraNotes), [subject, selectedIds, extraNotes]);
  const diffLines = useMemo(() => buildDiff(rawPrompt, result.normalizedPrompt), [rawPrompt, result.normalizedPrompt]);

  const onToggle = (id: string, categoryId: string, multi: boolean) => {
    setSelectedIds((prev) => {
      const has = prev.includes(id);
      if (has) return prev.filter((x) => x !== id);
      if (multi) return [...prev, id];
      const sameCategoryIds = new Set(byCategory.get(categoryId) ?? []);
      return [...prev.filter((x) => !sameCategoryIds.has(x)), id];
    });
  };

  const applyPreset = (picks: string[]) => setSelectedIds(picks);

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-slate-100 to-white">
      <h1 className="text-2xl font-bold mb-1">選項式照片 Prompt 產生器</h1>
      <p className="mb-4 text-sm text-slate-600">快速組出可直接貼到 AI 的攝影 prompt。</p>

      <div className="mb-4 rounded-lg border bg-white p-4">
        <h2 className="mb-2 font-semibold text-slate-700">模板市集 / 一鍵套用</h2>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => <button key={p.name} type="button" onClick={() => applyPreset(p.picks)} className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">{p.name}</button>)}

        </div>
        
      </div>

      <div className="grid gap-4 xl:grid-cols-2 items-start">
        <section className="space-y-4">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="mb-2 font-semibold text-slate-700">主題描述（必填）</h2>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full rounded border p-2 text-sm" placeholder="例如：a red fox walking in snow" />
          </div>

          <OptionTree categories={PROMPT_CATEGORIES} selectedIds={selectedIds} resolvedIds={result.appliedOptionIds} onToggle={onToggle} />
        </section>

        <section className="space-y-4">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="mb-2 font-semibold text-slate-700">系統整理後 Prompt（After）</h2>
            <pre className="rounded border bg-slate-50 p-3 text-sm whitespace-pre-wrap">{result.normalizedPrompt}</pre>
          </div>

          <DiffViewer lines={diffLines} />

          <div className="rounded-lg border bg-white p-4">
            <h2 className="mb-2 font-semibold text-slate-700">你原本的 Prompt（Before）</h2>
            <textarea value={rawPrompt} onChange={(e) => setRawPrompt(e.target.value)} rows={7} className="w-full rounded border p-2 text-sm" />
          </div>

          <div className="rounded-lg border bg-white p-4">
            <h2 className="mb-2 font-semibold text-slate-700">自由補充需求</h2>
            <textarea value={extraNotes} onChange={(e) => setExtraNotes(e.target.value)} rows={4} className="w-full rounded border p-2 text-sm" />
          </div>
        </section>
      </div>
    </main>
  );
}
