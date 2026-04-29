export interface PromptLeafOption {
  id: string;
  label: string;
  tokens: string[];
}

export interface PromptSubOption {
  id: string;
  label: string;
  tokens?: string[];
  leaves?: PromptLeafOption[];
}

export interface PromptOptionGroup {
  id: string;
  label: string;
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
