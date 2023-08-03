"use client"
import { useState } from "react"
import { InitCommunicationPageRegister } from "./@core/connection/initCommunication"
import { toast } from "react-toastify"
import { PageRegisterStatesConsumers } from "./@core/connection/consumers"
import VerifyIfCoursesAndSportsSelectedCorrectly from "./@core/utils/verifications/VerifyIfCoursesAndSportsSelectedCorrectly"

export const DisputaRegistrar_Logic = () => {
  //@core
  const { genderCategorySelected, sportCategorySelected, sportSelected, VerifyIfCategoriesSelected } = InitCommunicationPageRegister()
  const { coursesSelected } = PageRegisterStatesConsumers()

  //modals
  const [modalSelectCategoriesOpen, setModalSelectCategoriesOpen] = useState(false)
  const [modalToConfigGame, setModalToConfigGame] = useState(false)

  //toggle modals
  const ToggleModalSelectCategories = () => {
    try {
      VerifyIfCoursesAndSportsSelectedCorrectly({
        coursesSelected,
        sportSelected: sportSelected.value
      });
      setModalSelectCategoriesOpen(!modalSelectCategoriesOpen)
    } catch (error: any) {
      toast.error(error.message.toString());
    }
  }
  const ToggleModalToConfigGame = () => {
    try {
      VerifyIfCategoriesSelected({
        categories: {
          genderCategory: genderCategorySelected.value,
          sportCategory: sportCategorySelected.value,
        },
        sportSelected: sportSelected.value,
      });
      setModalToConfigGame(!modalToConfigGame)
    } catch (error: any) {
      toast.error(error.message.toString());
    }
  }


  return {
    modalSelectCategoriesOpen,
    modalToConfigGame,
    ToggleModalSelectCategories,
    ToggleModalToConfigGame,
    sportSelected,
    sportCategorySelected,
    genderCategorySelected
  }
}
