import React from 'react';

interface FooterProps {
  currentLanguage: 'fr' | 'fa' | 'ps';
}

const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const translations = {
    about: {
      fr: 'À propos',
      fa: 'درباره',
      ps: 'په اړه'
    },
    contact: {
      fr: 'Contact',
      fa: 'تماس',
      ps: 'اړیکه'
    },
    rights: {
      fr: 'Tous droits réservés.',
      fa: 'تمام حقوق محفوظ است.',
      ps: 'ټول حقوق خوندي دي.'
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
        <p className="mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Code Route Afghan. {translations.rights[currentLanguage]}
        </p>
        <div className="space-x-4 rtl:space-x-reverse">
          <a href="#" className="hover:text-afghan-green">
            {translations.about[currentLanguage]}
          </a>
          <a href="#" className="hover:text-afghan-green">
            {translations.contact[currentLanguage]}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
