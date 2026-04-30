import type { PromptCategory } from '../types/prompt';

export const PROMPT_CATEGORIES: PromptCategory[] = [
  { id: 'emotion', label: '1) 情緒', multi: true, groups: [
    { id: 'emo.positive', label: '積極情緒', subOptions: [
      { id: 'emo.pos.joy', label: '喜悅', leaves: [
        { id: 'emo.joy.smile', label: '微笑', tokens: ['gentle smile'] },
        { id: 'emo.joy.happy', label: '開心', tokens: ['happy expression'] },
        { id: 'emo.joy.laugh', label: '大笑', tokens: ['laughing naturally'] },
        { id: 'emo.joy.excited', label: '興奮雀躍', tokens: ['excited joyful energy'] },
        { id: 'emo.joy.relaxed', label: '放鬆愉悅', tokens: ['relaxed pleasant mood'] },
      ] },
      { id: 'emo.pos.confidence', label: '自信', leaves: [
        { id: 'emo.conf.pose', label: '挺胸姿態', tokens: ['confident posture'] },
        { id: 'emo.conf.eye', label: '堅定眼神', tokens: ['steady confident eye contact'] },
        { id: 'emo.conf.smirk', label: '淡淡自信笑', tokens: ['confident subtle smirk'] },
        { id: 'emo.conf.power', label: '掌控感', tokens: ['powerful commanding presence'] },
      ] },
    ] },
    { id: 'emo.negative', label: '消極情緒', subOptions: [
      { id: 'emo.neg.sad', label: '低落', leaves: [
        { id: 'emo.sad.quiet', label: '安靜沉思', tokens: ['quiet contemplative sadness'] },
        { id: 'emo.sad.tear', label: '微含淚光', tokens: ['subtle teary eyes'] },
      ] },
      { id: 'emo.neg.lonely', label: '孤獨', leaves: [
        { id: 'emo.lonely.space', label: '留白感', tokens: ['lonely mood with negative space'] },
        { id: 'emo.lonely.lookaway', label: '視線離鏡', tokens: ['looking away from camera'] },
      ] },
    ] },
  ] },
  { id: 'style', label: '2) 風格', multi: true, groups: [
    { id: 'style.photo', label: '攝影語言', subOptions: [
      { id: 'style.cinematic', label: '電影感', tokens: ['cinematic composition', 'filmic color grading'] },
      { id: 'style.editorial', label: '時尚編輯', tokens: ['editorial fashion photography'] },
      { id: 'style.docu', label: '紀實', tokens: ['documentary realism'] },
      { id: 'style.fineart', label: '藝術攝影', tokens: ['fine-art photography tone'] },
      { id: 'style.commercial', label: '商業廣告', tokens: ['commercial campaign photography'] },
      { id: 'style.minimal', label: '極簡現代', tokens: ['minimal modern style'] },
      { id: 'style.street', label: '街頭潮流', tokens: ['streetwear fashion vibe'] },
      { id: 'style.vintage', label: '復古懷舊', tokens: ['vintage nostalgic color tone'] },
    ] },
    { id: 'style.era', label: '年代質感', subOptions: [
      { id: 'era.90s', label: '90s 底片', tokens: ['1990s film grain aesthetic'] },
      { id: 'era.y2k', label: 'Y2K', tokens: ['y2k vibrant style'] },
      { id: 'era.modern', label: '現代乾淨商攝', tokens: ['modern clean commercial look'] },
    ] },
  ] },
  { id: 'scene', label: '3) 場景', multi: true, groups: [
    { id: 'scene.city', label: '城市', subOptions: [
      { id: 'city.street', label: '街頭', tokens: ['urban street backdrop'] },
      { id: 'city.cafe', label: '咖啡廳', tokens: ['cozy cafe interior'] },
      { id: 'city.metro', label: '地鐵', tokens: ['subway platform environment'] },
      { id: 'city.rooftop', label: '天台', tokens: ['city rooftop skyline'] },
      { id: 'city.rain', label: '雨夜街道', tokens: ['rainy city night reflections'] },
    ] },
    { id: 'scene.nature', label: '自然', subOptions: [
      { id: 'nature.forest', label: '森林', tokens: ['lush forest setting'] },
      { id: 'nature.coast', label: '海岸', tokens: ['coastal seascape'] },
      { id: 'nature.mountain', label: '山景', tokens: ['mountain vista background'] },
      { id: 'nature.snow', label: '雪地', tokens: ['snowfield environment'] },
      { id: 'nature.lake', label: '湖畔', tokens: ['calm lakeside scenery'] },
    ] },
  ] },
  { id: 'color', label: '4) 色彩氣氛', multi: true, groups: [
    { id: 'color.warm', label: '暖色系', subOptions: [
      { id: 'color.sunset', label: '夕陽橘紅', tokens: ['warm sunset orange palette'] },
      { id: 'color.gold', label: '金色調', tokens: ['golden amber tones'] },
      { id: 'color.peach', label: '蜜桃柔光', tokens: ['peach soft pastel palette'] },
    ] },
    { id: 'color.cool', label: '冷色系', subOptions: [
      { id: 'color.blue', label: '電影藍調', tokens: ['cool cinematic blue tones'] },
      { id: 'color.silver', label: '銀灰極簡', tokens: ['silver-gray minimalist palette'] },
      { id: 'color.teal', label: '青綠電影色', tokens: ['teal and orange cinematic contrast'] },
    ] },
  ] },
  { id: 'camera-motion', label: '5) 快門/動態感', multi: true, groups: [
    { id: 'motion.freeze', label: '凝結動作', subOptions: [
      { id: 'motion.sports', label: '運動凍結感', tokens: ['crisp frozen motion details'] },
      { id: 'motion.splash', label: '水花凍結', tokens: ['frozen splash droplets'] },
      { id: 'motion.jump', label: '跳躍瞬間', tokens: ['freeze jumping moment sharply'] },
    ] },
    { id: 'motion.blur', label: '動態模糊', subOptions: [
      { id: 'motion.panning', label: '追焦拖影', tokens: ['panning motion blur background'] },
      { id: 'motion.lighttrail', label: '光軌', tokens: ['long exposure light trails'] },
      { id: 'motion.crowd', label: '人群流動感', tokens: ['moving crowd motion blur'] },
    ] },
  ] },
  { id: 'negative', label: '6) 負向限制', multi: true, groups: [
    { id: 'neg.anatomy', label: '人物', subOptions: [
      { id: 'neg.fingers', label: '避免手指錯誤', tokens: ['no extra fingers'] },
      { id: 'neg.face', label: '避免臉部崩壞', tokens: ['no facial distortion'] },
    ] },
    { id: 'neg.output', label: '輸出', subOptions: [
      { id: 'neg.lowres', label: '避免低解析', tokens: ['no low-resolution artifacts'] },
      { id: 'neg.watermark', label: '無文字浮水印', tokens: ['no watermark', 'no text overlay'] },
      { id: 'neg.ns', label: '避免不雅內容', tokens: ['safe for work content only'] },
    ] },
  ] },
  
  { id: 'lighting', label: '7) 光線', multi: true, groups: [
    { id: 'light.natural', label: '自然光', subOptions: [
      { id: 'light.golden', label: '黃金時刻', tokens: ['golden hour sunlight'] },
      { id: 'light.overcast', label: '陰天柔光', tokens: ['soft overcast light'] },
      { id: 'light.backlit', label: '逆光', tokens: ['backlit rim glow'] },
    ] },
    { id: 'light.studio', label: '棚燈', subOptions: [
      { id: 'light.rembrandt', label: 'Rembrandt', tokens: ['rembrandt lighting'] },
      { id: 'light.clamshell', label: 'Clamshell', tokens: ['beauty clamshell lighting'] },
      { id: 'light.split', label: 'Split light', tokens: ['split lighting dramatic mood'] },
      { id: 'light.loop', label: 'Loop light', tokens: ['loop lighting portrait style'] },
    ] },
  ] },
  { id: 'composition', label: '8) 構圖', multi: true, groups: [
    { id: 'comp.classic', label: '經典構圖', subOptions: [
      { id: 'comp.third', label: '三分法', tokens: ['rule of thirds composition'] },
      { id: 'comp.center', label: '置中', tokens: ['centered composition'] },
      { id: 'comp.leading', label: '引導線', tokens: ['leading lines'] },
    ] },
    { id: 'comp.depth', label: '空間層次', subOptions: [
      { id: 'comp.bokeh', label: '淺景深', tokens: ['shallow depth of field'] },
      { id: 'comp.layer', label: '前中後景', tokens: ['layered foreground midground background'] },
      { id: 'comp.negative', label: '留白', tokens: ['strong negative space'] },
      { id: 'comp.symmetry', label: '對稱構圖', tokens: ['symmetrical composition'] },
      { id: 'comp.frame', label: '框中框', tokens: ['frame-within-a-frame composition'] },
    ] },
  ] },

];
