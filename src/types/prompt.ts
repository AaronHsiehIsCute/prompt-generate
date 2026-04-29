export interface PromptSubOption {
  id: string;
  label: string;
  tokens: string[];
}

export interface PromptOptionGroup {
  id: string;
  label: string;
  description?: string;
  subOptions: PromptSubOption[];
}

export interface PromptCategory {
  id: string;
  label: string;
  multi: boolean;
  groups: PromptOptionGroup[];
}

export interface PromptBuildResult {
  normalizedPrompt: string;
  appliedOptionIds: string[];
  fragments: string[];
}
