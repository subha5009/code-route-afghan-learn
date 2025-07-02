
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BookOpen, 
  User, 
  Search,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  currentLanguage: 'fr' | 'fa' | 'ps';
  onLanguageChange: (lang: 'fr' | 'fa' | 'ps') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = {
    fr: {
      home: 'Accueil',
      learn: 'Apprendre',
      games: 'Jeux',
      vocabulary: 'Vocabulaire',
      profile: 'Profil'
    },
    fa: {
      home: 'خانه',
      learn: 'یادگیری',
      games: 'بازی ها',
      vocabulary: 'واژگان',
      profile: 'پروفایل'
    },
    ps: {
      home: 'کور',
      learn: 'زده کړه',
      games: 'لوبې',
      vocabulary: 'کلمات',
      profile: 'پروفایل'
    }
  };

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'fa', name: 'دری', flag: '🇦🇫' },
    { code: 'ps', name: 'پښتو', flag: '🇦🇫' }
  ];

  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  return (
    <nav className={`bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 ${isRTL ? 'rtl font-arabic' : 'ltr font-inter'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-afghan-green to-afghan-blue rounded-lg flex items-center justify-center">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {currentLanguage === 'fr' && 'Code Route Afghan'}
                {currentLanguage === 'fa' && 'کود جاده افغان'}
                {currentLanguage === 'ps' && 'د افغان سړک کود'}
              </h1>
              <p className="text-xs text-gray-500">
                {currentLanguage === 'fr' && 'Apprendre ensemble'}
                {currentLanguage === 'fa' && 'یادگیری مشترک'}
                {currentLanguage === 'ps' && 'ګډه زده کړه'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 hover:text-afghan-green transition-colors">
              <Home className="h-4 w-4" />
              <span>{navigation[currentLanguage].home}</span>
            </button>
            <button className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 hover:text-afghan-green transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>{navigation[currentLanguage].learn}</span>
            </button>
            <button className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 hover:text-afghan-green transition-colors">
              <Search className="h-4 w-4" />
              <span>{navigation[currentLanguage].vocabulary}</span>
            </button>
            <button className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 hover:text-afghan-green transition-colors">
              <User className="h-4 w-4" />
              <span>{navigation[currentLanguage].profile}</span>
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={currentLanguage === lang.code ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onLanguageChange(lang.code as 'fr' | 'fa' | 'ps')}
                  className="min-w-0 px-2"
                >
                  <span className="text-lg">{lang.flag}</span>
                </Button>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <button className="flex items-center space-x-3 rtl:space-x-reverse w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <Home className="h-4 w-4" />
                <span>{navigation[currentLanguage].home}</span>
              </button>
              <button className="flex items-center space-x-3 rtl:space-x-reverse w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <BookOpen className="h-4 w-4" />
                <span>{navigation[currentLanguage].learn}</span>
              </button>
              <button className="flex items-center space-x-3 rtl:space-x-reverse w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <Search className="h-4 w-4" />
                <span>{navigation[currentLanguage].vocabulary}</span>
              </button>
              <button className="flex items-center space-x-3 rtl:space-x-reverse w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <User className="h-4 w-4" />
                <span>{navigation[currentLanguage].profile}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
