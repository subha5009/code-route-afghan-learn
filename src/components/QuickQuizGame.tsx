import React, { useEffect, useState } from 'react';
import { VocabularyItem } from '../types/vocabulary';
import { vocabularyData } from '../data/vocabularyData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuickQuizGameProps {
  currentLanguage: 'fr' | 'fa' | 'ps';
}

interface Question {
  item: VocabularyItem;
  options: string[];
  correct: string;
}

const QuickQuizGame: React.FC<QuickQuizGameProps> = ({ currentLanguage }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();

  const translations = {
    title: {
      fr: 'Quiz Rapide',
      fa: 'آزمون سریع',
      ps: 'ګړندي پوښتنې',
    },
    correct: {
      fr: 'Bonne réponse!',
      fa: 'پاسخ درست!',
      ps: 'سمه ځواب!',
    },
    incorrect: {
      fr: 'Mauvaise réponse',
      fa: 'پاسخ غلط',
      ps: 'غلط ځواب',
    },
    restart: {
      fr: 'Recommencer',
      fa: 'شروع مجدد',
      ps: 'بیا پیل',
    },
    finalScore: {
      fr: 'Score Final',
      fa: 'امتیاز نهایی',
      ps: 'وروستی پوائنټ',
    },
    question: {
      fr: 'Question',
      fa: 'سوال',
      ps: 'پوښتنه',
    },
  };

  useEffect(() => {
    initializeGame();
  }, [currentLanguage]);

  const initializeGame = () => {
    const unlocked = vocabularyData.filter(v => v.isUnlocked);
    const shuffled = [...unlocked].sort(() => Math.random() - 0.5).slice(0, 5);
    const qs: Question[] = shuffled.map(item => {
      const optionsLanguage = currentLanguage === 'fr' ? 'fr' : currentLanguage;
      const correct =
        optionsLanguage === 'fa'
          ? item.dari
          : optionsLanguage === 'ps'
          ? item.pashto
          : item.french;
      const others = unlocked
        .filter(v => v.id !== item.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v =>
          optionsLanguage === 'fa'
            ? v.dari
            : optionsLanguage === 'ps'
            ? v.pashto
            : v.french
        );
      const options = [...others, correct].sort(() => Math.random() - 0.5);
      return {
        item,
        options,
        correct,
      };
    });
    setQuestions(qs);
    setCurrent(0);
    setScore(0);
    setCompleted(false);
    setSelected(null);
  };

  const handleSelect = (option: string) => {
    if (selected || completed) return;
    setSelected(option);
    const question = questions[current];
    if (option === question.correct) {
      setScore(prev => prev + 10);
      toast({ title: translations.correct[currentLanguage], duration: 1200 });
    } else {
      toast({
        title: translations.incorrect[currentLanguage],
        variant: 'destructive',
        duration: 1200,
      });
    }
    setTimeout(() => {
      if (current === questions.length - 1) {
        setCompleted(true);
      } else {
        setCurrent(c => c + 1);
        setSelected(null);
      }
    }, 1000);
  };

  const restartGame = () => {
    initializeGame();
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <Card className="p-8 bg-gradient-to-br from-afghan-green/10 to-afghan-blue/10">
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Trophy className="h-16 w-16 text-afghan-green animate-bounce" />
            </div>
            <h2 className="text-2xl font-bold text-afghan-green">
              {translations.finalScore[currentLanguage]}: {score}
            </h2>
            <Button onClick={restartGame} className="w-full bg-afghan-green hover:bg-afghan-green/90">
              <RotateCcw className="h-4 w-4 mr-2" />
              {translations.restart[currentLanguage]}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[current];
  const progress = ((current) / questions.length) * 100;

  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';
  const questionText = currentLanguage === 'fr' ? question.item.dari : question.item.french;

  return (
    <div className={`max-w-md mx-auto p-4 space-y-6 ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{translations.title[currentLanguage]}</h2>
          <Badge variant="secondary">{score}</Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold">
            {translations.question[currentLanguage]} {current + 1}/{questions.length}
          </h3>
          <p className="text-center text-2xl font-bold">{questionText}</p>

          <div className="space-y-2">
            {question.options.map(option => (
              <Button
                key={option}
                onClick={() => handleSelect(option)}
                variant="outline"
                className={`w-full justify-start ${
                  selected === option
                    ? option === question.correct
                      ? 'bg-green-100'
                      : 'bg-red-100'
                    : ''
                }`}
              >
                {option}
                {selected === option && option === question.correct && (
                  <CheckCircle2 className="h-4 w-4 ml-auto text-green-600" />
                )}
                {selected === option && option !== question.correct && (
                  <XCircle className="h-4 w-4 ml-auto text-red-600" />
                )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickQuizGame;
