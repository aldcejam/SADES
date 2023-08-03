import { Dayjs } from "dayjs";
import { GenderOptionsProps } from "defaultTypes/GendersProps";

export type CoursesSelectedProps = { uuid: string; name: string, shortName: string, logo: string };
export type SportSelectedProps = {
  sportUUID: string;
  sportName: string
  minNumberOfCourses: number;
  maxNumberOfCourses: number;
  sportCategories?: string[];
  genderCategories?: GenderOptionsProps[];
};
export type PontuationByPositionsProps = Array<number>;
export type SituationsProps = "em andamento" | "pre-cadastrado";
export type DateProps = string | null;
export type CategoriesProps = {
  sportCategory?: string;
  genderCategory?: GenderOptionsProps;
};

type IDataForRegistrarDisputa = {
  categories: CategoriesProps;
  coursesSelected: Array<CoursesSelectedProps>;
  sportSelected: SportSelectedProps;
  date: DateProps;
  pontuationbyPositions: PontuationByPositionsProps;
  situation: SituationsProps;
};

export { IDataForRegistrarDisputa };

