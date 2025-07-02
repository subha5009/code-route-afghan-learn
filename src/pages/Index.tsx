
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VocabularyCard from '../components/VocabularyCard';
import GameCard from '../components/GameCard';
import { vocabularyData } from '../data/vocabularyData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Play, 
  Flag, 
  Search,
  TrendingUp,
  Users,
  Award,
  Heart
} from 'lucide-react';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'fa' | 'ps'>('fr');
  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const translations = {
    welcome: {
      fr: 'Bienvenue sur votre plateforme d\'apprentissage',
      fa: 'به پلتفرم یادگیری خود خوش آمدید',
      ps: 'ستاسو د زده کړې پلیټ فارم ته ښه راغلاست'
    },
    subtitle: {
      fr: 'Apprenez le Code de la Route français avec le support de vos langues natives',
      fa: 'کود جاده فرانسه را با پشتیبانی زبان‌های مادری خود یاد بگیرید',
      ps: 'د فرانسې د سړک کود د خپلو مورنیو ژبو په ملاتړ سره زده کړئ'
    },
    stats: {
      fr: 'Vos Statistiques',
      fa: 'آمار شما',
      ps: 'ستاسو شمیرنې'
    },
    vocabulary: {
      fr: 'Vocabulaire',
      fa: 'واژگان',
      ps: 'کلمات'
    },
    games: {
      fr: 'Jeux Disponibles',
      fa: 'بازی‌های موجود',
      ps: 'د لاسته راوړنې وړ لوبې'
    },
    learned: {
      fr: 'Appris',
      fa: 'آموخته شده',
      ps: 'زده شوي'
    },
    level: {
      fr: 'Niveau',
      fa: 'سطح',
      ps: 'کچه'
    },
    streak: {
      fr: 'Série',
      fa: 'رشته',
      ps: 'لړۍ'
    },
    startLearning: {
      fr: 'Commencer l\'apprentissage',
      fa: 'شروع یادگیری',
      ps: 'د زده کړې پیل'
    }
  };

  const gameData = [
    {
      id: '1',
      title: currentLanguage === 'fr' ? 'Cartes Mémoire' : 
            currentLanguage === 'fa' ? 'کارت‌های حافظه' : 'د یادولو کارتونه',
      description: currentLanguage === 'fr' ? 'Mémorisez le vocabulaire avec des cartes interactives' :
                   currentLanguage === 'fa' ? 'واژگان را با کارت‌های تعاملی به خاطر بسپارید' :
                   'د متقابل کارتونو سره کلمات په یاد وساتئ',
      difficulty: 'beginner' as const,
      players: 1,
      isLocked: false,
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: '2',
      title: currentLanguage === 'fr' ? 'Panneaux de Route' : 
            currentLanguage === 'fa' ? 'تابلوهای جاده' : 'د سړک نښې',
      description: currentLanguage === 'fr' ? 'Identifiez les panneaux de signalisation' :
                   currentLanguage === 'fa' ? 'تابلوهای راهنمایی را شناسایی کنید' :
                   'د سړک د رهنمایۍ نښې وپیژنئ',
      difficulty: 'intermediate' as const,
      players: 1,
      isLocked: false,
      icon: <Flag className="h-6 w-6" />
    },
    {
      id: '3',
      title: currentLanguage === 'fr' ? 'Quiz Rapide' : 
            currentLanguage === 'fa' ? 'آزمون سریع' : 'ګړندي پوښتنې',
      description: currentLanguage === 'fr' ? 'Testez vos connaissances rapidement' :
                   currentLanguage === 'fa' ? 'دانش خود را به سرعت آزمایش کنید' :
                   'خپل پوهه په چټکۍ سره وآزمویئ',
      difficulty: 'advanced' as const,
      players: 1,
      isLocked: true,
      icon: <Play className="h-6 w-6" />
    }
  ];

  const handleGamePlay = (gameId: string) => {
    console.log(`Starting game: ${gameId}`);
    // Game logic will be implemented here
  };

  const unlockedVocabulary = vocabularyData.filter(item => item.isUnlocked);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-warm-sand via-afghan-white to-blue-50 afghan-pattern ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {translations.welcome[currentLanguage]}
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {translations.subtitle[currentLanguage]}
          </p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <Button size="lg" className="animate-fade-in">
              <BookOpen className="h-5 w-5 mr-2" />
              {translations.startLearning[currentLanguage]}
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-afghan-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-afghan-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {unlockedVocabulary.length}
              </h3>
              <p className={`text-gray-600 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {translations.learned[currentLanguage]}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-afghan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-afghan-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1</h3>
              <p className={`text-gray-600 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {translations.level[currentLanguage]}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3</h3>
              <p className={`text-gray-600 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {translations.streak[currentLanguage]}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vocabulary Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-3xl font-bold text-gray-900 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {translations.vocabulary[currentLanguage]}
            </h2>
            <Badge variant="secondary" className="text-sm">
              {unlockedVocabulary.length} / {vocabularyData.length}
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unlockedVocabulary.slice(0, 3).map((item) => (
              <div key={item.id} className="animate-fade-in">
                <VocabularyCard
                  item={item}
                  currentLanguage={currentLanguage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Games Section */}
        <div>
          <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {translations.games[currentLanguage]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameData.map((game) => (
              <div key={game.id} className="animate-fade-in">
                <GameCard
                  title={game.title}
                  description={game.description}
                  difficulty={game.difficulty}
                  players={game.players}
                  isLocked={game.isLocked}
                  currentLanguage={currentLanguage}
                  onPlay={() => handleGamePlay(game.id)}
                  icon={game.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
