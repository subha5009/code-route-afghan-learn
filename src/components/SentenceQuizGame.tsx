import React, { useState, useEffect } from 'react';
import { vocabularyData } from '../data/vocabularyData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, RotateCcw, Trophy, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { VocabularyItem } from '../types/vocabulary';

interface SentenceQuizGameProps {
  currentLanguage: 'fr' | 'fa' | 'ps';
}

const SentenceQuizGame: React.FC<SentenceQuizGameProps> = ({ currentLanguage }) => {
  const [questions, setQuestions] = useState<VocabularyItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultCorrect, setResultCorrect] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const { toast } = useToast();

  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const translations = {
    title: {
      fr: 'Complétez la Phrase',
      fa: 'جمله را کامل کنید',
      ps: 'جمله بشپړه کړئ'
    },
    hint: {
      fr: 'Indice',
      fa: 'راهنما',
      ps: 'اشاره'
    },
    correct: {
      fr: 'Correct',
      fa: 'درست',
      ps: 'سمه'
    },
    incorrect: {
      fr: 'Incorrect',
      fa: 'غلط',
      ps: 'غلطه'
    },
    next: {
      fr: 'Suivant',
      fa: 'بعدی',
      ps: 'راتلونکی'
    },
    restart: {
      fr: 'Recommencer',
      fa: 'شروع مجدد',
      ps: 'بیا پیل'
    },
    gameComplete: {
      fr: 'Jeu Terminé!',
      fa: 'بازی تمام شد!',
      ps: 'لوبه پای ته ورسیده!'
    },
    finalScore: {
      fr: 'Score Final',
      fa: 'امتیاز نهایی',
      ps: 'وروستی پوائنټ'
    },
    choose: {
      fr: 'Choisissez le mot manquant',
      fa: 'کلمه گم شده را انتخاب کنید',
      ps: 'ورک شوی کلمه وټاکئ'
    }
  };

  useEffect(() => {
    const unlocked = vocabularyData.filter(item => item.isUnlocked);
    const shuffled = [...unlocked].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setGameCompleted(false);
  }, [currentLanguage]);

  useEffect(() => {
    if (questions.length > 0 && current < questions.length) {
      generateOptions();
    }
  }, [current, questions]);

  const generateOptions = () => {
    const correct = questions[current];
    const others = vocabularyData
      .filter(item => item.id !== correct.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(item => item.french);
    const opts = [...others, correct.french].sort(() => Math.random() - 0.5);
    setOptions(opts);
  };

  const handleAnswer = (word: string) => {
    if (gameCompleted) return;
    const correct = questions[current].french;
    const isCorrect = word === correct;
    setResultCorrect(isCorrect);
    setShowResult(true);

    if (isCorrect) {
      setScore(score + 10);
      toast({
        title: translations.correct[currentLanguage],
        description: '+10 points!',
        duration: 1500,
      });
    } else {
      toast({
        title: translations.incorrect[currentLanguage],
        variant: 'destructive',
        duration: 1500,
      });
    }

    setTimeout(() => setShowResult(false), 1000);

    if (current === questions.length - 1) {
      setTimeout(() => setGameCompleted(true), 1000);
    } else {
      setTimeout(() => setCurrent(current + 1), 1000);
    }
  };

  const restartGame = () => {
    const unlocked = vocabularyData.filter(item => item.isUnlocked);
    const shuffled = [...unlocked].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setGameCompleted(false);
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (gameCompleted) {
    return (
      <div className={`max-w-md mx-auto p-6 ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
        <Card className="text-center p-8 bg-gradient-to-br from-afghan-green/10 to-afghan-blue/10">
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Trophy className="h-16 w-16 text-afghan-green animate-bounce" />
            </div>
            <h2 className="text-2xl font-bold text-afghan-green">
              {translations.gameComplete[currentLanguage]}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <FileText className="h-5 w-5 text-afghan-blue" />
                <span className="text-lg font-semibold">
                  {translations.finalScore[currentLanguage]}: {score}
                </span>
              </div>
            </div>
            <Button onClick={restartGame} className="w-full bg-afghan-green hover:bg-afghan-green/90">
              <RotateCcw className="h-4 w-4 mr-2" />
              {translations.restart[currentLanguage]}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const item = questions[current];
  const progress = ((current + 1) / questions.length) * 100;
  const sentence = item.exampleSentences.french.replace(item.french, '_____');
  const hint = currentLanguage === 'fa' ? item.dari : currentLanguage === 'ps' ? item.pashto : item.french;

  return (
    <div className={`max-w-md mx-auto p-4 space-y-6 ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{translations.title[currentLanguage]}</h2>
          <Badge variant="secondary" className="flex items-center space-x-1">
            <FileText className="h-3 w-3" />
            <span>{score}</span>
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{translations.choose[currentLanguage]}</span>
            <span>{current + 1}/{questions.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>
      <Card className={`transition-all duration-300 ${showResult ? 'animate-pulse' : ''}`}>
        <CardContent className="p-6 space-y-4">
          <p className="text-lg text-center">{sentence}</p>
          <p className="text-sm text-center text-gray-500">{translations.hint[currentLanguage]}: {hint}</p>
          <div className="grid grid-cols-2 gap-3">
            {options.map(opt => (
              <Button
                key={opt}
                onClick={() => handleAnswer(opt)}
                disabled={showResult}
                className="flex items-center justify-center"
                variant="outline"
              >
                {opt}
              </Button>
            ))}
          </div>
          {showResult && (
            <div className="text-center mt-2">
              {resultCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-600 inline" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 inline" />
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SentenceQuizGame;
