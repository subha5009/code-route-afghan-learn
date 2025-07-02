
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, User, Flag } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  players: number;
  isLocked: boolean;
  currentLanguage: 'fr' | 'fa' | 'ps';
  onPlay: () => void;
  icon: React.ReactNode;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  difficulty,
  players,
  isLocked,
  currentLanguage,
  onPlay,
  icon
}) => {
  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const translations = {
    play: {
      fr: 'Jouer',
      fa: 'بازی کردن',
      ps: 'لوبه کول'
    },
    locked: {
      fr: 'Verrouillé',
      fa: 'قفل شده',
      ps: 'تړل شوی'
    },
    players: {
      fr: 'joueurs',
      fa: 'بازیکنان',
      ps: 'لوبغاړي'
    }
  };

  return (
    <Card className={`w-full transition-all duration-300 hover:shadow-lg ${
      isLocked ? 'opacity-50' : 'hover:scale-105'
    } ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-afghan-green to-afghan-blue rounded-lg flex items-center justify-center text-white">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg font-bold">{title}</CardTitle>
              <div className={`flex items-center space-x-2 mt-1 ${isRTL ? 'space-x-reverse' : ''}`}>
                <User className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-500">
                  {players} {translations.players[currentLanguage]}
                </span>
              </div>
            </div>
          </div>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <Button
          onClick={onPlay}
          disabled={isLocked}
          className="w-full"
          variant={isLocked ? "secondary" : "default"}
        >
          {isLocked ? (
            <>
              <Flag className="h-4 w-4 mr-2" />
              {translations.locked[currentLanguage]}
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              {translations.play[currentLanguage]}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default GameCard;
