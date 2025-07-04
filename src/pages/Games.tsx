
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FlashcardGame from '../components/FlashcardGame';
import RoadSignMatchingGame from '../components/RoadSignMatchingGame';
import ProverbQuizGame from '../components/ProverbQuizGame';
import GameCard from '../components/GameCard';
import { BookOpen, Shuffle, Trophy, Globe } from 'lucide-react';

const Games: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'fa' | 'ps'>('fr');
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const translations = {
    title: {
      fr: 'Jeux d\'Apprentissage',
      fa: 'بازی‌های یادگیری',
      ps: 'د زده کړې لوبې'
    },
    subtitle: {
      fr: 'Apprenez le Code de la Route en jouant',
      fa: 'با بازی قوانین رانندگی را یاد بگیرید',
      ps: 'د لوبو له لارې د موټر چلولو قوانین زده کړئ'
    },
    language: {
      fr: 'Langue',
      fa: 'زبان',
      ps: 'ژبه'
    },
    back: {
      fr: 'Retour aux jeux',
      fa: 'بازگشت به بازی‌ها',
      ps: 'لوبو ته بیرته'
    },
    games: {
      flashcard: {
        title: {
          fr: 'Cartes Flash',
          fa: 'کارت‌های فلش',
          ps: 'فلش کارتونه'
        },
        description: {
          fr: 'Mémorisez le vocabulaire avec des cartes interactives',
          fa: 'واژگان را با کارت‌های تعاملی به خاطر بسپارید',
          ps: 'د تعاملي کارتونو سره کلیمې په یاد وساتئ'
        }
      },
      matching: {
        title: {
          fr: 'Association des Panneaux',
          fa: 'تطبیق تابلوها',
          ps: 'د نښو سمون'
        },
        description: {
          fr: 'Associez les panneaux avec leurs traductions',
          fa: 'تابلوها را با ترجمه‌هایشان تطبیق دهید',
          ps: 'نښې د دوی د ژباړو سره سمون ورکړئ'
        }
      },
      proverb: {
        title: {
          fr: 'Proverbes Afghans',
          fa: 'متل‌های افغانی',
          ps: 'د افغان متلونه'
        },
        description: {
          fr: 'Devinez la signification des proverbes traditionnels',
          fa: 'معنای متل‌های افغانی را حدس بزنید',
          ps: 'د افغان متلونو مانا پیدا کړئ'
        }
      }
    }
  };

  const languageOptions = [
    { code: 'fr' as const, name: 'Français', flag: '🇫🇷' },
    { code: 'fa' as const, name: 'دری', flag: '🇦🇫' },
    { code: 'ps' as const, name: 'پښتو', flag: '🇦🇫' }
  ];

  if (selectedGame) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-warm-sand to-white ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button
              onClick={() => setSelectedGame(null)}
              variant="outline"
              className="mb-4"
            >
              ← {translations.back[currentLanguage]}
            </Button>
            
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                {selectedGame === 'flashcard' &&
                  translations.games.flashcard.title[currentLanguage]}
                {selectedGame === 'matching' &&
                  translations.games.matching.title[currentLanguage]}
                {selectedGame === 'proverb' &&
                  translations.games.proverb.title[currentLanguage]}
              </h1>
              
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <select
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value as 'fr' | 'fa' | 'ps')}
                  className="border rounded px-2 py-1 text-sm"
                >
                  {languageOptions.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {selectedGame === 'flashcard' && (
            <FlashcardGame currentLanguage={currentLanguage} />
          )}

          {selectedGame === 'matching' && (
            <RoadSignMatchingGame currentLanguage={currentLanguage} />
          )}

          {selectedGame === 'proverb' && (
            <ProverbQuizGame currentLanguage={currentLanguage} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-warm-sand to-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Trophy className="h-12 w-12 text-afghan-green" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {translations.title[currentLanguage]}
          </h1>
          <p className="text-gray-600 text-lg">
            {translations.subtitle[currentLanguage]}
          </p>
        </div>

        {/* Language Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 bg-white rounded-lg p-2 shadow-sm">
            <span className="text-sm font-medium text-gray-700">
              {translations.language[currentLanguage]}:
            </span>
            {languageOptions.map(lang => (
              <Button
                key={lang.code}
                onClick={() => setCurrentLanguage(lang.code)}
                variant={currentLanguage === lang.code ? "default" : "outline"}
                size="sm"
                className="flex items-center space-x-1"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GameCard
            title={translations.games.flashcard.title[currentLanguage]}
            description={translations.games.flashcard.description[currentLanguage]}
            difficulty="beginner"
            players={1}
            isLocked={false}
            currentLanguage={currentLanguage}
            onPlay={() => setSelectedGame('flashcard')}
            icon={<BookOpen className="h-6 w-6" />}
          />

          <GameCard
            title={translations.games.matching.title[currentLanguage]}
            description={translations.games.matching.description[currentLanguage]}
            difficulty="intermediate"
            players={1}
            isLocked={false}
            currentLanguage={currentLanguage}
            onPlay={() => setSelectedGame('matching')}
            icon={<Shuffle className="h-6 w-6" />}
          />

          <GameCard
            title={translations.games.proverb.title[currentLanguage]}
            description={translations.games.proverb.description[currentLanguage]}
            difficulty="beginner"
            players={1}
            isLocked={false}
            currentLanguage={currentLanguage}
            onPlay={() => setSelectedGame('proverb')}
            icon={<BookOpen className="h-6 w-6" />}
          />
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-afghan-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-afghan-green" />
            </div>
            <h3 className="font-semibold mb-2">
              {currentLanguage === 'fr' && 'Apprentissage Interactif'}
              {currentLanguage === 'fa' && 'یادگیری تعاملی'}
              {currentLanguage === 'ps' && 'تعاملي زده کړه'}
            </h3>
            <p className="text-gray-600 text-sm">
              {currentLanguage === 'fr' && 'Apprenez avec des jeux engageants et amusants'}
              {currentLanguage === 'fa' && 'با بازی‌های جذاب و سرگرم‌کننده یاد بگیرید'}
              {currentLanguage === 'ps' && 'د زړه راښکونکو او خوښونکو لوبو سره زده کړئ'}
            </p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-afghan-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-afghan-blue" />
            </div>
            <h3 className="font-semibold mb-2">
              {currentLanguage === 'fr' && 'Multilingue'}
              {currentLanguage === 'fa' && 'چند زبانه'}
              {currentLanguage === 'ps' && 'څانګه ژبنی'}
            </h3>
            <p className="text-gray-600 text-sm">
              {currentLanguage === 'fr' && 'Disponible en français, dari et pashto'}
              {currentLanguage === 'fa' && 'به زبان‌های فرانسوی، دری و پشتو موجود'}
              {currentLanguage === 'ps' && 'په فرانسوي، دري او پښتو ژبو کې شتون لري'}
            </p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-afghan-brown/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-6 w-6 text-afghan-brown" />
            </div>
            <h3 className="font-semibold mb-2">
              {currentLanguage === 'fr' && 'Suivi des Progrès'}
              {currentLanguage === 'fa' && 'پیگیری پیشرفت'}
              {currentLanguage === 'ps' && 'د پرمختګ تعقیب'}
            </h3>
            <p className="text-gray-600 text-sm">
              {currentLanguage === 'fr' && 'Suivez vos scores et débloquez de nouveaux niveaux'}
              {currentLanguage === 'fa' && 'نمرات خود را دنبال کنید و سطوح جدید را باز کنید'}
              {currentLanguage === 'ps' && 'خپل پوائنټونه تعقیب کړئ او نوي کچه پرانیزئ'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
