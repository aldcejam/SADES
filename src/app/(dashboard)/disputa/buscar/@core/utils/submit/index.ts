import { useRouter } from "next/navigation";
import { ManageCategories } from "../../application/categories/ManageCategories";
import { Verifications } from "./Verifications";
import { Routes } from "@base-project/Routes";
import { ManageSportSelected } from "../../application/sportSelected/ManageSportSelected";
import { toast } from "react-toastify";

const Submit = () => {
  const { categories } = ManageCategories();
  const { sportSelected } = ManageSportSelected();

  const router = useRouter();

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
      Verifications({
        categories,
        sportSelected,
      });
      HandleSubmit();
    } catch (error: any) {
      toast.error(error.message.toString());
    }
  }
};

export { Submit };
