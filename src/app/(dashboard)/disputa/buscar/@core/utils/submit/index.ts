import { useRouter } from "next/navigation";
import { ManageCategories } from "../../application/categories/ManageCategories";
import { Verifications } from "./Verifications";
import { Routes } from "@base-project/Routes";
import { ManageSport } from "../../application/sport/ManageSport";

const Submit = () => {
  const { categories } = ManageCategories();
  const { sport } = ManageSport();

  const router = useRouter(); 
  
  const HandleSubmit = () => {
    let queryParams = ``;
    queryParams += `sportSelected=${encodeURIComponent(
      sport.sportName
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
      HandleSubmit();
      Verifications(categories);
    } catch (error: any) {
      console.error(error.message);
    }
  };
};

export { Submit };
