import type { PromptCategory } from '../types/prompt';

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    id: 'subject',
    label: 'A. 主體',
    options: [
      { id: 'subject.uploaded', label: '使用上傳照片人物', value: 'uploaded_image', category: 'subject', autoSelects: ['subject.preserve_face', 'subject.preserve_ratio'] },
      { id: 'subject.preserve_face', label: '保留臉部特徵', value: 'preserve_face', category: 'subject' },
      { id: 'subject.preserve_ratio', label: '保留身材比例', value: 'preserve_body_ratio', category: 'subject' },
      { id: 'subject.expression', label: '可微調表情', value: 'adjust_expression', category: 'subject' },
    ],
  },
  {
    id: 'actions',
    label: 'B. 動作',
    options: [
      { id: 'actions.holding_hands', label: '十指緊扣', value: 'holding_hands', category: 'actions' },
      { id: 'actions.facing_camera', label: '面向鏡頭', value: 'facing_camera', category: 'actions' },
      { id: 'actions.smiling', label: '自然微笑', value: 'smiling', category: 'actions' },
    ],
  },
  {
    id: 'composition',
    label: 'C. 構圖',
    options: [
      { id: 'composition.full_body', label: '全身照', value: 'full_body', category: 'composition', autoSelects: ['composition.no_crop'] },
      { id: 'composition.no_crop', label: '不裁切頭、手、腳', value: 'no_crop', category: 'composition' },
      { id: 'composition.center', label: '人物置中', value: 'centered_subject', category: 'composition' },
      { id: 'composition.15mm', label: '15mm 廣角', value: '15mm', category: 'composition', autoSelects: ['composition.avoid_distortion'] },
      { id: 'composition.avoid_distortion', label: '避免臉部與身體誇張變形', value: 'avoid_distortion', category: 'composition' },
    ],
  },
  {
    id: 'scene',
    label: 'D. 場景',
    options: [
      { id: 'scene.outdoor', label: '戶外', value: 'outdoor', category: 'scene' },
      { id: 'scene.tree_shadow', label: '樹蔭', value: 'tree_shadow', category: 'scene' },
      { id: 'scene.dappled', label: '光影斑駁', value: 'dappled_light', category: 'scene' },
    ],
  },
  {
    id: 'lighting',
    label: 'E. 光線',
    options: [
      { id: 'lighting.afternoon', label: '下午', value: 'afternoon', category: 'lighting' },
      { id: 'lighting.sunset', label: '橘紅色夕陽', value: 'orange_sunset', category: 'lighting' },
      { id: 'lighting.backlit', label: '背光', value: 'backlit', category: 'lighting', autoSelects: ['lighting.face_clear'] },
      { id: 'lighting.face_clear', label: '臉部仍需清楚可辨識', value: 'face_clear', category: 'lighting' },
    ],
  },
  {
    id: 'style',
    label: 'F. 風格',
    options: [
      { id: 'style.realistic', label: '寫實攝影', value: 'realistic_photo', category: 'style' },
      { id: 'style.couple', label: '自然情侶旅拍', value: 'couple_travel_photo', category: 'style' },
      { id: 'style.cinematic', label: '電影感', value: 'cinematic', category: 'style' },
    ],
  },
  {
    id: 'negativeConstraints',
    label: 'G. 限制',
    options: [
      { id: 'negative.face', label: '不改變人物五官', value: 'do_not_change_face', category: 'negativeConstraints' },
      { id: 'negative.third', label: '不新增第三人', value: 'no_extra_people', category: 'negativeConstraints' },
      { id: 'negative.illustration', label: '不變成插畫', value: 'not_illustration', category: 'negativeConstraints' },
      { id: 'negative.ratio', label: '不改變身材比例', value: 'keep_body_ratio', category: 'negativeConstraints' },
    ],
  },
];
