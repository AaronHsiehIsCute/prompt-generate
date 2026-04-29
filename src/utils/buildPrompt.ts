import { PROMPT_CATEGORIES } from '../data/promptOptions';
import type { PromptBuildResult, PromptSubOption } from '../types/prompt';

const optionMap = new Map<string, PromptSubOption>(
  PROMPT_CATEGORIES.flatMap((c) => c.groups.flatMap((g) => g.subOptions.map((o) => [o.id, o] as const))),
);

export const buildPromptFromSelections = (subject: string, selectedIds: string[], extraNotes: string): PromptBuildResult => {
  const fragments: string[] = [subject.trim() || 'photo subject'];

  selectedIds.forEach((id) => {
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
    appliedOptionIds: [...selectedIds],
    fragments: deduped,
  };
};
