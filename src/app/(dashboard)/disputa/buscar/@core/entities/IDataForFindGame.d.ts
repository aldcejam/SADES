type CategoriesProps = {
  sportCategory?: string;
  genderCategory?: GenderOptionsProps;
};

type SportProps = {
  sportName: string;
  uuid: string;
}

interface IDataForFindGame {
  sport: sportProps
  categories: CategoriesProps;
}

export { IDataForFindGame, CategoriesProps, SportProps };
