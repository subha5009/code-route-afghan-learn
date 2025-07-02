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
  },
  {
    id: '21',
    french: 'Feu orange',
    dari: 'چراغ نارنجی',
    pashto: 'نارنجي څراغ',
    definition: {
      french: 'Signal lumineux indiquant de se préparer à s\'arrêter',
      dari: 'سیگنال نوری که آماده شدن برای توقف را نشان می‌دهد',
      pashto: 'د رڼا سیګنال چې د درولو لپاره چمتووالی ښیي'
    },
    category: 'Signalisation lumineuse',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le feu orange m\'indique de ralentir.',
      dari: 'چراغ نارنجی به من می‌گوید که سرعت کم کنم.',
      pashto: 'نارنجي څراغ راته وایي چې سرعت ټیټ کړم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '22',
    french: 'Intersection',
    dari: 'تقاطع',
    pashto: 'تقاطع',
    definition: {
      french: 'Croisement de plusieurs routes',
      dari: 'تلاقی چندین جاده',
      pashto: 'د څو سړکونو تقاطع'
    },
    category: 'Infrastructure routière',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je fais attention à cette intersection.',
      dari: 'در این تقاطع مراقب هستم.',
      pashto: 'زه پدې تقاطع کې پام لرم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '23',
    french: 'Autoroute',
    dari: 'بزرگراه',
    pashto: 'لوی سړک',
    definition: {
      french: 'Route à grande circulation avec vitesse élevée',
      dari: 'جاده پرترافیک با سرعت بالا',
      pashto: 'د لوړ سرعت او ډیر ترافیک سړک'
    },
    category: 'Types de routes',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'L\'autoroute permet de rouler à 130 km/h.',
      dari: 'بزرگراه اجازه رانندگی با سرعت ۱۳۰ کیلومتر در ساعت را می‌دهد.',
      pashto: 'لوی سړک د ۱۳۰ کیلومتره په ساعت کې د موټر چلولو اجازه ورکوي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '24',
    french: 'Route nationale',
    dari: 'جاده ملی',
    pashto: 'ملي سړک',
    definition: {
      french: 'Route principale reliant les grandes villes',
      dari: 'جاده اصلی که شهرهای بزرگ را به هم متصل می‌کند',
      pashto: 'اصلي سړک چې لوی ښارونه سره نښلوي'
    },
    category: 'Types de routes',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Cette route nationale va de Paris à Lyon.',
      dari: 'این جاده ملی از پاریس به لیون می‌رود.',
      pashto: 'دا ملي سړک له پاریس څخه لیون ته ځي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '25',
    french: 'Ceinture de sécurité',
    dari: 'کمربند ایمنی',
    pashto: 'د خونديتوب کمربند',
    definition: {
      french: 'Dispositif de sécurité obligatoire en voiture',
      dari: 'وسیله ایمنی اجباری در اتومبیل',
      pashto: 'په موټر کې لازمي د خونديتوب وسیله'
    },
    category: 'Équipements de sécurité',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je dois attacher ma ceinture de sécurité.',
      dari: 'باید کمربند ایمنی خود را ببندم.',
      pashto: 'زه باید خپل د خونديتوب کمربند وتړم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '26',
    french: 'Casque',
    dari: 'کلاه ایمنی',
    pashto: 'خونديتوب پاڼۍ',
    definition: {
      french: 'Protection obligatoire pour les motocyclistes',
      dari: 'حفاظت اجباری برای موتورسواران',
      pashto: 'د موټورسایکل چلوونکو لپاره لازمي ساتنه'
    },
    category: 'Équipements de sécurité',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le casque est obligatoire à moto.',
      dari: 'کلاه ایمنی برای موتور اجباری است.',
      pashto: 'د موټورسایکل لپاره خونديتوب پاڼۍ لازمي دي.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '27',
    french: 'Rétroviseur',
    dari: 'آینه عقب',
    pashto: 'شا کتل ښیښه',
    definition: {
      french: 'Miroir permettant de voir derrière le véhicule',
      dari: 'آینه‌ای که اجازه دیدن پشت وسیله نقلیه را می‌دهد',
      pashto: 'هغه ښیښه چې د موټر شا لیدل ممکن کوي'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je regarde dans le rétroviseur avant de changer de voie.',
      dari: 'قبل از تغییر مسیر در آینه عقب نگاه می‌کنم.',
      pashto: 'د لارې د بدلولو دمخه زه په شا کتل ښیښه کې ګورم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '28',
    french: 'Clignotant',
    dari: 'چراغ راهنما',
    pashto: 'لارښود څراغ',
    definition: {
      french: 'Signal lumineux indiquant un changement de direction',
      dari: 'سیگنال نوری که تغییر جهت را نشان می‌دهد',
      pashto: 'د رڼا سیګنال چې د لور بدلول ښیي'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'J\'active mon clignotant avant de tourner.',
      dari: 'قبل از پیچ چراغ راهنما را روشن می‌کنم.',
      pashto: 'د مړاسي کولو دمخه زه خپل لارښود څراغ بالوم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '29',
    french: 'Klaxon',
    dari: 'بوق',
    pashto: 'بوق',
    definition: {
      french: 'Avertisseur sonore du véhicule',
      dari: 'هشدار صوتی وسیله نقلیه',
      pashto: 'د موټر د غږ خبرداری ورکوونکي'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'J\'utilise le klaxon pour avertir les piétons.',
      dari: 'از بوق برای هشدار به عابرین پیاده استفاده می‌کنم.',
      pashto: 'زه د پیاده خلکو ته د خبرداری ورکولو لپاره بوق کاروم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '30',
    french: 'Frein',
    dari: 'ترمز',
    pashto: 'بریک',
    definition: {
      french: 'Système pour ralentir ou arrêter le véhicule',
      dari: 'سیستم برای کند کردن یا توقف وسیله نقلیه',
      pashto: 'د موټر د ورو کولو یا درولو سیسټم'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'J\'appuie sur le frein pour m\'arrêter.',
      dari: 'برای توقف روی ترمز فشار می‌دهم.',
      pashto: 'د درولو لپاره زه پر بریک فشار ورکوم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '31',
    french: 'Accélérateur',
    dari: 'گاز',
    pashto: 'ګاز',
    definition: {
      french: 'Pédale pour augmenter la vitesse',
      dari: 'پدال برای افزایش سرعت',
      pashto: 'د سرعت د زیاتولو لپاره پېډل'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'J\'appuie sur l\'accélérateur pour avancer.',
      dari: 'برای حرکت روی گاز فشار می‌دهم.',
      pashto: 'د مخ ته تلو لپاره زه پر ګاز فشار ورکوم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '32',
    french: 'Embrayage',
    dari: 'کلاچ',
    pashto: 'کلچ',
    definition: {
      french: 'Pédale pour changer de vitesse en voiture manuelle',
      dari: 'پدال برای تغییر دنده در اتومبیل دنده‌ای',
      pashto: 'د دستي موټر د ګیر د بدلولو لپاره پېډل'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je dois utiliser l\'embrayage pour changer de vitesse.',
      dari: 'برای تغییر دنده باید از کلاچ استفاده کنم.',
      pashto: 'د ګیر د بدلولو لپاره زه باید کلچ وکاروم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '33',
    french: 'Volant',
    dari: 'فرمان',
    pashto: 'سټیرنګ',
    definition: {
      french: 'Dispositif pour diriger le véhicule',
      dari: 'وسیله برای هدایت وسیله نقلیه',
      pashto: 'د موټر د لارښوونې وسیله'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je tourne le volant pour changer de direction.',
      dari: 'برای تغییر جهت فرمان را می‌چرخانم.',
      pashto: 'د لور د بدلولو لپاره زه سټیرنګ اړوم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '34',
    french: 'Phare',
    dari: 'چراغ جلو',
    pashto: 'مخ څراغ',
    definition: {
      french: 'Éclairage avant du véhicule',
      dari: 'روشنایی جلوی وسیله نقلیه',
      pashto: 'د موټر د مخ رڼا'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'J\'allume les phares la nuit.',
      dari: 'شب چراغ‌های جلو را روشن می‌کنم.',
      pashto: 'شپه زه د مخ څراغونه بالوم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '35',
    french: 'Feu arrière',
    dari: 'چراغ عقب',
    pashto: 'شا څراغ',
    definition: {
      french: 'Éclairage arrière du véhicule',
      dari: 'روشنایی عقب وسیله نقلیه',
      pashto: 'د موټر د شا رڼا'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Les feux arrière s\'allument quand je freine.',
      dari: 'چراغ‌های عقب وقتی ترمز می‌کنم روشن می‌شوند.',
      pashto: 'کله چې زه بریک کوم شا څراغونه بالیږي.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '36',
    french: 'Essuie-glace',
    dari: 'برف‌پاک‌کن',
    pashto: 'د شیښې پاک کوونکي',
    definition: {
      french: 'Dispositif pour nettoyer le pare-brise',
      dari: 'وسیله برای تمیز کردن شیشه جلو',
      pashto: 'د مخ شیښې د پاک کولو وسیله'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'J\'utilise les essuie-glaces quand il pleut.',
      dari: 'وقتی باران می‌بارد از برف‌پاک‌کن استفاده می‌کنم.',
      pashto: 'کله چې باران وري زه د شیښې پاک کوونکي کاروم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '37',
    french: 'Pneu',
    dari: 'لاستیک',
    pashto: 'ټایر',
    definition: {
      french: 'Roue en caoutchouc du véhicule',
      dari: 'چرخ لاستیکی وسیله نقلیه',
      pashto: 'د موټر لاستیکي ګرده'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je vérifie la pression des pneus régulièrement.',
      dari: 'فشار لاستیک‌ها را به طور منظم بررسی می‌کنم.',
      pashto: 'زه د ټایرونو فشار په منظمه توګه چک کوم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '38',
    french: 'Moteur',
    dari: 'موتور',
    pashto: 'انجن',
    definition: {
      french: 'Système de propulsion du véhicule',
      dari: 'سیستم نیروی محرکه وسیله نقلیه',
      pashto: 'د موټر د حرکت ورکولو سیسټم'
    },
    category: 'Équipements véhicule',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le moteur de ma voiture fonctionne bien.',
      dari: 'موتور اتومبیل من خوب کار می‌کند.',
      pashto: 'زموږ د موټر انجن ښه کار کوي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '39',
    french: 'Carburant',
    dari: 'سوخت',
    pashto: 'تیل',
    definition: {
      french: 'Essence ou diesel pour alimenter le moteur',
      dari: 'بنزین یا گازوئیل برای تغذیه موتور',
      pashto: 'د انجن د ګرځولو لپاره پطرول یا ډیزل'
    },
    category: 'Véhicule et maintenance',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je dois faire le plein de carburant.',
      dari: 'باید مخزن سوخت را پر کنم.',
      pashto: 'زه باید د تیلو ټانک ډک کړم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '40',
    french: 'Station-service',
    dari: 'پمپ بنزین',
    pashto: 'د تیلو ونډه',
    definition: {
      french: 'Lieu pour faire le plein de carburant',
      dari: 'مکان برای پر کردن سوخت',
      pashto: 'د تیلو د ډکولو ځای'
    },
    category: 'Infrastructure routière',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je m\'arrête à la station-service.',
      dari: 'در پمپ بنزین توقف می‌کنم.',
      pashto: 'زه د تیلو په ونډه کې درېږم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '41',
    french: 'Péage',
    dari: 'عوارض',
    pashto: 'محصول',
    definition: {
      french: 'Point de paiement sur autoroute',
      dari: 'نقطه پرداخت در بزرگراه',
      pashto: 'په لوی سړک کې د پیسو ورکولو ځای'
    },
    category: 'Infrastructure routière',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je paie au péage pour utiliser l\'autoroute.',
      dari: 'برای استفاده از بزرگراه عوارض می‌پردازم.',
      pashto: 'د لوی سړک د کارولو لپاره زه محصول ورکوم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '42',
    french: 'Aire de repos',
    dari: 'منطقه استراحت',
    pashto: 'د آرام ځای',
    definition: {
      french: 'Zone d\'arrêt pour se reposer sur autoroute',
      dari: 'منطقه توقف برای استراحت در بزرگراه',
      pashto: 'په لوی سړک کې د آرام کولو لپاره د درېدو ځای'
    },
    category: 'Infrastructure routière',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je fais une pause à l\'aire de repos.',
      dari: 'در منطقه استراحت وقفه می‌کنم.',
      pashto: 'زه د آرام په ځای کې وقفه کوم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '43',
    french: 'Vitesse minimale',
    dari: 'حداقل سرعت',
    pashto: 'کشر سرعت',
    definition: {
      french: 'Vitesse minimum obligatoire sur certaines routes',
      dari: 'حداقل سرعت اجباری در برخی جاده‌ها',
      pashto: 'په ځینو سړکونو کې لازمي کشر سرعت'
    },
    category: 'Panneaux de prescription',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Sur autoroute, il y a une vitesse minimale.',
      dari: 'در بزرگراه، حداقل سرعت وجود دارد.',
      pashto: 'په لوی سړک کې، کشر سرعت شته.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '44',
    french: 'Chaussée déformée',
    dari: 'جاده آسیب‌دیده',
    pashto: 'خراب سړک',
    definition: {
      french: 'Route en mauvais état présentant des dangers',
      dari: 'جاده در وضعیت بد که خطرات دارد',
      pashto: 'په بده حالت کې سړک چې خطرونه لري'
    },
    category: 'Panneaux de danger',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Attention à la chaussée déformée.',
      dari: 'مراقب جاده آسیب‌دیده باشید.',
      pashto: 'د خراب سړک څخه پاملرنه وکړئ.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '45',
    french: 'Chaussée glissante',
    dari: 'جاده لغزنده',
    pashto: 'ښیدونکی سړک',
    definition: {
      french: 'Route où l\'adhérence est réduite',
      dari: 'جاده‌ای که چسبندگی کم است',
      pashto: 'هغه سړک چې په کې ښیدل کیږي'
    },
    category: 'Panneaux de danger',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je roule doucement sur chaussée glissante.',
      dari: 'روی جاده لغزنده آرام رانندگی می‌کنم.',
      pashto: 'زه په ښیدونکي سړک ورو موټر چلوم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '46',
    french: 'Passage à niveau',
    dari: 'گذرگاه راه‌آهن',
    pashto: 'د اورګاډي تیریدل',
    definition: {
      french: 'Croisement entre route et voie ferrée',
      dari: 'تلاقی بین جاده و خط آهن',
      pashto: 'د سړک او د اورګاډي د پټلۍ تقاطع'
    },
    category: 'Panneaux de danger',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je m\'arrête au passage à niveau fermé.',
      dari: 'در گذرگاه راه‌آهن بسته توقف می‌کنم.',
      pashto: 'زه د تړل شوي اورګاډي په تیریدو کې ودریږم.'
    },
    difficulty: 'advanced',
    isUnlocked: false
  },
  {
    id: '47',
    french: 'Pont mobile',
    dari: 'پل متحرک',
    pashto: 'ګرځیدونکی پل',
    definition: {
      french: 'Pont qui peut s\'ouvrir pour laisser passer les bateaux',
      dari: 'پلی که می‌تواند برای عبور کشتی‌ها باز شود',
      pashto: 'هغه پل چې د کښتیو د تیریدو لپاره پرانیستل کیږي'
    },
    category: 'Panneaux de danger',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le pont mobile peut s\'ouvrir soudainement.',
      dari: 'پل متحرک می‌تواند ناگهان باز شود.',
      pashto: 'ګرځیدونکی پل کولی شي ناڅاپه پرانیستل شي.'
    },
    difficulty: 'advanced',
    isUnlocked: false
  },
  {
    id: '48',
    french: 'Animaux sauvages',
    dari: 'حیوانات وحشی',
    pashto: 'ځنګلي ژوي',
    definition: {
      french: 'Risque de traversée d\'animaux sur la route',
      dari: 'خطر عبور حیوانات از جاده',
      pashto: 'د ژویو د سړک د پار کولو خطر'
    },
    category: 'Panneaux de danger',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Attention aux animaux sauvages la nuit.',
      dari: 'شب مراقب حیوانات وحشی باشید.',
      pashto: 'شپه د ځنګلي ژویو څخه پاملرنه وکړئ.'
    },
    difficulty: 'advanced',
    isUnlocked: false
  },
  {
    id: '49',
    french: 'Véhicules lents',
    dari: 'وسایل نقلیه کند',
    pashto: 'ورو موټرونه',
    definition: {
      french: 'Présence de véhicules roulant lentement',
      dari: 'حضور وسایل نقلیه‌ای که آرام حرکت می‌کنند',
      pashto: 'د هغو موټرونو شتون چې ورو حرکت کوي'
    },
    category: 'Panneaux de danger',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je dépasse prudemment les véhicules lents.',
      dari: 'وسایل نقلیه کند را با احتیاط سبقت می‌گیرم.',
      pashto: 'زه ورو موټرونه په احتیاط سره اوښتم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '50',
    french: 'Brouillard',
    dari: 'مه',
    pashto: 'څاپیرې',
    definition: {
      french: 'Condition météorologique réduisant la visibilité',
      dari: 'شرایط آب و هوایی که دید را کاهش می‌دهد',
      pashto: 'د هوا حالت چې لیدل یې کموي'
    },
    category: 'Conditions météo',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je roule lentement dans le brouillard.',
      dari: 'در مه آرام رانندگی می‌کنم.',
      pashto: 'زه په څاپیرو کې ورو موټر چلوم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '51',
    french: 'Verglas',
    dari: 'یخ روی جاده',
    pashto: 'د سړک یخ',
    definition: {
      french: 'Couche de glace fine sur la route',
      dari: 'لایه نازک یخ روی جاده',
      pashto: 'په سړک پورې د یخ پتلی پرت'
    },
    category: 'Conditions météo',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le verglas rend la route très dangereuse.',
      dari: 'یخ روی جاده، جاده را بسیار خطرناک می‌کند.',
      pashto: 'د سړک یخ سړک ډېر خطرناک کوي.'
    },
    difficulty: 'advanced',
    isUnlocked: false
  },
  {
    id: '52',
    french: 'Pluie',
    dari: 'باران',
    pashto: 'باران',
    definition: {
      french: 'Précipitation réduisant l\'adhérence',
      dari: 'بارندگی که چسبندگی را کاهش می‌دهد',
      pashto: 'باران چې د موټر ونیول کموي'
    },
    category: 'Conditions météo',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je dois adapter ma conduite à la pluie.',
      dari: 'باید رانندگی خود را با باران تطبیق دهم.',
      pashto: 'زه باید خپل موټر چلول د باران سره سمون ورکړم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '53',
    french: 'Neige',
    dari: 'برف',
    pashto: 'واورې',
    definition: {
      french: 'Précipitation blanche rendant la route glissante',
      dari: 'بارندگی سفید که جاده را لغزنده می‌کند',
      pashto: 'سپینې باریدنې چې سړک ښیدونکی کوي'
    },
    category: 'Conditions météo',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'La neige nécessite des pneus spéciaux.',
      dari: 'برف نیاز به لاستیک‌های مخصوص دارد.',
      pashto: 'واورې ځانګړو ټایرونو ته اړتیا لري.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '54',
    french: 'Vent fort',
    dari: 'باد شدید',
    pashto: 'ډېر باد',
    definition: {
      french: 'Condition météorologique affectant la stabilité',
      dari: 'شرایط آب و هوایی که بر پایداری تأثیر می‌گذارد',
      pashto: 'د هوا حالت چې د موټر برابرتیا اغیزمنوي'
    },
    category: 'Conditions météo',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le vent fort peut déstabiliser la voiture.',
      dari: 'باد شدید می‌تواند اتومبیل را ناپایدار کند.',
      pashto: 'ډېر باد کولی شي موټر بې ثباته کړي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '55',
    french: 'Distance de sécurité',
    dari: 'فاصله ایمنی',
    pashto: 'د خونديتوب واټن',
    definition: {
      french: 'Espace à maintenir entre deux véhicules',
      dari: 'فضایی که بین دو وسیله نقلیه حفظ شود',
      pashto: 'هغه ځای چې د دوو موټرونو ترمنځ ساتل کیږي'
    },
    category: 'Règles de circulation',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je respecte la distance de sécurité.',
      dari: 'فاصله ایمنی را رعایت می‌کنم.',
      pashto: 'زه د خونديتوب واټن ساتم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '56',
    french: 'Distance d\'arrêt',
    dari: 'فاصله توقف',
    pashto: 'د درولو واټن',
    definition: {
      french: 'Distance nécessaire pour s\'arrêter complètement',
      dari: 'فاصله لازم برای توقف کامل',
      pashto: 'د بشپړ درولو لپاره اړین واټن'
    },
    category: 'Règles de circulation',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'La distance d\'arrêt augmente avec la vitesse.',
      dari: 'فاصله توقف با سرعت افزایش می‌یابد.',
      pashto: 'د درولو واټن د سرعت سره زیاتیږي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '57',
    french: 'Angle mort',
    dari: 'نقطه کور',
    pashto: 'ړنده ځای',
    definition: {
      french: 'Zone non visible dans les rétroviseurs',
      dari: 'منطقه‌ای که در آینه‌ها دیده نمی‌شود',
      pashto: 'هغه ځای چې په شا کتل ښیښو کې نه لیدل کیږي'
    },
    category: 'Sécurité routière',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je vérifie l\'angle mort avant de changer de voie.',
      dari: 'قبل از تغییر مسیر نقطه کور را بررسی می‌کنم.',
      pashto: 'د لارې د بدلولو دمخه زه ړنده ځای چک کوم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '58',
    french: 'Contrôle technique',
    dari: 'معاینه فنی',
    pashto: 'فني وګورنه',
    definition: {
      french: 'Vérification obligatoire de l\'état du véhicule',
      dari: 'بررسی اجباری وضعیت وسیله نقلیه',
      pashto: 'د موټر د حالت لازمي چک کول'
    },
    category: 'Obligations légales',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je dois passer le contrôle technique.',
      dari: 'باید معاینه فنی بگذرانم.',
      pashto: 'زه باید فني وګورنه ترسره کړم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '59',
    french: 'Assurance',
    dari: 'بیمه',
    pashto: 'بیمه',
    definition: {
      french: 'Protection financière obligatoire pour conduire',
      dari: 'حمایت مالی اجباری برای رانندگی',
      pashto: 'د موټر چلولو لپاره لازمي مالي ساتنه'
    },
    category: 'Obligations légales',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'L\'assurance auto est obligatoire en France.',
      dari: 'بیمه اتومبیل در فرانسه اجباری است.',
      pashto: 'په فرانسه کې د موټر بیمه لازمي دي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '60',
    french: 'Permis de conduire',
    dari: 'گواهینامه رانندگی',
    pashto: 'د موټر چلولو جواز',
    definition: {
      french: 'Document officiel autorisant la conduite',
      dari: 'سند رسمی مجوز رانندگی',
      pashto: 'د موټر چلولو رسمي اجازه لیک'
    },
    category: 'Obligations légales',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je dois avoir mon permis de conduire avec moi.',
      dari: 'باید گواهینامه رانندگی را همراه داشته باشم.',
      pashto: 'زه باید خپل د موټر چلولو جواز له ځان سره ولرم.'
    },
    difficulty: 'beginner',
    isUnlocked: true
  },
  {
    id: '61',
    french: 'Carte grise',
    dari: 'کارت خاکستری',
    pashto: 'د موټر کارت',
    definition: {
      french: 'Document d\'immatriculation du véhicule',
      dairy: 'سند ثبت وسیله نقلیه',
      pashto: 'د موټر د ثبت کولو سند'
    },
    category: 'Obligations légales',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'La carte grise prouve que je suis propriétaire.',
      dari: 'کارت خاکستری ثابت می‌کند که من مالک هستم.',
      pashto: 'د موټر کارت ثابتوي چې زه خاوند یم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '62',
    french: 'Amende',
    dari: 'جریمه',
    pashto: 'جریمه',
    definition: {
      french: 'Sanction financière pour infraction au code',
      dari: 'مجازات مالی برای تخلف از قوانین',
      pashto: 'د قانون د ماتولو لپاره مالي سزا'
    },
    category: 'Sanctions',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'J\'ai reçu une amende pour excès de vitesse.',
      dari: 'به دلیل تجاوز از سرعت جریمه گرفتم.',
      pashto: 'د سرعت د تیریدو له امله راته جریمه ورکړل شوه.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '63',
    french: 'Points de permis',
    dari: 'امتیازات گواهینامه',
    pashto: 'د جواز پوائنټونه',
    definition: {
      french: 'Système de points sur le permis de conduire',
      dari: 'سیستم امتیازات روی گواهینامه رانندگی',
      pashto: 'د موټر چلولو د جواز د پوائنټونو سیسټم'
    },
    category: 'Sanctions',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je peux perdre des points de permis.',
      dari: 'می‌توانم امتیازات گواهینامه را از دست بدهم.',
      pashto: 'زه کولی شم د جواز پوائنټونه له لاسه ورکړم.'
    },
    difficulty: 'advanced',
    isUnlocked: false
  },
  {
    id: '64',
    french: 'Suspension de permis',
    dari: 'تعلیق گواهینامه',
    pashto: 'د جواز ځنډول',
    definition: {
      french: 'Interdiction temporaire de conduire',
      dari: 'ممنوعیت موقت از رانندگی',
      pashto: 'د موټر چلولو لنډمهاله منع'
    },
    category: 'Sanctions',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Une infraction grave peut entraîner une suspension.',
      dari: 'تخلف شدید می‌تواند منجر به تعلیق شود.',
      pashto: 'دروند تخلف کولی شي د جواز ځنډول راولي.'
    },
    difficulty: 'advanced',
    isUnlocked: false
  },
  {
    id: '65',
    french: 'Alcool au volant',
    dari: 'الکل در رانندگی',
    pashto: 'د موټر چلولو پر مهال الکول',
    definition: {
      french: 'Conduite sous l\'influence de l\'alcool interdite',
      dari: 'رانندگی تحت تأثیر الکل ممنوع',
      pashto: 'د الکولو تر اغیزې لاندې موټر چلول منع'
    },
    category: 'Infractions graves',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'L\'alcool au volant est sévèrement puni.',
      dari: 'الکل در رانندگی به شدت مجازات می‌شود.',
      pashto: 'د موټر چلولو پر مهال الکول سخت سزا لري.'
    },
    difficulty: 'advanced',
    isUnlocked: false
  },
  {
    id: '66',
    french: 'Téléphone au volant',
    dari: 'تلفن در رانندگی',
    pashto: 'د موټر چلولو پر مهال ټیلیفون',
    definition: {
      french: 'Usage du téléphone portable interdit en conduisant',
      dari: 'استفاده از تلفن همراه در رانندگی ممنوع',
      pashto: 'د موټر د چلولو پر مهال د موبایل کارول منع'
    },
    category: 'Infractions',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je ne dois pas utiliser mon téléphone en conduisant.',
      dari: 'نباید در رانندگی از تلفن استفاده کنم.',
      pashto: 'زه نشم کولی د موټر د چلولو پر مهال ټیلیفون وکاروم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '67',
    french: 'Excès de vitesse',
    dari: 'تجاوز از سرعت',
    pashto: 'د سرعت تیریدل',
    definition: {
      french: 'Dépassement de la vitesse autorisée',
      dari: 'فراتر رفتن از سرعت مجاز',
      pashto: 'د اجازه ورکړل شوي سرعت څخه تیریدل'
    },
    category: 'Infractions',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'L\'excès de vitesse est dangereux et sanctionné.',
      dari: 'تجاوز از سرعت خطرناک است و مجازات دارد.',
      pashto: 'د سرعت تیریدل خطرناک دي او سزا لري.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '68',
    french: 'Refus de priorité',
    dari: 'عدم رعایت حق تقدم',
    pashto: 'د لومړیتوب نه منل',
    definition: {
      french: 'Non-respect des règles de priorité',
      dari: 'عدم رعایت قوانین حق تقدم',
      pashto: 'د لومړیتوب د قوانینو نه منل'
    },
    category: 'Infractions',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Le refus de priorité cause des accidents.',
      dari: 'عدم رعایت حق تقدم باعث تصادف می‌شود.',
      pashto: 'د لومړیتوب نه منل د پېښو لامل کیږي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '69',
    french: 'Feu rouge grillé',
    dari: 'عبور از چراغ قرمز',
    pashto: 'د سور څراغ تیریدل',
    definition: {
      french: 'Passage au feu rouge interdit',
      dari: 'عبور از چراغ قرمز ممنوع',
      pashto: 'د سور څراغ څخه تیریدل منع'
    },
    category: 'Infractions graves',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Griller un feu rouge est très dangereux.',
      dari: 'عبور از چراغ قرمز بسیار خطرناک است.',
      pashto: 'د سور څراغ تیریدل ډېر خطرناک دي.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  },
  {
    id: '70',
    french: 'Stationnement gênant',
    dari: 'پارک مزاحم',
    pashto: 'ستونزمن پارکول',
    definition: {
      french: 'Stationnement qui gêne la circulation',
      dari: 'پارک کردنی که مزاحم تردد است',
      pashto: 'هغه پارکول چې د تګ راتګ مخه نیسي'
    },
    category: 'Infractions',
    imageUrl: '/placeholder.svg?height=100&width=100',
    exampleSentences: {
      french: 'Je ne dois pas faire de stationnement gênant.',
      dari: 'نباید پارک مزاحم انجام دهم.',
      pashto: 'زه نشم کولی ستونزمن پارکول وکړم.'
    },
    difficulty: 'intermediate',
    isUnlocked: false
  }
];
