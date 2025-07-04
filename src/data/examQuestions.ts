import { ExamQuestion } from '../types/exam';

export const examQuestions: ExamQuestion[] = [
  {
    id: '1',
    question: 'Que signifie un panneau STOP ?',
    options: [
      'Ralentir et continuer',
      'S\'arrêter complètement puis repartir si la voie est libre',
      'Céder le passage',
      'Stationnement autorisé'
    ],
    correctIndex: 1
  },
  {
    id: '2',
    question: 'Quelle est la vitesse maximale en agglomération en France ?',
    options: ['30 km/h', '50 km/h', '90 km/h', '110 km/h'],
    correctIndex: 1
  },
  {
    id: '3',
    question: 'Pour dépasser un véhicule en France, on doit le faire par…',
    options: ['la droite', 'la gauche'],
    correctIndex: 1
  },
  {
    id: '4',
    question: 'Que devez-vous faire avant de changer de voie ?',
    options: [
      'Mettre le clignotant',
      'Klaxonner',
      'Accélérer fortement',
      'Ralentir jusqu\'à 20 km/h'
    ],
    correctIndex: 0
  },
  {
    id: '5',
    question: 'Un feu vert clignotant indique…',
    options: [
      'Priorité à droite',
      'Passage piéton imminent',
      'Feu en panne',
      'Changement de voie obligatoire'
    ],
    correctIndex: 1
  }
];
