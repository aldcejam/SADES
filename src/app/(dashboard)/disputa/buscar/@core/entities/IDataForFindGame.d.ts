import { GenderOptionsProps } from "defaultTypes/GendersProps";

type CategoriesProps = {
  sportCategory?: string;
  genderCategory?: GenderOptionsProps;
};

type SportSelectedProps = {
  sportUUID: string;
  sportName: string;
  sportCategories?: string[];
  genderCategories?: GenderOptionsProps[];
}

interface IDataForFindGame {
  sportSelected: SportSelectedProps
  categories: CategoriesProps;
}

export { IDataForFindGame, CategoriesProps, SportSelectedProps };
