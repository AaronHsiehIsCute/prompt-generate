import { PROMPT_CATEGORIES } from '../data/promptOptions';
import type { PromptBuildResult } from '../types/prompt';

const tokenMap = new Map<string, string[]>();
PROMPT_CATEGORIES.forEach((c) => c.groups.forEach((g) => g.subOptions.forEach((s) => {
  if (s.tokens) tokenMap.set(s.id, s.tokens);
  s.leaves?.forEach((l) => tokenMap.set(l.id, l.tokens));
})));

const focalTokens = (focalLength: number): string[] => {
  if (focalLength <= 24) return [`${focalLength}mm ultra-wide perspective`, 'strong environmental context'];
  if (focalLength <= 35) return [`${focalLength}mm wide storytelling perspective`];
  if (focalLength <= 55) return [`${focalLength}mm natural human-eye perspective`];
  if (focalLength <= 85) return [`${focalLength}mm portrait compression`, 'flattering facial proportions'];
  return [`${focalLength}mm telephoto compression`, 'strong background separation'];
};

export const buildPromptFromSelections = (
  subject: string,
  selectedIds: string[],
  extraNotes: string,
  focalLength: number,
): PromptBuildResult => {
  const fragments: string[] = [subject.trim() || 'photo subject', ...focalTokens(focalLength)];
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
