
export interface VocabularyItem {
  id: string;
  french: string;
  dari: string;
  pashto: string;
  definition: {
    french: string;
    dari: string;
    pashto: string;
  };
  category: string;
  imageUrl?: string;
  exampleSentences: {
    french: string;
    dari: string;
    pashto: string;
  };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isUnlocked: boolean;
}

export interface GameScore {
  correct: number;
  total: number;
  timeSpent: number;
}

export type Language = 'fr' | 'fa' | 'ps';

export interface User {
  id: string;
  name: string;
  level: number;
  experience: number;
  unlockedItems: string[];
  gameScores: Record<string, GameScore>;
}
