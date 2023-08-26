"use client"
import { Routes } from "@base-project/Routes";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ParametersToBuscarDisputaProps } from "../../../page";
import { ManageCategories } from "../../application/categories/ManageCategories";
import { ManageSportSelected } from "../../application/sportSelected/ManageSportSelected";
import { VerifyIfCategoriesSelected } from "./verification";

const Submit = () => {
  const { categories, UpdateGenderCategory, UpdateSportCategory } = ManageCategories();
  const { sportSelected, UpdateSportSelected } = ManageSportSelected();

  const dataForToSearchSTRING = Cookies.get('ParametersToBuscarDisputa') as string
  const dataForToSearchJSON = JSON.parse(dataForToSearchSTRING) as ParametersToBuscarDisputaProps

  let searchData: ParametersToBuscarDisputaProps = {
    course: dataForToSearchJSON.course,
    sport: sportSelected.sportName,
  }

  categories.sportCategory ?
    searchData = {
      ...searchData,
      sportCategory: categories.sportCategory
    }
    : null

  categories.genderCategory ?
    searchData = {
      ...searchData,
      genderCategory: categories.genderCategory
    }
    : null

  const router = useRouter();
  const HandleSubmit = () => {
    console.log(searchData)
    Cookies.set('ParametersToBuscarDisputa', JSON.stringify(searchData))
    router.push(Routes.listarDisputa);
  };

  return () => {
    try {
      VerifyIfCategoriesSelected({
        sportSelected: {
          value: sportSelected,
          Update: UpdateSportSelected
        },
        sportCategorySelected: {
          value: categories.sportCategory,
          Update: UpdateSportCategory
        },
        genderCategorySelected: {
          value: categories.genderCategory,
          Update: UpdateGenderCategory
        }
      });
      HandleSubmit();
    } catch (error: any) {
      toast.error(error.message.toString());
    }
  }

};

export { Submit };
