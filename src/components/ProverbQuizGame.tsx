import React, { useState } from 'react';
import { proverbsData } from '../data/proverbsData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, RotateCcw, Trophy } from 'lucide-react';

interface ProverbQuizGameProps {
  currentLanguage: 'fr' | 'fa' | 'ps';
}

const ProverbQuizGame: React.FC<ProverbQuizGameProps> = ({ currentLanguage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const translations = {
    title: {
      fr: 'Quiz des Proverbes Afghans',
      fa: 'کوئز متل‌های افغانی',
      ps: 'د افغان متلونو کویز'
    },
    restart: {
      fr: 'Recommencer',
      fa: 'شروع مجدد',
      ps: 'بیا پیل'
    },
    next: {
      fr: 'Suivant',
      fa: 'بعدی',
      ps: 'راتلونکی'
    },
    score: {
      fr: 'Score',
      fa: 'امتیاز',
      ps: 'پوائنټ'
    },
    gameComplete: {
      fr: 'Quiz Terminé!',
      fa: 'کوئز تمام شد!',
      ps: 'کوېز پای ته ورسید!'
    }
  };

  const currentProverb = proverbsData[currentIndex];

  const handleOptionClick = (option: string) => {
    if (answered) return;

    setAnswered(true);
    if (option === currentProverb.french) {
      setScore(score + 10);
    }
    setShowResult(true);
    setTimeout(() => setShowResult(false), 1000);
  };

  const nextQuestion = () => {
    if (currentIndex < proverbsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
    }
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
  };

  const progress = ((currentIndex + 1) / proverbsData.length) * 100;

  if (currentIndex >= proverbsData.length) {
    return (
      <div className={`max-w-md mx-auto p-6 text-center ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>\
        <Card className="p-8 bg-gradient-to-br from-afghan-green/10 to-afghan-blue/10">
          <CardContent className="space-y-6">
            <Trophy className="h-16 w-16 text-afghan-green animate-bounce mx-auto" />
            <h2 className="text-2xl font-bold text-afghan-green">{translations.gameComplete[currentLanguage]}</h2>
            <div className="flex items-center justify-center space-x-2">
              <Badge variant="secondary">{translations.score[currentLanguage]}: {score}</Badge>
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

  return (
    <div className={`max-w-md mx-auto p-4 space-y-6 ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>\
      <div className="space-y-4">
        <h2 className="text-xl font-bold">{translations.title[currentLanguage]}</h2>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{translations.score[currentLanguage]}: {score}</span>
          <span>{currentIndex + 1}/{proverbsData.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className={`transition-all duration-300 ${showResult ? 'animate-pulse' : ''}`}>
        <CardContent className="p-6 space-y-4">
          <p className="text-lg font-semibold text-center">
            {currentLanguage === 'fa' ? currentProverb.dari :
             currentLanguage === 'ps' ? currentProverb.pashto : currentProverb.french}
          </p>
          <div className="grid grid-cols-1 gap-2">
            {currentProverb.options.map(option => (
              <Button
                key={option}
                onClick={() => handleOptionClick(option)}
                variant="outline"
                className={`justify-start ${answered && option === currentProverb.french ? 'border-green-500' : ''}`}
                disabled={answered}
              >
                {option}
              </Button>
            ))}
          </div>
          {answered && (
            <div className="flex items-center justify-center space-x-2 mt-2">
              {currentProverb.options.includes(currentProverb.french) && (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              )}
              <span className="text-sm">
                {currentProverb.french}
              </span>
            </div>
          )}
          {answered && currentIndex < proverbsData.length - 1 && (
            <Button onClick={nextQuestion} className="w-full mt-4">
              {translations.next[currentLanguage]}
            </Button>
          )}
          {answered && currentIndex === proverbsData.length - 1 && (
            <Button onClick={nextQuestion} className="w-full mt-4">
              {translations.next[currentLanguage]}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProverbQuizGame;
