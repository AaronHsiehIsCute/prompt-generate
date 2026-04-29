import type { PromptCategory } from '../types/prompt';

export const PROMPT_CATEGORIES: PromptCategory[] = [
  { id: 'emotion', label: '1) 情緒', multi: true, groups: [
    { id: 'emo.positive', label: '積極情緒', subOptions: [
      { id: 'emo.pos.joy', label: '喜悅', leaves: [
        { id: 'emo.joy.smile', label: '微笑', tokens: ['gentle smile'] },
        { id: 'emo.joy.happy', label: '開心', tokens: ['happy expression'] },
        { id: 'emo.joy.laugh', label: '大笑', tokens: ['laughing naturally'] },
      ]},
      { id: 'emo.pos.confidence', label: '自信', leaves: [
        { id: 'emo.conf.pose', label: '挺胸姿態', tokens: ['confident posture'] },
        { id: 'emo.conf.eye', label: '堅定眼神', tokens: ['steady confident eye contact'] },
      ]},
    ]},
    { id: 'emo.negative', label: '消極情緒', subOptions: [
      { id: 'emo.neg.sad', label: '低落', leaves: [
        { id: 'emo.sad.quiet', label: '安靜沉思', tokens: ['quiet contemplative sadness'] },
        { id: 'emo.sad.tear', label: '微含淚光', tokens: ['subtle teary eyes'] },
      ]},
      { id: 'emo.neg.lonely', label: '孤獨', leaves: [
        { id: 'emo.lonely.space', label: '留白感', tokens: ['lonely mood with negative space'] },
        { id: 'emo.lonely.lookaway', label: '視線離鏡', tokens: ['looking away from camera'] },
      ]},
    ]},
  ]},
  { id: 'style', label: '2) 風格', multi: true, groups: [
    { id: 'style.photo', label: '攝影語言', subOptions: [
      { id: 'style.cinematic', label: '電影感', tokens: ['cinematic composition', 'filmic color grading'] },
      { id: 'style.editorial', label: '時尚編輯', tokens: ['editorial fashion photography'] },
      { id: 'style.docu', label: '紀實', tokens: ['documentary realism'] },
      { id: 'style.fineart', label: '藝術攝影', tokens: ['fine-art photography tone'] },
    ]},
    { id: 'style.era', label: '年代質感', subOptions: [
      { id: 'era.90s', label: '90s 底片', tokens: ['1990s film grain aesthetic'] },
      { id: 'era.y2k', label: 'Y2K', tokens: ['y2k vibrant style'] },
      { id: 'era.modern', label: '現代乾淨商攝', tokens: ['modern clean commercial look'] },
    ]},
  ]},
  { id: 'scene', label: '3) 場景', multi: true, groups: [
    { id: 'scene.city', label: '城市', subOptions: [
      { id: 'city.street', label: '街頭', tokens: ['urban street backdrop'] },
      { id: 'city.cafe', label: '咖啡廳', tokens: ['cozy cafe interior'] },
      { id: 'city.metro', label: '地鐵', tokens: ['subway platform environment'] },
      { id: 'city.rooftop', label: '天台', tokens: ['city rooftop skyline'] },
    ]},
    { id: 'scene.nature', label: '自然', subOptions: [
      { id: 'nature.forest', label: '森林', tokens: ['lush forest setting'] },
      { id: 'nature.coast', label: '海岸', tokens: ['coastal seascape'] },
      { id: 'nature.mountain', label: '山景', tokens: ['mountain vista background'] },
      { id: 'nature.snow', label: '雪地', tokens: ['snowfield environment'] },
    ]},
  ]},
];
