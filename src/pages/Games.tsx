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
