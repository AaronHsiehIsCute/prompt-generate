import type { PromptCategory } from '../types/prompt';

export const PROMPT_CATEGORIES: PromptCategory[] = [
  { id: 'style', label: '1) 視覺風格', multi: true, groups: [
    { id: 'style.cinematic', label: '電影感', subOptions: [
      { id: 'style.cinematic.grade', label: '底片調色', tokens: ['filmic color grading'] },
      { id: 'style.cinematic.contrast', label: '高對比戲劇光', tokens: ['dramatic cinematic contrast'] },
      { id: 'style.cinematic.story', label: '故事敘事感', tokens: ['story-driven frame composition'] },
    ]},
    { id: 'style.editorial', label: '時尚編輯', subOptions: [
      { id: 'style.editorial.clean', label: '乾淨雜誌感', tokens: ['clean editorial look'] },
      { id: 'style.editorial.pose', label: '高級姿態', tokens: ['confident editorial posing'] },
      { id: 'style.editorial.fabric', label: '服裝材質細節', tokens: ['rich fabric texture emphasis'] },
    ]},
  ]},
  { id: 'camera', label: '2) 相機與鏡頭', multi: true, groups: [
    { id: 'lens.portrait', label: '人像鏡頭組', subOptions: [
      { id: 'lens.50', label: '50mm自然視角', tokens: ['50mm natural perspective'] },
      { id: 'lens.85', label: '85mm壓縮感', tokens: ['85mm portrait compression'] },
      { id: 'lens.135', label: '135mm遠攝感', tokens: ['135mm compressed telephoto look'] },
    ]},
    { id: 'lens.wide', label: '廣角鏡頭組', subOptions: [
      { id: 'lens.24', label: '24mm環境感', tokens: ['24mm wide environmental perspective'] },
      { id: 'lens.35', label: '35mm街拍感', tokens: ['35mm street storytelling perspective'] },
    ]},
  ]},
  { id: 'lighting', label: '3) 光線設計', multi: true, groups: [
    { id: 'lighting.natural', label: '自然光', subOptions: [
      { id: 'light.golden', label: '黃金時刻', tokens: ['golden hour sunlight'] },
      { id: 'light.blue', label: '藍調時刻', tokens: ['blue hour ambient lighting'] },
      { id: 'light.overcast', label: '陰天柔光', tokens: ['soft overcast diffusion'] },
    ]},
    { id: 'lighting.studio', label: '棚燈', subOptions: [
      { id: 'light.rembrandt', label: 'Rembrandt 光型', tokens: ['rembrandt lighting pattern'] },
      { id: 'light.rim', label: '輪廓光', tokens: ['clean rim light separation'] },
      { id: 'light.softbox', label: '大柔光箱', tokens: ['large softbox lighting'] },
    ]},
  ]},
  { id: 'scene', label: '4) 場景主題', multi: true, groups: [
    { id: 'scene.urban', label: '城市', subOptions: [
      { id: 'scene.street', label: '街頭', tokens: ['urban street backdrop'] },
      { id: 'scene.metro', label: '地鐵站', tokens: ['modern metro station setting'] },
      { id: 'scene.rooftop', label: '天台', tokens: ['city rooftop atmosphere'] },
    ]},
    { id: 'scene.nature', label: '自然', subOptions: [
      { id: 'scene.forest', label: '森林', tokens: ['lush forest scenery'] },
      { id: 'scene.coast', label: '海岸', tokens: ['coastal seascape backdrop'] },
      { id: 'scene.desert', label: '沙漠', tokens: ['vast desert landscape'] },
    ]},
  ]},
  { id: 'composition', label: '5) 構圖語言', multi: true, groups: [
    { id: 'composition.rules', label: '基礎構圖', subOptions: [
      { id: 'comp.thirds', label: '三分法', tokens: ['rule of thirds composition'] },
      { id: 'comp.center', label: '置中', tokens: ['centered composition'] },
      { id: 'comp.leading', label: '引導線', tokens: ['leading lines'] },
    ]},
    { id: 'composition.depth', label: '景深空間', subOptions: [
      { id: 'comp.bokeh', label: '淺景深散景', tokens: ['shallow depth of field bokeh'] },
      { id: 'comp.layer', label: '前中後景層次', tokens: ['multi-layer foreground midground background'] },
      { id: 'comp.negative', label: '大量留白', tokens: ['strong negative space'] },
    ]},
  ]},
  { id: 'mood', label: '6) 情緒與後期', multi: true, groups: [
    { id: 'mood.emotion', label: '情緒', subOptions: [
      { id: 'mood.dreamy', label: '夢幻', tokens: ['dreamy atmosphere'] },
      { id: 'mood.mysterious', label: '神秘', tokens: ['mysterious tension'] },
      { id: 'mood.energetic', label: '動感', tokens: ['energetic dynamic vibe'] },
    ]},
    { id: 'grade.output', label: '畫質輸出', subOptions: [
      { id: 'quality.ultra', label: '超高細節', tokens: ['ultra detailed rendering'] },
      { id: 'quality.print', label: '可印刷銳利度', tokens: ['print-ready sharpness'] },
      { id: 'quality.clean', label: '乾淨色彩分離', tokens: ['clean color separation'] },
    ]},
  ]},
  { id: 'negative', label: '7) 負向限制', multi: true, groups: [
    { id: 'negative.anatomy', label: '人物完整性', subOptions: [
      { id: 'neg.hand', label: '避免手部錯誤', tokens: ['no extra fingers', 'no broken hands'] },
      { id: 'neg.face', label: '避免臉部崩壞', tokens: ['no distorted face'] },
    ]},
    { id: 'negative.noise', label: '畫面乾淨度', subOptions: [
      { id: 'neg.blur', label: '避免模糊', tokens: ['no blur'] },
      { id: 'neg.watermark', label: '無浮水印文字', tokens: ['no watermark', 'no text overlay'] },
      { id: 'neg.artifact', label: '避免壓縮雜訊', tokens: ['no compression artifacts'] },
    ]},
  ]},
];
