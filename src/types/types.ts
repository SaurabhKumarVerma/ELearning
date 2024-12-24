
export interface OnboardingData {
  id: number;
  imgSource: string;
  text: string;
  description: string;
}

export enum MODE {
  DARK = 'dark',
  LIGHT = 'light'
}

export enum EXPERT_TYPE {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  EXPERT = 'Expert'
}

export interface IDebouncedCallback {
  (...args: any[]): void;
}