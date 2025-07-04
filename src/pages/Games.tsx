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
        title: { fr:
