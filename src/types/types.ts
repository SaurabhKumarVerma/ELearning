
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

export enum EVIDEOPLAYERSTATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  READY_TO_PLAY = 'readyToPlay',
  ERROR = 'error'
}

export const enum ESCREENICON {
  HOME = "home-outline",
  Enrolled = "bookmarks-outline",
}