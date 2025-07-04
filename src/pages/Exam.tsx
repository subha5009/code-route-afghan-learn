import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { examQuestions } from '../data/examQuestions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Exam: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'fa' | 'ps'>('fr');
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = examQuestions[current];
  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const translations = {
    title: {
      fr: 'Examen',
      fa: 'امتحان',
      ps: 'ازموینه'
    },
    next: {
      fr: 'Suivant',
      fa: 'بعدی',
      ps: 'بل'
    },
    finish: {
      fr: 'Terminer',
      fa: 'پایان',
      ps: 'ختم'
    },
    score: {
      fr: 'Votre score',
      fa: 'امتیاز شما',
      ps: 'ستاسو نمره'
    }
  };

  const handleAnswer = (index: number) => {
    if (index === question.correctIndex) {
      setScore(score + 1);
    }
    if (current + 1 < examQuestions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      <Navbar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <div className="max-w-xl mx-auto p-4">
        <h1 className={`text-3xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {translations.title[currentLanguage]}
        </h1>
        {!finished ? (
          <Card>
            <CardHeader>
              <CardTitle>{question.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {question.options.map((opt, idx) => (
                <Button key={idx} className="w-full" onClick={() => handleAnswer(idx)}>
                  {opt}
                </Button>
              ))}
            </CardContent>
          </Card>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-lg">
              {translations.score[currentLanguage]}: {score} / {examQuestions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exam;
