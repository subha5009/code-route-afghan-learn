
import { VocabularyItem } from '../types/vocabulary';

export const vocabularyData: VocabularyItem[] = [
  {
    id: '1',
    french: 'Stop',
    dari: 'توقف',
    pashto: 'ودریږه',
    definition: {
      french: 'Arrêt obligatoire complet du véhicule',
      dari: 'توقف کامل و اجباری وسیله نقلیه',
      pashto: 'د موټر بشپړ او لازمي درول'
    },
    category: 'Panneaux obligatoires',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je dois m\'arrêter complètement au panneau STOP.',
      dari: 'من باید در تابلوی STOP کاملاً متوقف شوم.',
      pashto: 'زه باید د STOP په نښه کې بشپړ ودریږم.'
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
      french: 'Laisser passer les véhicules ayant la priorité',
      dari: 'اجازه دادن به وسایل نقلیه که حق تقدم دارند',
      pashto: 'هغو موټرونو ته لاره ورکول چې لومړیتوب لري'
    },
    category: 'Panneaux de priorité',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'À cette intersection, je dois céder le passage.',
      dari: 'در این تقاطع، باید حق تقدم را بدهم.',
      pashto: 'په دې تقاطع کې، زه باید لاره ورکړم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '3',
    french: 'Sens interdit',
    dari: 'ورود ممنوع',
    pashto: 'ننوتل منع',
    definition: {
      french: 'Interdiction de circuler dans cette direction',
      dari: 'ممنوعیت تردد در این جهت',
      pashto: 'پدې لور کې د تګ راتګ منع'
    },
    category: 'Panneaux d\'interdiction',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Cette rue est en sens interdit pour les voitures.',
      dari: 'این خیابان برای اتومبیل‌ها ورود ممنوع است.',
      pashto: 'دا کوڅه د موټرونو لپاره ننوتل منع دي.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '4',
    french: 'Limitation de vitesse',
    dari: 'محدودیت سرعت',
    pashto: 'د سرعت بندیز',
    definition: {
      french: 'Vitesse maximale autorisée sur la route',
      dari: 'حداکثر سرعت مجاز در جاده',
      pashto: 'په سړک کې اجازه ورکړل شوی لوړ سرعت'
    },
    category: 'Panneaux de prescription',
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
    id: '5',
    french: 'Stationnement interdit',
    dari: 'پارک کردن ممنوع',
    pashto: 'پارکول منع',
    definition: {
      french: 'Interdiction de garer son véhicule',
      dari: 'ممنوعیت پارک کردن وسیله نقلیه',
      pashto: 'د موټر پارکول منع دي'
    },
    category: 'Panneaux d\'interdiction',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le stationnement est interdit sur cette zone.',
      dari: 'پارک کردن در این منطقه ممنوع است.',
      pashto: 'پدې سیمه کې پارکول منع دي.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '6',
    french: 'Passage piétons',
    dari: 'عبور عابرین پیاده',
    pashto: 'د پیاده رو پار کول',
    definition: {
      french: 'Zone réservée à la traversée des piétons',
      dari: 'محل مخصوص عبور عابرین پیاده',
      pashto: 'د پیاده خلکو د پار کولو ځای'
    },
    category: 'Panneaux d\'indication',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Les piétons doivent traverser au passage piétons.',
      dari: 'عابرین پیاده باید از محل عبور پیاده رو عبور کنند.',
      pashto: 'پیاده خلک باید د پیاده رو له ځایه پار شي.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '7',
    french: 'Feu rouge',
    dari: 'چراغ قرمز',
    pashto: 'سور څراغ',
    definition: {
      french: 'Signal lumineux indiquant l\'arrêt obligatoire',
      dari: 'سیگنال نوری که توقف اجباری را نشان می‌دهد',
      pashto: 'د رڼا سیګنال چې لازمي درول ښیي'
    },
    category: 'Signalisation lumineuse',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je m\'arrête quand le feu est rouge.',
      dari: 'وقتی چراغ قرمز است، متوقف می‌شوم.',
      pashto: 'کله چې څراغ سور وي، زه ودریږم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '8',
    french: 'Feu vert',
    dari: 'چراغ سبز',
    pashto: 'زرغون څراغ',
    definition: {
      french: 'Signal lumineux autorisant le passage',
      dari: 'سیگنال نوری که عبور را مجاز می‌کند',
      pashto: 'د رڼا سیګنال چې تیریدل اجازه ورکوي'
    },
    category: 'Signalisation lumineuse',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je peux avancer quand le feu est vert.',
      dari: 'وقتی چراغ سبز است، می‌توانم حرکت کنم.',
      pashto: 'کله چې څراغ زرغون وي، زه کولی شم مخ ته لاړ شم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '9',
    french: 'Rond-point',
    dari: 'چهارراه دایره‌ای',
    pashto: 'څرخنده چوک',
    definition: {
      french: 'Carrefour circulaire où la priorité va à gauche',
      dari: 'تقاطع دایره‌ای که حق تقدم با چپ است',
      pashto: 'ګرد چوک چې کیڼ خوا ته لومړیتوب دی'
    },
    category: 'Panneaux d\'indication',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Au rond-point, je cède le passage à gauche.',
      dari: 'در چهارراه دایره‌ای، به چپ حق تقدم می‌دهم.',
      pashto: 'په څرخنده چوک کې، زه کیڼ خوا ته لاره ورکوم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '10',
    french: 'Zone 30',
    dari: 'منطقه ۳۰',
    pashto: 'د ۳۰ سیمه',
    definition: {
      french: 'Zone où la vitesse est limitée à 30 km/h',
      dari: 'منطقه‌ای که سرعت به ۳۰ کیلومتر در ساعت محدود است',
      pashto: 'هغه سیمه چې سرعت یې ۳۰ کیلومتره په ساعت کې محدود دی'
    },
    category: 'Panneaux de prescription',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Dans cette zone 30, je roule doucement.',
      dari: 'در این منطقه ۳۰، آرام رانندگی می‌کنم.',
      pashto: 'پدې ۳۰ سیمه کې، زه ورو موټر چلوم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '11',
    french: 'Priorité à droite',
    dari: 'حق تقدم راست',
    pashto: 'ښي خوا ته لومړیتوب',
    definition: {
      french: 'Règle donnant priorité aux véhicules venant de droite',
      dari: 'قانونی که به وسایل نقلیه از سمت راست اولویت می‌دهد',
      pashto: 'هغه قانون چې د ښي خوا څخه راتلونکو موټرونو ته لومړیتوب ورکوي'
    },
    category: 'Règles de priorité',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'À ce carrefour, la priorité à droite s\'applique.',
      dari: 'در این تقاطع، حق تقدم راست اعمال می‌شود.',
      pashto: 'پدې تقاطع کې، د ښي خوا لومړیتوب پلي کیږي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '12',
    french: 'Voie obligatoire',
    dari: 'مسیر اجباری',
    pashto: 'لازمي لار',
    definition: {
      french: 'Direction que les véhicules doivent obligatoirement suivre',
      dari: 'جهتی که وسایل نقلیه باید اجباراً دنبال کنند',
      pashto: 'هغه لورښت چې موټرونه یې په لازمي ډول تعقیبوي'
    },
    category: 'Panneaux obligatoires',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Cette flèche indique la voie obligatoire.',
      dari: 'این پیکان مسیر اجباری را نشان می‌دهد.',
      pashto: 'دا غشی لازمي لار ښیي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '13',
    french: 'Dépassement interdit',
    dari: 'سبقت گرفتن ممنوع',
    pashto: 'اوښتل منع',
    definition: {
      french: 'Interdiction de dépasser un autre véhicule',
      dari: 'ممنوعیت سبقت گرفتن از وسیله نقلیه دیگر',
      pashto: 'د بل موټر د اوښتلو منع'
    },
    category: 'Panneaux d\'interdiction',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le dépassement est interdit sur cette portion.',
      dari: 'سبقت گرفتن در این بخش ممنوع است.',
      pashto: 'پدې برخه کې اوښتل منع دي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '14',
    french: 'École',
    dari: 'مکتب',
    pashto: 'ښوونځی',
    definition: {
      french: 'Panneau indiquant la proximité d\'un établissement scolaire',
      dari: 'تابلویی که نزدیکی مؤسسه آموزشی را نشان می‌دهد',
      pashto: 'هغه نښه چې د زده کړې ادارې نږدیوالی ښیي'
    },
    category: 'Panneaux de danger',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je ralentis près de l\'école pour la sécurité des enfants.',
      dari: 'نزدیک مکتب برای امنیت کودکان سرعت را کم می‌کنم.',
      pashto: 'د ماشومانو د خونديتوب لپاره د ښوونځي په نږده کې سرعت ټیټوم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '15',
    french: 'Hôpital',
    dari: 'شفاخانه',
    pashto: 'روغتون',
    definition: {
      french: 'Panneau indiquant la proximité d\'un établissement de santé',
      dari: 'تابلویی که نزدیکی مؤسسه بهداشتی را نشان می‌دهد',
      pashto: 'هغه نښه چې د روغتیایي ادارې نږدیوالی ښیي'
    },
    category: 'Panneaux d\'indication',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'L\'hôpital se trouve dans cette direction.',
      dari: 'شفاخانه در این جهت قرار دارد.',
      pashto: 'روغتون پدې لور کې موقعیت لري.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '16',
    french: 'Parking',
    dari: 'پارکینگ',
    pashto: 'د موټر ساتنه ځای',
    definition: {
      french: 'Lieu désigné pour le stationnement des véhicules',
      dari: 'مکان تعیین شده برای پارک کردن وسایل نقلیه',
      pashto: 'د موټرونو د پارکولو لپاره ټاکل شوی ځای'
    },
    category: 'Panneaux d\'indication',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je gare ma voiture dans le parking.',
      dari: 'اتومبیل خود را در پارکینگ پارک می‌کنم.',
      pashto: 'زه خپل موټر په پارکینګ کې پارکوم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '17',
    french: 'Virage dangereux',
    dari: 'پیچ خطرناک',
    pashto: 'خطرناک مړاسی',
    definition: {
      french: 'Courbe de la route présentant un danger',
      dari: 'انحنای جاده که خطر دارد',
      pashto: 'د سړک هغه کښیدنه چې خطر لري'
    },
    category: 'Panneaux de danger',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'J\'aborde ce virage dangereux avec prudence.',
      dari: 'این پیچ خطرناک را با احتیاط می‌پیمایم.',
      pashto: 'زه دا خطرناک مړاسی په احتیاط سره تیروم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '18',
    french: 'Pente dangereuse',
    dari: 'شیب خطرناک',
    pashto: 'خطرناک غونډه',
    definition: {
      french: 'Descente ou montée présentant un risque',
      dari: 'سرازیری یا سربالایی که خطر دارد',
      pashto: 'هغه کښته یا پورته چې خطر لري'
    },
    category: 'Panneaux de danger',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Cette pente dangereuse nécessite une conduite prudente.',
      dari: 'این شیب خطرناک نیاز به رانندگی محتاطانه دارد.',
      pashto: 'دا خطرناک غونډه د احتیاط سره موټر چلولو ته اړتیا لري.'
    },
    difficulty: 'advanced',
    isUnlocked: false
  },
  {
    id: '19',
    french: 'Travaux',
    dari: 'کارهای ساختمانی',
    pashto: 'ودانيز کارونه',
    definition: {
      french: 'Zone de construction ou de réparation de la route',
      dari: 'منطقه ساخت و ساز یا تعمیر جاده',
      pashto: 'د سړک د جوړولو یا ترمیم سیمه'
    },
    category: 'Panneaux temporaires',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je ralentis à cause des travaux sur la route.',
      dari: 'به دلیل کارهای ساختمانی در جاده، سرعت را کم می‌کنم.',
      pashto: 'د سړک د ودانيز کارونو له امله، زه سرعت ټیټوم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '20',
    french: 'Sortie d\'autoroute',
    dari: 'خروج از بزرگراه',
    pashto: 'د لوی سړک وتل',
    definition: {
      french: 'Panneau indiquant une sortie d\'autoroute',
      dari: 'تابلویی که خروج از بزرگراه را نشان می‌دهد',
      pashto: 'هغه نښه چې د لوی سړک وتل ښیي'
    },
    category: 'Panneaux autoroutiers',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je prends cette sortie d\'autoroute pour aller en ville.',
      dari: 'این خروج از بزرگراه را برای رفتن به شهر می‌گیرم.',
      pashto: 'زه د ښار ته د تلو لپاره د دې لوی سړک وتل نیسم.'
    },
    difficulty: 'advanced',
    isUnlocked: false
  }
];
