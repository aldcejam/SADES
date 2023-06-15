import { Dayjs } from "dayjs";
import { GenderOptionsProps } from "defaultTypes/GendersProps";

export type CoursesSelectedProps = { uuid: string; name: string, shortName: string, logo: string };
export type SportSelectedProps = {
  sportUUID: string;
  sportName: string
  minNumberOfCourses: number;
  maxNumberOfCourses: number;
};
export type PontuationByPositionsProps = Array<number>;
export type SituationsProps = "em andamento" | "pre-cadastrado";
export type DateProps = string | null;
export type SportCategoryProps = string;
export type GenderCategoryProps = GenderOptionsProps;

type IDataForGameRegistration = {
  coursesSelected: Array<CoursesSelectedProps>;
  sportSelected: SportSelectedProps;
  sportCategory: SportCategoryProps;
  genderCategory: GenderCategoryProps;
  date: DateProps;
  pontuationbyPositions: PontuationByPositionsProps;
  situation: SituationsProps;
};

export { IDataForGameRegistration };

