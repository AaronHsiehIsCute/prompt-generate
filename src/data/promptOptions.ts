import type { PromptCategory } from '../types/prompt';

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    id: 'style',
    label: '1) 影像風格',
    description: '決定整體視覺語言',
    multi: false,
    options: [
      { id: 'style.cinematic', label: '電影感', tokens: ['cinematic composition', 'filmic color grading'] },
      { id: 'style.editorial', label: '雜誌編輯感', tokens: ['clean editorial look', 'magazine-ready styling'] },
      { id: 'style.documentary', label: '紀實攝影', tokens: ['documentary realism', 'authentic candid feeling'] },
      { id: 'style.fineart', label: '藝術攝影', tokens: ['fine-art photography', 'gallery-grade tonality'] },
    ],
  },
  {
    id: 'subject',
    label: '2) 主體類型',
    multi: false,
    options: [
      { id: 'subject.portrait', label: '人物肖像', tokens: ['human portrait subject'] },
      { id: 'subject.couple', label: '雙人互動', tokens: ['two-person interaction portrait'] },
      { id: 'subject.product', label: '產品靜物', tokens: ['hero product photography subject'] },
      { id: 'subject.pet', label: '寵物', tokens: ['pet portrait subject'] },
    ],
  },
  {
    id: 'camera-lens',
    label: '3) 相機與鏡頭',
    multi: true,
    options: [
      { id: 'camera.fullframe', label: '全片幅質感', tokens: ['full-frame camera look'] },
      { id: 'lens.35', label: '35mm', tokens: ['35mm focal length perspective'] },
      { id: 'lens.50', label: '50mm', tokens: ['50mm natural perspective'] },
      { id: 'lens.85', label: '85mm', tokens: ['85mm portrait compression'] },
      { id: 'lens.macro', label: '微距', tokens: ['macro close-up detail'] },
    ],
  },
  {
    id: 'lighting',
    label: '4) 光線條件',
    multi: true,
    options: [
      { id: 'light.golden', label: '黃金時刻', tokens: ['golden hour sunlight', 'warm directional light'] },
      { id: 'light.softwindow', label: '柔和窗光', tokens: ['soft window lighting', 'gentle natural shadows'] },
      { id: 'light.rembrandt', label: 'Rembrandt棚燈', tokens: ['rembrandt studio lighting pattern'] },
      { id: 'light.neon', label: '霓虹夜景', tokens: ['neon night highlights', 'vibrant colored reflections'] },
    ],
  },
  {
    id: 'scene',
    label: '5) 場景背景',
    multi: true,
    options: [
      { id: 'scene.street', label: '都市街景', tokens: ['urban street environment'] },
      { id: 'scene.forest', label: '森林', tokens: ['lush forest background'] },
      { id: 'scene.studio', label: '攝影棚', tokens: ['minimal studio backdrop'] },
      { id: 'scene.coast', label: '海岸', tokens: ['coastal scenery background'] },
    ],
  },
  {
    id: 'composition',
    label: '6) 構圖',
    multi: true,
    options: [
      { id: 'comp.thirds', label: '三分法', tokens: ['rule of thirds composition'] },
      { id: 'comp.center', label: '置中構圖', tokens: ['centered composition'] },
      { id: 'comp.negative', label: '大量留白', tokens: ['strong negative space'] },
      { id: 'comp.leading', label: '引導線', tokens: ['leading lines for visual guidance'] },
    ],
  },
  {
    id: 'mood-output',
    label: '7) 情緒與輸出要求',
    multi: true,
    options: [
      { id: 'mood.dreamy', label: '夢幻', tokens: ['dreamy atmosphere'] },
      { id: 'mood.mysterious', label: '神秘張力', tokens: ['mysterious cinematic tension'] },
      { id: 'quality.ultra', label: '超高細節', tokens: ['ultra-detailed photo rendering', 'high dynamic range'] },
      { id: 'quality.clean', label: '乾淨色彩分離', tokens: ['clean color separation'] },
    ],
  },
  {
    id: 'constraints',
    label: '8) 負向限制（避免跑偏）',
    multi: true,
    options: [
      { id: 'neg.deformed', label: '避免畸形/斷手', tokens: ['avoid deformed anatomy', 'no extra fingers'] },
      { id: 'neg.lowres', label: '避免低畫質', tokens: ['no blur', 'no low resolution artifacts'] },
      { id: 'neg.text', label: '不要文字浮水印', tokens: ['no watermark', 'no text overlay'] },
    ],
  },
];
