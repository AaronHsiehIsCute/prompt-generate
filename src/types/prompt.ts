export interface PromptOption {
  id: string;
  label: string;
  tokens: string[];
  autoSelects?: string[];
}

export interface PromptCategory {
  id: string;
  label: string;
  description?: string;
  multi: boolean;
  options: PromptOption[];
}

export interface PromptBuildResult {
  normalizedPrompt: string;
  appliedOptionIds: string[];
  fragments: string[];
}
