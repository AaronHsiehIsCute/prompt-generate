export interface DiffLine {
  type: 'added' | 'removed' | 'unchanged';
  text: string;
}

export const buildDiff = (before: string, after: string): DiffLine[] => {
  const b = before.split('\n').filter((line) => line.trim());
  const a = after.split('\n').filter((line) => line.trim());
  const bSet = new Set(b);
  const aSet = new Set(a);
  return [
    ...b.filter((line) => !aSet.has(line)).map((text) => ({ type: 'removed' as const, text })),
    ...a.filter((line) => bSet.has(line)).map((text) => ({ type: 'unchanged' as const, text })),
    ...a.filter((line) => !bSet.has(line)).map((text) => ({ type: 'added' as const, text })),
  ];
};
