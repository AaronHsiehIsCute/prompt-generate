import { PROMPT_CATEGORIES } from '../data/promptOptions';
import type { PromptBuildResult, PromptOption } from '../types/prompt';

const optionMap = new Map<string, PromptOption>(PROMPT_CATEGORIES.flatMap((c) => c.options.map((o) => [o.id, o] as const)));

const resolveIds = (selectedIds: string[]) => {
  const resolved = new Set(selectedIds);
  const queue = [...selectedIds];
  while (queue.length > 0) {
    const id = queue.shift();
    if (!id) continue;
    const opt = optionMap.get(id);
    opt?.autoSelects?.forEach((dep) => {
      if (!resolved.has(dep)) {
        resolved.add(dep);
        queue.push(dep);
      }
    });
  }
  return [...resolved];
};

export const buildPromptFromSelections = (subject: string, selectedIds: string[], extraNotes: string): PromptBuildResult => {
  const fragments: string[] = [subject.trim() || 'photo subject'];
  const resolvedIds = resolveIds(selectedIds);

  resolvedIds.forEach((id) => {
    const opt = optionMap.get(id);
    if (!opt) return;
    fragments.push(...opt.tokens);
  });

  if (extraNotes.trim()) fragments.push(extraNotes.trim());

  const deduped: string[] = [];
  const seen = new Set<string>();
  fragments.forEach((part) => {
    const normalized = part.toLowerCase().replace(/\s+/g, ' ').trim();
    if (!normalized || seen.has(normalized)) return;
    seen.add(normalized);
    deduped.push(part.replace(/\s+/g, ' ').trim());
  });

  return {
    normalizedPrompt: deduped.join(', '),
    appliedOptionIds: resolvedIds,
    fragments: deduped,
  };
};
