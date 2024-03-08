export interface Quest {
  title: string;
  content: string;
  priority: number;
}

export interface QuestInputs {
  title: string;
  content: string;
  priority: string;
}

export interface InputOptions {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
