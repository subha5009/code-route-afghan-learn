
import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../types/vocabulary';
import { vocabularyData } from '../data/vocabularyData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shuffle, Trophy, Star, Timer, CheckCircle2, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RoadSignMatchingGameProps {
  currentLanguage: 'fr' | 'fa' | 'ps';
}

interface GameItem {
  id: string;
  text: string;
  matched: boolean;
  isCorrect?: boolean;
}

const RoadSignMatchingGame: React.FC<RoadSignMatchingGameProps> = ({ currentLanguage }) => {
  const [leftItems, setLeftItems] = useState<GameItem[]>([]);
  const [rightItems, setRightItems] = useState<GameItem[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameActive, setGameActive] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [matches, setMatches] = useState(0);
  const { toast } = useToast();

  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const translations = {
    title: {
      fr: 'Jeu d\'Association des Panneaux',
      fa: 'بازی تطبیق تابلوها',
      ps: 'د نښو د سمون لوبه'
    },
    instruction: {
      fr: 'Associez les panneaux français avec leurs traductions',
      fa: 'تابلوهای فرانسوی را با ترجمه‌هایشان تطبیق دهید',
      ps: 'فرانسوي نښې د دوی د ژباړو سره سمون ورکړئ'
    },
    start: {
      fr: 'Commencer',
      fa: 'شروع',
      ps: 'پیل'
    },
    restart: {
      fr: 'Recommencer',
      fa: 'شروع مجدد',
      ps: 'بیا پیل'
    },
    score: {
      fr: 'Score',
      fa: 'امتیاز',
      ps: 'پوائنټ'
    },
    time: {
      fr: 'Temps',
      fa: 'زمان',
      ps: 'وخت'
    },
    matches: {
      fr: 'Associations',
      fa: 'تطبیق‌ها',
      ps: 'سمونونه'
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
    perfect: {
      fr: 'Parfait!',
      fa: 'عالی!',
      ps: 'بشپړ!'
    },
    goodJob: {
      fr: 'Bon travail!',
      fa: 'کار خوب!',
      ps: 'ښه کار!'
    },
    correct: {
      fr: 'Correct!',
      fa: 'درست!',
      ps: 'سمه!'
    },
    incorrect: {
      fr: 'Incorrect!',
      fa: 'غلط!',
      ps: 'غلطه!'
    }
  };

  useEffect(() => {
    initializeGame();
  }, [currentLanguage]);

  useEffect(() => {
    if (gameActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && gameActive) {
      endGame();
    }
  }, [timer, gameActive]);

  const initializeGame = () => {
    // Get unlocked vocabulary items, limit to 6 for playability
    const unlockedItems = vocabularyData.filter(item => item.isUnlocked).slice(0, 6);
    
    // Create left items (French terms)
    const left = unlockedItems.map(item => ({
      id: item.id,
      text: item.french,
      matched: false
    }));

    // Create right items (translations) and shuffle
    const right = unlockedItems.map(item => ({
      id: item.id,
      text: currentLanguage === 'fa' ? item.dari : 
            currentLanguage === 'ps' ? item.pashto : 
            item.french,
      matched: false
    }));

    // Shuffle right items
    const shuffledRight = [...right].sort(() => Math.random() - 0.5);

    setLeftItems(left);
    setRightItems(shuffledRight);
    setScore(0);
    setMatches(0);
    setTimer(60);
    setGameCompleted(false);
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  const startGame = () => {
    setGameActive(true);
    initializeGame();
  };

  const endGame = () => {
    setGameActive(false);
    setGameCompleted(true);
    
    // Calculate bonus points for remaining time
    const timeBonus = timer * 2;
    setScore(prev => prev + timeBonus);
    
    if (matches === leftItems.length) {
      toast({
        title: translations.perfect[currentLanguage],
        description: `${translations.finalScore[currentLanguage]}: ${score + timeBonus}`,
        duration: 3000,
      });
    } else {
      toast({
        title: translations.gameComplete[currentLanguage],
        description: `${translations.matches[currentLanguage]}: ${matches}/${leftItems.length}`,
        duration: 3000,
      });
    }
  };

  const handleItemClick = (itemId: string, side: 'left' | 'right') => {
    if (!gameActive) return;

    if (side === 'left') {
      if (selectedLeft === itemId) {
        setSelectedLeft(null);
      } else {
        setSelectedLeft(itemId);
        if (selectedRight) {
          checkMatch(itemId, selectedRight);
        }
      }
    } else {
      if (selectedRight === itemId) {
        setSelectedRight(null);
      } else {
        setSelectedRight(itemId);
        if (selectedLeft) {
          checkMatch(selectedLeft, itemId);
        }
      }
    }
  };

  const checkMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      // Correct match
      setLeftItems(prev => prev.map(item => 
        item.id === leftId ? { ...item, matched: true, isCorrect: true } : item
      ));
      setRightItems(prev => prev.map(item => 
        item.id === rightId ? { ...item, matched: true, isCorrect: true } : item
      ));
      
      setScore(prev => prev + 20);
      setMatches(prev => prev + 1);
      
      toast({
        title: translations.correct[currentLanguage],
        description: "+20 points!",
        duration: 1500,
      });

      // Check if game is complete
      if (matches + 1 === leftItems.length) {
        setTimeout(() => endGame(), 1000);
      }
    } else {
      // Incorrect match
      toast({
        title: translations.incorrect[currentLanguage],
        description: "Try again!",
        variant: "destructive",
        duration: 1500,
      });
    }

    setSelectedLeft(null);
    setSelectedRight(null);
  };

  const getItemClassName = (item: GameItem, side: 'left' | 'right') => {
    const baseClass = "p-4 text-center cursor-pointer transition-all duration-200 border-2 rounded-lg min-h-[80px] flex items-center justify-center";
    
    if (item.matched) {
      return `${baseClass} bg-green-100 border-green-300 text-green-800`;
    }
    
    const isSelected = (side === 'left' && selectedLeft === item.id) || 
                     (side === 'right' && selectedRight === item.id);
    
    if (isSelected) {
      return `${baseClass} bg-afghan-blue/20 border-afghan-blue shadow-md`;
    }
    
    return `${baseClass} bg-white border-gray-200 hover:border-afghan-green hover:bg-afghan-green/5`;
  };

  if (!gameActive && !gameCompleted) {
    return (
      <div className={`max-w-4xl mx-auto p-6 text-center ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
        <Card className="p-8">
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{translations.title[currentLanguage]}</h2>
              <p className="text-gray-600">{translations.instruction[currentLanguage]}</p>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Timer className="h-4 w-4" />
                <span>60s</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>20 pts per match</span>
              </div>
            </div>
            
            <Button 
              onClick={startGame}
              className="bg-afghan-green hover:bg-afghan-green/90"
              size="lg"
            >
              <Shuffle className="h-4 w-4 mr-2" />
              {translations.start[currentLanguage]}
            </Button>
          </CardContent>
        </Card>
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
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-afghan-blue">{score}</div>
                  <div className="text-sm text-gray-600">{translations.score[currentLanguage]}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{matches}</div>
                  <div className="text-sm text-gray-600">{translations.matches[currentLanguage]}</div>
                </div>
              </div>
              
              <Progress value={(matches / leftItems.length) * 100} className="h-2" />
            </div>
            
            <Button 
              onClick={startGame}
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
    <div className={`max-w-6xl mx-auto p-4 ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
      {/* Game Header */}
      <div className="mb-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{translations.title[currentLanguage]}</h2>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Star className="h-3 w-3" />
              <span>{score}</span>
            </Badge>
            <Badge variant="outline" className="flex items-center space-x-1">
              <Timer className="h-3 w-3" />
              <span>{timer}s</span>
            </Badge>
          </div>
        </div>
        
        <Progress value={(matches / leftItems.length) * 100} className="h-2" />
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - French Terms */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-center mb-4">Français</h3>
          {leftItems.map((item) => (
            <div
              key={item.id}
              className={getItemClassName(item, 'left')}
              onClick={() => handleItemClick(item.id, 'left')}
            >
              <span className="text-sm font-medium">{item.text}</span>
              {item.matched && <CheckCircle2 className="h-4 w-4 ml-2 text-green-600" />}
            </div>
          ))}
        </div>

        {/* Right Column - Translations */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-center mb-4">
            {currentLanguage === 'fa' ? 'دری' : currentLanguage === 'ps' ? 'پښتو' : 'Français'}
          </h3>
          {rightItems.map((item) => (
            <div
              key={item.id}
              className={getItemClassName(item, 'right')}
              onClick={() => handleItemClick(item.id, 'right')}
            >
              <span className="text-sm font-medium">{item.text}</span>
              {item.matched && <CheckCircle2 className="h-4 w-4 ml-2 text-green-600" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadSignMatchingGame;
