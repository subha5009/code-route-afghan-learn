
import React, { useState } from 'react';
import { VocabularyItem } from '../types/vocabulary';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Image, Play } from 'lucide-react';

interface VocabularyCardProps {
  item: VocabularyItem;
  currentLanguage: 'fr' | 'fa' | 'ps';
  onFlip?: () => void;
  showAnswer?: boolean;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({ 
  item, 
  currentLanguage, 
  onFlip,
  showAnswer = false 
}) => {
  const [isFlipped, setIsFlipped] = useState(showAnswer);
  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onFlip?.();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card 
      className={`w-full max-w-md mx-auto cursor-pointer transition-all duration-300 hover:shadow-lg ${
        !item.isUnlocked ? 'opacity-50' : ''
      } ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}
      onClick={handleFlip}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge className={getDifficultyColor(item.difficulty)}>
            {item.difficulty}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {item.category}
          </Badge>
        </div>

        {!isFlipped ? (
          // Front side - French term
          <div className="text-center space-y-4">
            {item.imageUrl && (
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Image className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            )}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {item.french}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.definition.french}
              </p>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              <BookOpen className="h-4 w-4 mr-2" />
              {currentLanguage === 'fr' && 'Voir la traduction'}
              {currentLanguage === 'fa' && 'ترجمه را ببینید'}
              {currentLanguage === 'ps' && 'ژباړه وګورئ'}
            </Button>
          </div>
        ) : (
          // Back side - Translation and examples
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-afghan-green mb-2">
                {currentLanguage === 'fa' ? item.dari : currentLanguage === 'ps' ? item.pashto : item.french}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentLanguage === 'fa' ? item.definition.dari : 
                 currentLanguage === 'ps' ? item.definition.pashto : 
                 item.definition.french}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-sm text-gray-700 flex items-center">
                <Play className="h-3 w-3 mr-1" />
                {currentLanguage === 'fr' && 'Exemple'}
                {currentLanguage === 'fa' && 'مثال'}
                {currentLanguage === 'ps' && 'بېلګه'}
              </h4>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'fa' ? item.exampleSentences.dari :
                 currentLanguage === 'ps' ? item.exampleSentences.pashto :
                 item.exampleSentences.french}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <p className="font-medium text-gray-700">Français</p>
                <p className="text-gray-600">{item.french}</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-700">دری</p>
                <p className="text-gray-600 font-arabic">{item.dari}</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-700">پښتو</p>
                <p className="text-gray-600 font-arabic">{item.pashto}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VocabularyCard;
