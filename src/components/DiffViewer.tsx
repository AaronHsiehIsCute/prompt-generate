import type { DiffLine } from '../utils/buildDiff';

const styles = {
  added: 'bg-green-50 text-green-700',
  removed: 'bg-red-50 text-red-700',
  unchanged: 'bg-white text-slate-500',
};

const marks = { added: '+', removed: '-', unchanged: ' ' };

export default function DiffViewer({ lines }: { lines: DiffLine[] }) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="mb-2 font-semibold text-slate-700">Prompt Diff</h3>
      <div className="rounded border text-xs font-mono max-h-80 overflow-auto">
        {lines.map((line, idx) => (
          <div key={`${line.type}-${idx}`} className={`px-3 py-1 ${styles[line.type]}`}>
            {marks[line.type]} {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
