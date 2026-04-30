import { PROMPT_CATEGORIES } from '../data/promptOptions';
import type { ModelProfile, PromptBuildResult } from '../types/prompt';

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

const modelSuffix = (model: ModelProfile): string[] => {
  if (model === 'midjourney') return ['--stylize 150', '--chaos 8'];
  if (model === 'sdxl') return ['highly detailed', 'photorealistic', '8k'];
  return ['high quality photography'];
};

const evaluate = (ids: string[], prompt: string) => {
  const warnings: string[] = [];
  if (ids.some((x) => x.includes('emo.pos')) && ids.some((x) => x.includes('emo.neg'))) warnings.push('同時選到積極與消極情緒，可能互相拉扯。');
  if (ids.some((x) => x.includes('motion.freeze')) && ids.some((x) => x.includes('motion.blur'))) warnings.push('同時選到凝結與拖影，建議擇一。');
  let score = 70;
  score += Math.min(20, ids.length);
  score -= warnings.length * 10;
  if (prompt.length > 450) score -= 5;
  return { warnings, score: Math.max(0, Math.min(100, score)) };
};

export const buildPromptFromSelections = (
  subject: string,
  selectedIds: string[],
  extraNotes: string,
  focalLength: number,
  model: ModelProfile,
): PromptBuildResult => {
  const fragments: string[] = [subject.trim() || 'photo subject', ...focalTokens(focalLength)];
  selectedIds.forEach((id) => tokenMap.get(id)?.forEach((t) => fragments.push(t)));
  fragments.push(...modelSuffix(model));
  if (extraNotes.trim()) fragments.push(extraNotes.trim());

  const seen = new Set<string>();
  const deduped = fragments.filter((p) => {
    const n = p.toLowerCase().replace(/\s+/g, ' ').trim();
    if (!n || seen.has(n)) return false;
    seen.add(n);
    return true;
  }).map((p) => p.replace(/\s+/g, ' ').trim());

  const normalizedPrompt = deduped.join(', ');
  const evalResult = evaluate(selectedIds, normalizedPrompt);
  return { normalizedPrompt, appliedOptionIds: [...selectedIds], fragments: deduped, ...evalResult };
};
