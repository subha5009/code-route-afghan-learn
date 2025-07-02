
import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../types/vocabulary';
import { vocabularyData } from '../data/vocabularyData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, RotateCcw, Trophy, Star, Zap, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FlashcardGameProps {
  currentLanguage: 'fr' | 'fa' | 'ps';
}

const FlashcardGame: React.FC<FlashcardGameProps> = ({ currentLanguage }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameCards, setGameCards] = useState<VocabularyItem[]>([]);
  const [answeredCards, setAnsweredCards] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const { toast } = useToast();

  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const translations = {
    title: {
      fr: 'Jeu de Cartes Flash',
      fa: 'بازی کارت‌های فلش',
      ps: 'د فلش کارتونو لوبه'
    },
    score: {
      fr: 'Score',
      fa: 'امتیاز',
      ps: 'پوائنټ'
    },
    streak: {
      fr: 'Série',
      fa: 'رشته',
      ps: 'پرله پسې'
    },
    flip: {
      fr: 'Retourner',
      fa: 'برگرداندن',
      ps: 'بړول'
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
    tapToReveal: {
      fr: 'Appuyez pour révéler',
      fa: 'برای نمایش ضربه بزنید',
      ps: 'د ښودلو لپاره ټک ورکړئ'
    },
    progress: {
      fr: 'Progrès',
      fa: 'پیشرفت',
      ps: 'پرمختګ'
    }
  };

  useEffect(() => {
    // Initialize game with unlocked vocabulary items
    const unlockedItems = vocabularyData.filter(item => item.isUnlocked);
    setGameCards(unlockedItems);
    setAnsweredCards(new Array(unlockedItems.length).fill(false));
  }, []);

  const handleFlip = () => {
    if (!gameCompleted) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (answeredCards[currentCard]) return;

    const newAnsweredCards = [...answeredCards];
    newAnsweredCards[currentCard] = true;
    setAnsweredCards(newAnsweredCards);

    if (isCorrect) {
      setScore(score + 10);
      setStreak(streak + 1);
      toast({
        title: translations.correct[currentLanguage],
        description: `+10 points! ${translations.streak[currentLanguage]}: ${streak + 1}`,
        duration: 1500,
      });
    } else {
      setStreak(0);
      toast({
        title: translations.incorrect[currentLanguage],
        description: `${translations.streak[currentLanguage]}: 0`,
        variant: "destructive",
        duration: 1500,
      });
    }

    setShowResult(true);
    setTimeout(() => setShowResult(false), 1500);

    // Check if game is completed
    if (currentCard === gameCards.length - 1) {
      setTimeout(() => setGameCompleted(true), 1500);
    }
  };

  const nextCard = () => {
    if (currentCard < gameCards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const restartGame = () => {
    setCurrentCard(0);
    setIsFlipped(false);
    setScore(0);
    setStreak(0);
    setAnsweredCards(new Array(gameCards.length).fill(false));
    setShowResult(false);
    setGameCompleted(false);
  };

  const currentItem = gameCards[currentCard];
  const progress = ((currentCard + 1) / gameCards.length) * 100;

  if (gameCards.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading vocabulary...</p>
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
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-lg font-semibold">
                  {translations.finalScore[currentLanguage]}: {score}
                </span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5 text-orange-500" />
                <span>
                  {translations.streak[currentLanguage]} Max: {Math.max(...Array.from({length: gameCards.length}, (_, i) => answeredCards[i] ? 1 : 0))}
                </span>
              </div>
            </div>
            
            <Button 
              onClick={restartGame}
              className="w-full bg-afghan-green hover:bg-afghan-green/90"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              {translations.restart[currentLanguage]}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`max-w-md mx-auto p-4 space-y-6 ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
      {/* Header with score and progress */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{translations.title[currentLanguage]}</h2>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Star className="h-3 w-3" />
              <span>{score}</span>
            </Badge>
            <Badge variant="outline" className="flex items-center space-x-1">
              <Zap className="h-3 w-3" />
              <span>{streak}</span>
            </Badge>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{translations.progress[currentLanguage]}</span>
            <span>{currentCard + 1}/{gameCards.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Flashcard */}
      <Card 
        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
          isFlipped ? 'bg-gradient-to-br from-afghan-green/5 to-afghan-blue/5' : 'bg-white'
        } ${showResult ? 'animate-pulse' : ''}`}
        onClick={handleFlip}
      >
        <CardContent className="p-8 min-h-[300px] flex flex-col justify-center">
          {!isFlipped ? (
            // Front side - French term
            <div className="text-center space-y-4">
              <Badge className="mb-4">{currentItem.category}</Badge>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  {currentItem.french}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {currentItem.definition.french}
                </p>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" size="sm" className="pointer-events-none">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {translations.tapToReveal[currentLanguage]}
                </Button>
              </div>
            </div>
          ) : (
            // Back side - Translation and examples
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-afghan-green">
                  {currentLanguage === 'fa' ? currentItem.dari : 
                   currentLanguage === 'ps' ? currentItem.pashto : 
                   currentItem.french}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {currentLanguage === 'fa' ? currentItem.definition.dari :
                   currentLanguage === 'ps' ? currentItem.definition.pashto :
                   currentItem.definition.french}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-sm text-gray-700 mb-2">
                  {currentLanguage === 'fr' && 'Exemple'}
                  {currentLanguage === 'fa' && 'مثال'}
                  {currentLanguage === 'ps' && 'بېلګه'}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {currentLanguage === 'fa' ? currentItem.exampleSentences.dari :
                   currentLanguage === 'ps' ? currentItem.exampleSentences.pashto :
                   currentItem.exampleSentences.french}
                </p>
              </div>

              {/* Action buttons */}
              {!answeredCards[currentCard] && (
                <div className="flex space-x-3">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAnswer(false);
                    }}
                    variant="outline"
                    className="flex-1 border-red-200 hover:bg-red-50"
                  >
                    <XCircle className="h-4 w-4 mr-2 text-red-500" />
                    {translations.incorrect[currentLanguage]}
                  </Button>
                  
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAnswer(true);
                    }}
                    className="flex-1 bg-green-500 hover:bg-green-600"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {translations.correct[currentLanguage]}
                  </Button>
                </div>
              )}

              {answeredCards[currentCard] && currentCard < gameCards.length - 1 && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextCard();
                  }}
                  className="w-full bg-afghan-blue hover:bg-afghan-blue/90"
                >
                  {translations.next[currentLanguage]}
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-lg font-bold text-afghan-green">{score}</div>
          <div className="text-xs text-gray-600">{translations.score[currentLanguage]}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-lg font-bold text-orange-500">{streak}</div>
          <div className="text-xs text-gray-600">{translations.streak[currentLanguage]}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-lg font-bold text-afghan-blue">{currentCard + 1}</div>
          <div className="text-xs text-gray-600">/ {gameCards.length}</div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardGame;
