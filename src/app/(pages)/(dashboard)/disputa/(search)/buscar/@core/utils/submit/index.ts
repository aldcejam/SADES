"use client"
import { Routes } from "@base-project/Routes"; 
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ManageCategories } from "../../application/categories/ManageCategories";
import { ManageSportSelected } from "../../application/sportSelected/ManageSportSelected";
import { VerifyIfCategoriesSelected } from "./verification";
import { ManageCourseSelected } from "../../application/courseSelected/ManageCourseSelected";

const Submit = () => {
  const { categories, UpdateGenderCategory, UpdateSportCategory } = ManageCategories();
  const { sportSelected, UpdateSportSelected } = ManageSportSelected();
  const { courseSelected, UpdateCourseSelected } = ManageCourseSelected();


  const router = useRouter();
  const applicationRoutes = Routes();

  const HandleSubmit = () => { 
    router.push(applicationRoutes.listarDisputa({
      curso:courseSelected,
      esporte: sportSelected.sportName,
      categoria_esportiva: categories.sportCategory,
      categoria_genero: categories.genderCategory
    }));
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
