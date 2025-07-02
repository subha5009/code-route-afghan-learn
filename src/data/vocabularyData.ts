
import { VocabularyItem } from '../types/vocabulary';

export const vocabularyData: VocabularyItem[] = [
  {
    id: '1',
    french: 'Panneau de signalisation',
    dari: 'تابلوی راهنمایی',
    pashto: 'د سړک نښه',
    definition: {
      french: 'Dispositif routier destiné à informer les usagers',
      dari: 'تجهیزات جاده ای برای اطلاع رسانی به کاربران',
      pashto: 'د سړک تجهیزات چې کاروونکو ته معلومات ورکوي'
    },
    category: 'Signalisation',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je dois respecter ce panneau de signalisation.',
      dari: 'من باید این تابلوی راهنمایی را رعایت کنم.',
      pashto: 'زه باید دا د سړک نښه ومانم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '2',
    french: 'Céder le passage',
    dari: 'حق تقدم دادن',
    pashto: 'لاره ورکول',
    definition: {
      french: 'Laisser passer les autres véhicules ayant la priorité',
      dari: 'اجازه دادن به وسایل نقلیه ای که حق تقدم دارند',
      pashto: 'نورو موټرونو ته چې لومړیتوب لري لاره ورکول'
    },
    category: 'Priorités',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'À ce carrefour, je dois céder le passage.',
      dari: 'در این چهارراه، من باید حق تقدم را بدهم.',
      pashto: 'په دې څلورلارې کې، زه باید لاره ورکړم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '3',
    french: 'Limitation de vitesse',
    dari: 'محدودیت سرعت',
    pashto: 'د سرعت بندیز',
    definition: {
      french: 'Vitesse maximale autorisée sur une portion de route',
      dari: 'حداکثر سرعت مجاز در بخشی از جاده',
      pashto: 'په سړک کې اجازه ورکړل شوی لوړ سرعت'
    },
    category: 'Vitesse',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'La limitation de vitesse est de 50 km/h en ville.',
      dari: 'محدودیت سرعت در شهر ۵۰ کیلومتر در ساعت است.',
      pashto: 'په ښار کې د سرعت بندیز ۵۰ کیلومتره په ساعت کې دی.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '4',
    french: 'Clignotant',
    dari: 'چراغ راهنما',
    pashto: 'د اړولو څراغ',
    definition: {
      french: 'Signal lumineux indiquant la direction',
      dari: 'سیگنال نوری که جهت را نشان می‌دهد',
      pashto: 'د رڼا سیګنال چې لورښت ښیي'
    },
    category: 'Équipements',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'J\'active mon clignotant avant de tourner.',
      dari: 'قبل از پیچیدن چراغ راهنما را روشن می‌کنم.',
      pashto: 'د اړولو څخه مخکې د اړولو څراغ روښانوم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '5',
    french: 'Stationnement',
    dari: 'پارک کردن',
    pashto: 'پارکول',
    definition: {
      french: 'Action d\'immobiliser un véhicule',
      dari: 'عمل متوقف کردن وسیله نقلیه',
      pashto: 'د موټر ودرول'
    },
    category: 'Stationnement',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le stationnement est interdit ici.',
      dari: 'پارک کردن در اینجا ممنوع است.',
      pashto: 'دلته پارکول منع دي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  }
];
