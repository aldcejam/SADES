import { toast } from 'react-toastify';
import { VerifyIfCategoriesSelected } from './verification';
import { ManageSportSelected } from '../../application/sportSelected/ManageSportSelected';
import { ManageCategories } from '../../application/categories/ManageCategories';

interface ToggleWhenAllCategoriesIsSelectedProps {
  state: boolean;
  setState: (state: boolean) => void;
}

const ToggleWhenAllCategoriesIsSelected = ({
  state,
  setState,
}: ToggleWhenAllCategoriesIsSelectedProps) => {
  const { sportSelected, UpdateSportSelected } = ManageSportSelected();
  const { categories, UpdateGenderCategory, UpdateSportCategory } =
    ManageCategories();

  return () => {
    if (state) {
      setState(false);
    } else {
      try {
        VerifyIfCategoriesSelected({
          genderCategorySelected: {
            value: categories.genderCategory,
            Update: UpdateGenderCategory,
          },
          sportCategorySelected: {
            value: categories.sportCategory,
            Update: UpdateSportCategory,
          },
          sportSelected: {
            value: sportSelected,
            Update: UpdateSportSelected,
          },
        });
        setState(true);
      } catch (error: any) {
        toast.error(error.message.toString());
      }
    }
  };
};

export { ToggleWhenAllCategoriesIsSelected };
