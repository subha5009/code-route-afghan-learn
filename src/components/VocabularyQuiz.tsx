import React, { useEffect, useState } from 'react';
import { VocabularyItem } from '../types/vocabulary';
import { vocabularyData } from '../data/vocabularyData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Star, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

interface VocabularyQuizProps {
  currentLanguage: 'fr' | 'fa' | 'ps';
}

interface QuizQuestion {
  item: VocabularyItem;
  type: 'dari' | 'pashto' | 'definition';
  options: string[];
  answer: string;
}

const shuffle = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const VocabularyQuiz: React.FC<VocabularyQuizProps> = ({ currentLanguage }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();

  const translations = {
    title: {
      fr: "Quiz de Vocabulaire",
      fa: "آزمون واژگان",
      ps: "د لغتونو کویز",
    },
    next: {
      fr: "Suivant",
      fa: "بعدی",
      ps: "بل",
    },
    restart: {
      fr: "Recommencer",
      fa: "شروع مجدد",
      ps: "بیا پیل",
    },
    question: {
      dari: {
        fr: (w: string) => `Quelle est la traduction en dari de \"${w}\" ?`,
        fa: (w: string) => `ترجمه دری «${w}» کدام است؟`,
        ps: (w: string) => `د «${w}» دري ژباړه کومه ده؟`,
      },
      pashto: {
        fr: (w: string) => `Quelle est la traduction en pashto de \"${w}\" ?`,
        fa: (w: string) => `ترجمه پشتو «${w}» کدام است؟`,
        ps: (w: string) => `د «${w}» پښتو ژباړه کومه ده؟`,
      },
      definition: {
        fr: (w: string) => `Quelle est la définition de \"${w}\" ?`,
        fa: (w: string) => `تعریف «${w}» چیست؟`,
        ps: (w: string) => `د «${w}» تعریف څه دی؟`,
      },
    },
    correct: {
      fr: "Correct",
      fa: "درست",
      ps: "سم",
    },
    incorrect: {
      fr: "Incorrect",
      fa: "غلط",
      ps: "غلط",
    },
    score: {
      fr: "Score",
      fa: "امتیاز",
      ps: "پوائنټ",
    },
  };

  useEffect(() => {
    const unlocked = vocabularyData.filter((v) => v.isUnlocked);
    const items = shuffle(unlocked).slice(0, 5);
    const qs: QuizQuestion[] = items.map((item) => {
      const types: Array<'dari' | 'pashto' | 'definition'> = ['dari', 'pashto', 'definition'];
      const type = types[Math.floor(Math.random() * types.length)];
      let answer = '';
      let options: string[] = [];

      const others = shuffle(unlocked.filter((v) => v.id !== item.id));

      switch (type) {
        case 'dari':
          answer = item.dari;
          options = shuffle([answer, ...others.slice(0, 3).map((o) => o.dari)]);
          break;
        case 'pashto':
          answer = item.pashto;
          options = shuffle([answer, ...others.slice(0, 3).map((o) => o.pashto)]);
          break;
        case 'definition':
          answer = item.definition.french;
          options = shuffle([answer, ...others.slice(0, 3).map((o) => o.definition.french)]);
          break;
      }

      return { item, type, options, answer };
    });
    setQuestions(qs);
    setCurrent(0);
    setScore(0);
    setCompleted(false);
    setSelected(null);
  }, [currentLanguage]);

  const currentQuestion = questions[current];
  const progress = questions.length ? ((current + 1) / questions.length) * 100 : 0;

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    const correct = option === currentQuestion.answer;
    if (correct) {
      setScore((s) => s + 10);
      toast({ title: translations.correct[currentLanguage], duration: 1500 });
    } else {
      toast({ title: translations.incorrect[currentLanguage], variant: 'destructive', duration: 1500 });
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setCompleted(true);
      }
    }, 800);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setCompleted(false);
    setSelected(null);
  };

  if (!currentQuestion && !completed) {
    return <p>Loading...</p>;
  }

  if (completed) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <Card className="p-8 bg-gradient-to-br from-afghan-green/10 to-afghan-blue/10">
          <CardContent className="space-y-6">
            <h2 className="text-2xl font-bold text-afghan-green">{translations.title[currentLanguage]}</h2>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-lg font-semibold">{translations.score[currentLanguage]}: {score}</span>
            </div>
            <Button onClick={restart} className="w-full bg-afghan-green hover:bg-afghan-green/90">
              <RotateCcw className="h-4 w-4 mr-2" />
              {translations.restart[currentLanguage]}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const questionText = currentQuestion.type === 'dari'
    ? translations.question.dari[currentLanguage](currentQuestion.item.french)
    : currentQuestion.type === 'pashto'
    ? translations.question.pashto[currentLanguage](currentQuestion.item.french)
    : translations.question.definition[currentLanguage](currentQuestion.item.french);

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{translations.title[currentLanguage]}</h2>
          <Badge variant="secondary" className="flex items-center space-x-1">
            <Star className="h-3 w-3" />
            <span>{score}</span>
          </Badge>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{current + 1}/{questions.length}</span>
          <Progress value={progress} className="h-2 w-full ml-2" />
        </div>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="font-medium text-gray-800">{questionText}</p>
          <div className="space-y-3">
            {currentQuestion.options.map((opt) => (
              <Button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={!!selected}
                className={`w-full justify-start ${selected && opt === currentQuestion.answer ? 'bg-green-500 hover:bg-green-500' : ''} ${selected && opt === selected && opt !== currentQuestion.answer ? 'bg-red-500 hover:bg-red-500' : ''}`}
              >
                {opt}
                {selected && opt === currentQuestion.answer && <CheckCircle className="h-4 w-4 ml-auto" />}
                {selected && opt === selected && opt !== currentQuestion.answer && <XCircle className="h-4 w-4 ml-auto" />}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VocabularyQuiz;
