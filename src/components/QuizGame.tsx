import React, { useState } from 'react';
import { quizData } from '../data/quizData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface QuizGameProps {
  currentLanguage: 'fr' | 'fa' | 'ps';
}

const QuizGame: React.FC<QuizGameProps> = ({ currentLanguage }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();

  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const translations = {
    next: { fr: 'Suivant', fa: 'بعدی', ps: 'راتلونکی' },
    restart: { fr: 'Recommencer', fa: 'شروع مجدد', ps: 'بیا پیل' },
    score: { fr: 'Score', fa: 'امتیاز', ps: 'پوائنټ' },
    question: { fr: 'Question', fa: 'سوال', ps: 'پوښتنه' },
    finish: { fr: 'Terminé !', fa: 'تمام شد!', ps: 'ختم!' },
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 10);
      toast({
        title: currentLanguage === 'fr' ? 'Correct' : currentLanguage === 'fa' ? 'درست' : 'سمه',
        duration: 1500,
      });
    } else {
      toast({
        title: currentLanguage === 'fr' ? 'Incorrect' : currentLanguage === 'fa' ? 'غلط' : 'غلطه',
        variant: 'destructive',
        duration: 1500,
      });
    }

    const next = currentQuestion + 1;
    if (next < quizData.length) {
      setCurrentQuestion(next);
    } else {
      setCompleted(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className={`max-w-md mx-auto p-6 ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
        <Card className="text-center p-8 bg-gradient-to-br from-afghan-green/10 to-afghan-blue/10">
          <CardContent className="space-y-6">
            <Trophy className="h-16 w-16 text-afghan-green mx-auto animate-bounce" />
            <h2 className="text-2xl font-bold text-afghan-green">{translations.finish[currentLanguage]}</h2>
            <div className="flex items-center justify-center space-x-2">
              <Badge className="text-lg">{translations.score[currentLanguage]}: {score}</Badge>
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

  const q = quizData[currentQuestion];
  const progress = ((currentQuestion) / quizData.length) * 100;

  return (
    <div className={`max-w-md mx-auto p-4 space-y-6 ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{translations.question[currentLanguage]} {currentQuestion + 1}/{quizData.length}</h2>
          <Badge variant="secondary">{translations.score[currentLanguage]}: {score}</Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="font-medium text-gray-700 text-center">
            {q.question[currentLanguage]}
          </p>
          <div className="grid grid-cols-1 gap-3">
            {q.options.map(option => (
              <Button
                key={option.id}
                onClick={() => handleAnswer(option.isCorrect)}
                className="flex items-center justify-between"
              >
                <span>{option.text[currentLanguage]}</span>
                {option.isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizGame;
