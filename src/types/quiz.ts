export interface QuizOption {
  id: string;
  text: {
    fr: string;
    fa: string;
    ps: string;
  };
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: {
    fr: string;
    fa: string;
    ps: string;
  };
  options: QuizOption[];
}
