import type { ImageSpec } from '../types/prompt';

const labelMap = {
  actions: {
    holding_hands: '兩人十指緊扣',
    smiling: '兩人自然開心微笑',
    facing_camera: '兩人面向鏡頭',
  },
  scene: {
    outdoor: '戶外場景',
    tree_shadow: '戶外樹蔭下',
    dappled_light: '地面與背景有樹影斑駁、光影流動感',
  },
  lighting: {
    afternoon: '下午接近夕陽時段',
    orange_sunset: '橘紅色暖色調',
    backlit: '背光，人物邊緣有輪廓光',
    face_clear: '臉部仍需清楚可辨識',
  },
  style: {
    realistic_photo: '寫實攝影',
    couple_travel_photo: '自然情侶旅拍風格',
    cinematic: '電影感',
  },
  negative: {
    do_not_change_face: '不改變原人物五官',
    no_extra_people: '不新增第三人',
    not_illustration: '不變成插畫、動漫或過度修圖風格',
    keep_body_ratio: '不改變身材比例',
  },
} as const;

const bullet = (lines: string[]) => lines.map((line) => `- ${line}`).join('\n');

export const buildPrompt = (spec: ImageSpec) => {
  const subject: string[] = [];
  if (spec.subject.source === 'uploaded_image') subject.push('使用上傳照片中的兩位人物，保留兩人的臉部特徵與身材比例');
  if (spec.subject.adjustableExpression) subject.push('可微調表情，但維持原人物辨識度');

  const composition: string[] = [];
  if (spec.composition.shot === 'full_body') composition.push('全身照，兩人完整入鏡，不裁切頭、手或腳');
  if (spec.composition.lens === '15mm') composition.push('使用 15mm 廣角攝影，但避免臉部與身體誇張變形');
  if (spec.composition.constraints.includes('centered_subject')) composition.push('人物置中');

  const sections: Array<[string, string[]]> = [
    ['主體', subject],
    ['動作', spec.actions.map((x) => labelMap.actions[x as keyof typeof labelMap.actions]).filter(Boolean)],
    ['構圖', composition],
    ['場景', spec.scene.map((x) => labelMap.scene[x as keyof typeof labelMap.scene]).filter(Boolean)],
    ['光線', spec.lighting.map((x) => labelMap.lighting[x as keyof typeof labelMap.lighting]).filter(Boolean)],
    ['風格', spec.style.map((x) => labelMap.style[x as keyof typeof labelMap.style]).filter(Boolean)],
    ['限制', spec.negativeConstraints.map((x) => labelMap.negative[x as keyof typeof labelMap.negative]).filter(Boolean)],
  ];

  const body = sections
    .filter(([, lines]) => lines.length > 0)
    .map(([title, lines]) => `${title}：\n${bullet(lines)}`)
    .join('\n\n');

  return spec.extraNotes ? `${body}\n\n補充需求：\n- ${spec.extraNotes}` : body;
};
