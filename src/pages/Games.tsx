import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FlashcardGame from '../components/FlashcardGame';
import RoadSignMatchingGame from '../components/RoadSignMatchingGame';
import SentenceQuizGame from '../components/SentenceQuizGame';
import QuizGame from '../components/QuizGame';
import GameCard from '../components/GameCard';
import { BookOpen, Shuffle, Trophy, Globe, FileText, HelpCircle } from 'lucide-react';

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
      sentence: {
        title: {
          fr: 'Phrase à Trou',
          fa: 'جمله جای خالی',
          ps: 'جمله تشه'
        },
        description: {
          fr: 'Trouvez le mot manquant dans la phrase',
          fa: 'کلمه گم شده را در جمله پیدا کنید',
          ps: 'په جمله کې ورک شوی کلمه پیدا کړئ'
        }
      },
      quiz: {
        title: {
          fr: 'Quiz Code de la Route',
          fa: 'آزمون قوانین رانندگی',
          ps: 'د سړک قانون پوښتنې'
        },
        description: {
          fr: 'Répondez à des questions à choix multiples',
          fa: 'به سوالات چندگزینه‌ای پاسخ دهید',
          ps: 'د څو انتخابونو پوښتنو ته ځواب ورکړئ'
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
            <Button onClick={() => setSelectedGame(null)} variant="outline" className="mb-4">
              ← {translations.back[currentLanguage]}
            </Button>

            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                {translations.games[selectedGame as keyof typeof translations.games].title[currentLanguage]}
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

          {selectedGame === 'flashcard' && <FlashcardGame currentLanguage={currentLanguage} />}
          {selectedGame === 'matching' && <RoadSignMatchingGame currentLanguage={currentLanguage} />}
          {selectedGame === 'sentence' && <SentenceQuizGame currentLanguage={currentLanguage} />}
          {selectedGame === 'quiz' && <QuizGame currentLanguage={currentLanguage} />}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-warm-sand to-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Trophy className="h-12 w-12 text-afghan-green mx-auto mb-4" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
            title={translations.games.sentence.title[currentLanguage]}
            description={translations.games.sentence.description[currentLanguage]}
            difficulty="beginner"
            players={1}
            isLocked={false}
            currentLanguage={currentLanguage}
            onPlay={() => setSelectedGame('sentence')}
            icon={<FileText className="h-6 w-6" />}
          />
          <GameCard
            title={translations.games
