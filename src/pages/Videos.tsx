import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { videoData } from '../data/videoData';
import VideoCard from '../components/VideoCard';

const Videos: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'fa' | 'ps'>('fr');
  const isRTL = currentLanguage === 'fa' || currentLanguage === 'ps';

  const translations = {
    title: {
      fr: 'Vidéos pédagogiques',
      fa: 'ویدیوهای آموزشی',
      ps: 'د ښوونې ویډیوګانې'
    }
  };

  return (
    <div>
      <Navbar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <h1 className={`text-3xl font-bold ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {translations.title[currentLanguage]}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoData.map(video => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
