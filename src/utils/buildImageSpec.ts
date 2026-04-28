import { PROMPT_CATEGORIES } from '../data/promptOptions';
import type { ImageSpec, PromptOption } from '../types/prompt';

const optionMap = new Map<string, PromptOption>(
  PROMPT_CATEGORIES.flatMap((cat) => cat.options.map((opt) => [opt.id, opt] as const)),
);

const resolveIds = (selected: string[]) => {
  const resolved = new Set(selected);
  const queue = [...selected];
  while (queue.length > 0) {
    const id = queue.shift();
    if (!id) continue;
    const option = optionMap.get(id);
    option?.autoSelects?.forEach((dep) => {
      if (!resolved.has(dep)) {
        resolved.add(dep);
        queue.push(dep);
      }
    });
  }
  return resolved;
};

export const getResolvedSelections = (selected: string[]) => [...resolveIds(selected)];

export const buildImageSpec = (selected: string[], extraNotes: string): ImageSpec => {
  const resolved = resolveIds(selected);
  const spec: ImageSpec = {
    subject: { preserveFace: false, preserveBodyRatio: false, adjustableExpression: false },
    actions: [],
    composition: { constraints: [] },
    scene: [],
    lighting: [],
    style: [],
    negativeConstraints: [],
    extraNotes: extraNotes.trim() || undefined,
  };

  resolved.forEach((id) => {
    const opt = optionMap.get(id);
    if (!opt) return;

    if (id === 'subject.uploaded') spec.subject.source = 'uploaded_image';
    else if (id === 'subject.preserve_face') spec.subject.preserveFace = true;
    else if (id === 'subject.preserve_ratio') spec.subject.preserveBodyRatio = true;
    else if (id === 'subject.expression') spec.subject.adjustableExpression = true;
    else if (id === 'composition.full_body') spec.composition.shot = 'full_body';
    else if (id === 'composition.15mm') spec.composition.lens = '15mm';
    else if (opt.category === 'actions') spec.actions.push(opt.value);
    else if (opt.category === 'scene') spec.scene.push(opt.value);
    else if (opt.category === 'lighting') spec.lighting.push(opt.value);
    else if (opt.category === 'style') spec.style.push(opt.value);
    else if (opt.category === 'negativeConstraints') spec.negativeConstraints.push(opt.value);
    else if (opt.category === 'composition') spec.composition.constraints.push(opt.value);
  });

  spec.actions = [...new Set(spec.actions)];
  spec.scene = [...new Set(spec.scene)];
  spec.lighting = [...new Set(spec.lighting)];
  spec.style = [...new Set(spec.style)];
  spec.negativeConstraints = [...new Set(spec.negativeConstraints)];
  spec.composition.constraints = [...new Set(spec.composition.constraints)];
  return spec;
};
