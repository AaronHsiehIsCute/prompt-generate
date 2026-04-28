import type { ImageSpec } from '../types/prompt';

export default function JsonPreview({ spec }: { spec: ImageSpec }) {
  return (
    <div className="rounded-lg border bg-slate-900 p-4 text-slate-100">
      <h2 className="mb-2 font-semibold">imageSpec JSON</h2>
      <pre className="text-xs">{JSON.stringify(spec, null, 2)}</pre>
    </div>
  );
}
