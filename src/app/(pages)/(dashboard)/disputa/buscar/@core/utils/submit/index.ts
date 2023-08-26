import { useRouter } from "next/navigation";
import { ManageCategories } from "../../application/categories/ManageCategories";
import { VerifyIfCategoriesSelected } from "./verification";
import { Routes } from "@base-project/Routes";
import { ManageSportSelected } from "../../application/sportSelected/ManageSportSelected";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Submit = () => {
  const { categories, UpdateGenderCategory, UpdateSportCategory } = ManageCategories();
  const { sportSelected, UpdateSportSelected } = ManageSportSelected();

  const router = useRouter();
/*   Cookies.set('name', 'value') */
  const HandleSubmit = () => {
    let queryParams = ``;
    queryParams += `sportSelected=${encodeURIComponent(
      sportSelected.sportName
    )}&`;

    if (categories.sportCategory) {
      queryParams += `sportCategory=${encodeURIComponent(
        categories.sportCategory
      )}&`;
    }

    if (categories.genderCategory) {
      queryParams += `genderCategory=${encodeURIComponent(
        categories.genderCategory
      )}`;
    }

    const url = `${Routes.gameList}?${queryParams}`;
    router.push(url);
  };

  return () => {
    try {
      VerifyIfCategoriesSelected({
        sportCategorySelected: {
          value: categories.sportCategory,
          Update: UpdateSportCategory
        },
        genderCategorySelected: {
          value: categories.genderCategory,
          Update: UpdateGenderCategory
        },
        sportSelected: {
          value: sportSelected,
          Update: UpdateSportSelected
        }
      });
      HandleSubmit();
    } catch (error: any) {
      toast.error(error.message.toString());
    }
  }
};

export { Submit };
