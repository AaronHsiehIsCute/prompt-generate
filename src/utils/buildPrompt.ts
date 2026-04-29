import { PROMPT_CATEGORIES } from '../data/promptOptions';
import type { PromptBuildResult } from '../types/prompt';

const tokenMap = new Map<string, string[]>();
PROMPT_CATEGORIES.forEach((c) => c.groups.forEach((g) => g.subOptions.forEach((s) => {
  if (s.tokens) tokenMap.set(s.id, s.tokens);
  s.leaves?.forEach((l) => tokenMap.set(l.id, l.tokens));
})));

export const buildPromptFromSelections = (subject: string, selectedIds: string[], extraNotes: string): PromptBuildResult => {
  const fragments: string[] = [subject.trim() || 'photo subject'];
  selectedIds.forEach((id) => tokenMap.get(id)?.forEach((t) => fragments.push(t)));
  if (extraNotes.trim()) fragments.push(extraNotes.trim());

  const seen = new Set<string>();
  const deduped = fragments.filter((p) => {
    const n = p.toLowerCase().replace(/\s+/g, ' ').trim();
    if (!n || seen.has(n)) return false;
    seen.add(n);
    return true;
  }).map((p) => p.replace(/\s+/g, ' ').trim());

  return { normalizedPrompt: deduped.join(', '), appliedOptionIds: [...selectedIds], fragments: deduped };
};
