import { QuizQuestion } from '../types/quiz';

export const quizData: QuizQuestion[] = [
  {
    id: '1',
    question: {
      fr: 'Que signifie le panneau STOP ?',
      fa: 'تابلوی STOP چه معنی دارد؟',
      ps: 'د STOP نښه څه معنی لري؟'
    },
    options: [
      {
        id: 'a',
        text: {
          fr: 'Interdiction de stationner',
          fa: 'پارک کردن ممنوع',
          ps: 'پارکول منع دي'
        },
        isCorrect: false
      },
      {
        id: 'b',
        text: {
          fr: 'Arrêt obligatoire complet',
          fa: 'توقف کامل اجباری',
          ps: 'بشپړ اجباري درول'
        },
        isCorrect: true
      },
      {
        id: 'c',
        text: {
          fr: 'Céder le passage',
          fa: 'حق تقدم را بدهید',
          ps: 'لاره ورکړئ'
        },
        isCorrect: false
      },
      {
        id: 'd',
        text: {
          fr: "Fin d'interdiction",
          fa: 'پایان ممنوعیت',
          ps: 'د منع پای'
        },
        isCorrect: false
      }
    ]
  },
  {
    id: '2',
    question: {
      fr: 'Quelle est la limitation de vitesse en ville en France ?',
      fa: 'حداکثر سرعت مجاز در شهرهای فرانسه چیست؟',
      ps: 'په فرانسوي ښارونو کې اعظمي چټکتیا څو ده؟'
    },
    options: [
      {
        id: 'a',
        text: { fr: '30 km/h', fa: '۳۰ کیلومتر در ساعت', ps: '۳۰ کیلومتره په ساعت' },
        isCorrect: false
      },
      {
        id: 'b',
        text: { fr: '50 km/h', fa: '۵۰ کیلومتر در ساعت', ps: '۵۰ کیلومتره په ساعت' },
        isCorrect: true
      },
      {
        id: 'c',
        text: { fr: '70 km/h', fa: '۷۰ کیلومتر در ساعت', ps: '۷۰ کیلومتره په ساعت' },
        isCorrect: false
      },
      {
        id: 'd',
        text: { fr: '90 km/h', fa: '۹۰ کیلومتر در ساعت', ps: '۹۰ کیلومتره په ساعت' },
        isCorrect: false
      }
    ]
  },
  {
    id: '3',
    question: {
      fr: 'Sur un rond-point, qui a la priorité ?',
      fa: 'در یک میدان دورانی، حق تقدم با کیست؟',
      ps: 'په څرخنده چوک کې چا ته لومړیتوب دی؟'
    },
    options: [
      {
        id: 'a',
        text: { fr: 'Ceux venant de gauche', fa: 'کسانی که از چپ می‌آیند', ps: 'له چپ څخه راتلونکي' },
        isCorrect: false
      },
      {
        id: 'b',
        text: { fr: 'Ceux venant de droite', fa: 'کسانی که از راست می‌آیند', ps: 'له ښي څخه راتلونکي' },
        isCorrect: false
      },
      {
        id: 'c',
        text: { fr: 'Les véhicules déjà engagés', fa: 'وسایل نقلیه‌ای که وارد شده‌اند', ps: 'هغه موټرونه چې داخل شوي' },
        isCorrect: true
      },
      {
        id: 'd',
        text: { fr: 'Les piétons', fa: 'عابرین پیاده', ps: 'پیاده کسان' },
        isCorrect: false
      }
    ]
  },
  {
    id: '4',
    question: {
      fr: 'Que faire quand le feu est orange ?',
      fa: 'وقتی چراغ نارنجی است چه باید کرد؟',
      ps: 'کله چې څراغ نارنجي وي څه باید وشي؟'
    },
    options: [
      {
        id: 'a',
        text: { fr: 'Accélérer pour passer', fa: 'سرعت را زیاد کنید تا عبور کنید', ps: 'چټک شئ چې تیر شئ' },
        isCorrect: false
      },
      {
        id: 'b',
        text: { fr: "Ralentir et se préparer à s'arrêter", fa: 'سرعت کم کنید و آماده توقف شوید', ps: 'سرعت کم کړئ او د دریدو چمتووالی ونیسئ' },
        isCorrect: true
      },
      {
        id: 'c',
        text: { fr: 'Ignorer le feu', fa: 'چراغ را نادیده بگیرید', ps: ' څراغ له پامه وغورځوئ' },
        isCorrect: false
      },
      {
        id: 'd',
        text: { fr: 'Klaxonner', fa: 'بوق بزنید', ps: 'هورن ووهئ' },
        isCorrect: false
      }
    ]
  },
  {
    id: '5',
    question: {
      fr: 'Quelle est la distance de sécurité recommandée ?',
      fa: 'فاصله ایمنی توصیه‌شده چقدر است؟',
      ps: 'مستحسن خوندي واټن څو دی؟'
    },
    options: [
      {
        id: 'a',
        text: { fr: '1 mètre', fa: 'یک متر', ps: 'یو متر' },
        isCorrect: false
      },
      {
        id: 'b',
        text: { fr: 'Deux secondes', fa: 'دو ثانیه', ps: 'دوه ثانیې' },
        isCorrect: true
      },
      {
        id: 'c',
        text: { fr: 'Cinq secondes', fa: 'پنج ثانیه', ps: 'پنځه ثانیې' },
        isCorrect: false
      },
      {
        id: 'd',
        text: { fr: 'Peu importe', fa: 'مهم نیست', ps: 'فرق نه کوي' },
        isCorrect: false
      }
    ]
  }
];
