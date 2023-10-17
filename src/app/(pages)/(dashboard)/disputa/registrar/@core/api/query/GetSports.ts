import { GenderOptionsProps } from 'defaultTypes/GendersProps';

type SportsProps = {
  uuid: string;
  sportName: string;
  sportCategories: string[] | undefined;
  genderCategories: GenderOptionsProps[];
  minNumberOfCourses: number;
  maxNumberOfCourses: number;
};

const GetSports: Array<SportsProps> = [
  {
    uuid: '0',
    sportName: 'futsal',
    sportCategories: undefined,
    genderCategories: ['female', 'male'],
    minNumberOfCourses: 2,
    maxNumberOfCourses: 2,
  },
  {
    uuid: '1',
    sportName: 'vôlei',
    sportCategories: ['areia', 'quadra'],
    genderCategories: ['female', 'male', 'mixed'],
    minNumberOfCourses: 2,
    maxNumberOfCourses: 2,
  },
  {
    uuid: '2',
    sportName: 'Natação',
    sportCategories: ['25m', '50m', 'revezamento'],
    genderCategories: ['female', 'male', 'mixed'],
    minNumberOfCourses: 3,
    maxNumberOfCourses: 99,
  },
  {
    uuid: '3',
    sportName: 'basquete',
    sportCategories: undefined,
    genderCategories: ['female', 'male'],
    minNumberOfCourses: 2,
    maxNumberOfCourses: 99,
  },
  {
    uuid: '4',
    sportName: 'xadrex',
    sportCategories: undefined,
    genderCategories: ['mixed'],
    minNumberOfCourses: 2,
    maxNumberOfCourses: 2,
  },
  {
    uuid: '5',
    sportName: 'Handball',
    sportCategories: undefined,
    genderCategories: ['female', 'male'],
    minNumberOfCourses: 2,
    maxNumberOfCourses: 2,
  },
  {
    uuid: '6',
    sportName: 'ping pong',
    sportCategories: undefined,
    genderCategories: ['mixed'],
    minNumberOfCourses: 2,
    maxNumberOfCourses: 2,
  },
  {
    uuid: '7',
    sportName: 'cabo de guerra',
    sportCategories: undefined,
    genderCategories: ['mixed'],
    minNumberOfCourses: 2,
    maxNumberOfCourses: 2,
  },
];

export { type SportsProps, GetSports };
