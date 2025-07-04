import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FlashcardGame from '../components/FlashcardGame';
import RoadSignMatchingGame from '../components/RoadSignMatchingGame';
import ProverbQuizGame from '../components/ProverbQuizGame';
import QuickQuizGame from '../components/QuickQuizGame';
import VocabularyQuiz from '../components/VocabularyQuiz';
import SentenceQuizGame from '../components/SentenceQuizGame';
import QuizGame from '../components/QuizGame';
import GameCard from '../components/GameCard';
import { BookOpen, Shuffle, Play, Trophy, Globe, FileText, HelpCircle } from 'lucide-react';

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
        title: { fr: 'Cartes Flash', fa: 'کارت‌های فلش', ps: 'فلش کارتونه' },
        description: {
          fr: 'Mémorisez le vocabulaire avec des cartes interactives',
          fa: 'واژگان را با کارت‌های تعاملی به خاطر بسپارید',
          ps: 'د تعاملي کارتونو سره کلیمې په یاد وساتئ'
        }
      },
      matching: {
        title: { fr: 'Association des Panneaux', fa: 'تطبیق تابلوها', ps: 'د نښو سمون' },
        description: {
          fr: 'Associez les panneaux avec leurs traductions',
          fa: 'تابلوها را با ترجمه‌هایشان تطبیق دهید',
          ps: 'نښې د دوی د ژباړو سره سمون ورکړئ'
        }
      },
      proverb: {
        title: { fr: 'Proverbes Afghans', fa: 'متل‌های افغانی', ps: 'د افغان متلونه' },
        description: {
          fr: 'Devinez la signification des proverbes traditionnels',
          fa: 'معنای متل‌های افغانی را حدس بزنید',
          ps: 'د افغان متلونو مانا پیدا کړئ'
        }
      },
      quickquiz: {
        title: { fr: 'Quiz Rapide', fa: 'آزمون سریع', ps: 'ګړندي پوښتنې' },
        description: {
          fr: 'Testez vos connaissances rapidement',
          fa: 'دانش خود را به سرعت آزمایش کنید',
          ps: 'خپل پوهه په چټکۍ سره وآزمویئ'
        }
      },
      vocabulary: {
        title: { fr: 'Quiz de Vocabulaire', fa: 'آزمون واژگان', ps: 'د لغتونو کویز' },
        description: {
          fr: 'Testez vos connaissances avec des questions aléatoires',
          fa: 'دانش خود را با سوالات تصادفی بسنجید',
          ps: 'خپل پوهه د تصادفي پوښتنو سره وازمایئ'
        }
      },
      sentence: {
        title: { fr: 'Phrase à Trou', fa: 'جمله جای خالی', ps: 'جمله تشه' },
        description: {
          fr: 'Trouvez le mot manquant dans la phrase',
          fa: 'کلمه گم شده را در جمله پیدا کنید',
          ps: 'په جمله کې ورک شوی کلمه پیدا کړئ'
        }
      },
      quiz: {
        title: { fr: 'Quiz Code de la Route', fa: 'آزمون قوانین رانندگی', ps: 'د سړک قانون پوښتنې' },
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
          <Button onClick={() => setSelectedGame(null)} variant="outline" className="mb-4">
            ← {translations.back[currentLanguage]}
          </Button>

          <h1 className="text-2xl font-bold mb-6">
            {translations.games[selectedGame as keyof typeof translations.games].title[currentLanguage]}
          </h1>

          {selectedGame === 'flashcard' && <FlashcardGame currentLanguage={currentLanguage} />}
          {selectedGame === 'matching' && <RoadSignMatchingGame currentLanguage={currentLanguage} />}
          {selectedGame === 'proverb' && <ProverbQuizGame currentLanguage={currentLanguage} />}
          {selectedGame === 'quickquiz' && <QuickQuizGame currentLanguage={currentLanguage} />}
          {selectedGame === 'vocabulary' && <VocabularyQuiz currentLanguage={currentLanguage} />}
          {selectedGame === 'sentence' && <SentenceQuizGame currentLanguage={currentLanguage} />}
          {selectedGame === 'quiz' && <QuizGame currentLanguage={currentLanguage} />}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-warm-sand to-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Trophy className="h-12 w-12 text-afghan-green mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {translations.title[currentLanguage]
