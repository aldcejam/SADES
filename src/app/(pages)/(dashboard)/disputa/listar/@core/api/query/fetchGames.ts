import { GameProps } from './GameProps';

type typegames = GameProps[];

export const games: typegames = [
  {
    id: 0,
    placar: [
      {
        course: 'eletro',
        logo: '/testes/time1.png',
        score: 2,
      },
      {
        course: 'adm',
        logo: '/testes/time3.png',
        score: 2,
      },
    ],
    specification: {
      date: new Date(2022, 9, 1),
      situation: 'pre-cadastrada',
    },
  },
  {
    id: 1,
    placar: [
      {
        course: 'info',
        logo: '/testes/time3.png',
        score: 2,
      },
      {
        course: 'eletro',
        logo: '/testes/time3.png',
        score: 2,
      },
      {
        course: 'adm',
        logo: '/testes/time3.png',
        score: 2,
      },
      {
        course: 'fis',
        logo: '/testes/time3.png',
        score: 2,
      },
      {
        course: 'ener',
        logo: '/testes/time3.png',
        score: 2,
      },
    ],
    specification: {
      date: new Date(2022, 16, 2),
      situation: 'finalizada',
    },
  },
  {
    id: 2,
    placar: [
      {
        course: 'info',
        logo: '/testes/time3.png',
        score: 2,
      },
      {
        course: 'adm',
        logo: '/testes/time2.png',
        score: 2,
      },
    ],
    specification: {
      date: new Date(2022, 9, 3),
      situation: 'andamento',
    },
  },
  {
    id: 3,
    placar: [
      {
        course: 'info',
        logo: '/testes/time3.png',
        score: 2,
      },
      {
        course: 'adm',
        logo: '/testes/time2.png',
        score: 2,
      },
    ],
    specification: {
      date: new Date(2022, 9, 4),
      situation: 'andamento',
    },
  },
  {
    id: 4,
    placar: [
      {
        course: 'info',
        logo: '/testes/time3.png',
        score: 2,
      },
      {
        course: 'adm',
        logo: '/testes/time2.png',
        score: 2,
      },
    ],
    specification: {
      date: new Date(2022, 9, 5),
      situation: 'andamento',
    },
  },
  {
    id: 5,
    placar: [
      {
        course: 'info',
        logo: '/testes/time3.png',
        score: 2,
      },
      {
        course: 'adm',
        logo: '/testes/time2.png',
        score: 2,
      },
    ],
    specification: {
      date: new Date(2022, 9, 6),
      situation: 'andamento',
    },
  },
];
