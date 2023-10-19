import { GenderOptionsProps } from 'defaultTypes/GendersProps';

type CourseSelectedProps = string;

type CategoriesProps = {
  sportCategory?: string;
  genderCategory?: GenderOptionsProps;
};

type SportSelectedProps = {
  sportUUID: string;
  sportName: string;
  sportCategories?: string[];
  genderCategories?: GenderOptionsProps[];
};

interface IDataForBuscarDisputa {
  courseSelected: CourseSelectedProps;
  sportSelected: SportSelectedProps;
  categories: CategoriesProps;
}

export {
  IDataForBuscarDisputa,
  CategoriesProps,
  SportSelectedProps,
  CourseSelectedProps,
};
