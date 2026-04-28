import DiffViewer from './DiffViewer';
import { buildDiff } from '../utils/buildDiff';

interface Props {
  rawPrompt: string;
  finalPrompt: string;
  onRawPromptChange: (text: string) => void;
}

export default function PromptPreview({ rawPrompt, finalPrompt, onRawPromptChange }: Props) {
  const lines = buildDiff(rawPrompt, finalPrompt);
  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-white p-4">
        <h2 className="mb-2 font-semibold text-slate-700">原始 Prompt（Before）</h2>
        <textarea
          value={rawPrompt}
          onChange={(e) => onRawPromptChange(e.target.value)}
          rows={9}
          className="w-full rounded border p-2 text-sm"
        />
      </div>
      <div className="rounded-lg border bg-white p-4">
        <h2 className="mb-2 font-semibold text-slate-700">系統產生 Prompt（After）</h2>
        <pre className="rounded border bg-slate-50 p-3 text-sm">{finalPrompt}</pre>
      </div>
      <DiffViewer lines={lines} />
    </div>
  );
}
