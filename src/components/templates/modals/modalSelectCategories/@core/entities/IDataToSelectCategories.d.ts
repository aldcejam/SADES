import { GenderOptionsProps } from "defaultTypes/GendersProps"; 

type SelectedSportDataProps = {
  sportUUID: string;
  sportName: string;
  sportCategories?: string[];
  genderCategories?: GenderOptionsProps[];
};

type SelectedCategoriesProps = {
  sportCategory?: string;
  genderCategory?: GenderOptionsProps;
};

interface IDataToSelectCategories {
  selectedSportData: SelectedSportDataProps;
  selectedCategories: SelectedCategoriesProps;
}

export {
  IDataToSelectCategories,
  SelectedSportDataProps,
  SelectedCategoriesProps,
};
