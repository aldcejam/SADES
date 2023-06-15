"use client"
import { toast } from "react-toastify";
import { ManageSelectedCategories } from "../../application/selectedCategories/ManageSelectedCategories";
import { ManageSelectedSportData } from "../../application/selectedSportData/ManageSelectedSportData";
import { Verifications } from "./Verifications";

const Submit = (SubmitRedirect: () => void) => {
  const { selectedCategories } = ManageSelectedCategories();
  const { selectedSportData } = ManageSelectedSportData();

  return () => {
    try {
      Verifications({ selectedSportData, selectedCategories });
      SubmitRedirect();
    } catch (error: any) {
      toast.error(error.message.toString());
      console.error(error.message.toString());
    }
  };
};

export { Submit };
