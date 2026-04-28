export type PromptCategoryId =
  | 'subject'
  | 'actions'
  | 'composition'
  | 'scene'
  | 'lighting'
  | 'style'
  | 'negativeConstraints';

export interface PromptOption {
  id: string;
  label: string;
  value: string;
  category: PromptCategoryId;
  autoSelects?: string[];
}

export interface PromptCategory {
  id: PromptCategoryId;
  label: string;
  options: PromptOption[];
}

export interface ImageSpec {
  subject: {
    source?: 'uploaded_image';
    preserveFace: boolean;
    preserveBodyRatio: boolean;
    adjustableExpression: boolean;
  };
  actions: string[];
  composition: {
    shot?: string;
    lens?: string;
    constraints: string[];
  };
  scene: string[];
  lighting: string[];
  style: string[];
  negativeConstraints: string[];
  extraNotes?: string;
}
