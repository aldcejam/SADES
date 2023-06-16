"use client"
import { useState } from "react"
import { InitCommunicationPageRegister } from "./@core/connection/initCommunication"
import { InitCommunicationModalSelectCategories } from "src/components/templates/modals/modalSelectCategories/@core/connection/initCommunication"
import { PageRegisterStatesModifiers } from "./@core/connection/modifiers"
import { UpdateSportsProps } from "./components/organisms/availableSports"
import VerifyIfCoursesAndSportsSelectedCorrectly from "./@core/utils/verifications/VerifyIfCoursesAndSportsSelectedCorrectly"
import { toast } from "react-toastify"
import { PageRegisterStatesConsumers } from "./@core/connection/consumers"

export const DisputaRegistrar_Logic = () => {
  //@core
  const { UpdateGenderCategory, UpdateSportCategory } = InitCommunicationPageRegister()
  const { UpdateSport } = PageRegisterStatesModifiers()
  const { coursesSelected, sportSelected,} = PageRegisterStatesConsumers()

  //modals
  const [modalSelectCategorysOpen, setModalSelectCategorysOpen] = useState(false)
  const [modalToConfigGame, setModalToConfigGame] = useState(false)

  //communication with modalSelectCategories
  const { UpdateSelectedSportData } = InitCommunicationModalSelectCategories({
    UpdateGenderCategory,
    UpdateSportCategory,
  })

  //connection with modalSelectCategories
  const UpdateSports = ({ sportName, sportUUID, genderCategories, sportCategories, maxNumberOfCourses, minNumberOfCourses }: UpdateSportsProps) => {
    UpdateSelectedSportData({
      sportName, sportUUID, genderCategories, sportCategories
    })
    UpdateSport({ sportName, sportUUID, maxNumberOfCourses, minNumberOfCourses })
  }

  //toggle modals
  const ToggleModalSelectCategories = () => {
    try {
      VerifyIfCoursesAndSportsSelectedCorrectly({
        coursesSelected,
        sportSelected
      });
      setModalSelectCategorysOpen(!modalSelectCategorysOpen)
    } catch (error: any) {
      toast.error(error.message.toString());
    }
  }
  const ToggleModalToConfigGame = () => {
    setModalToConfigGame(!modalToConfigGame)
  }
  

  return {
    modalSelectCategorysOpen,
    modalToConfigGame,
    UpdateSports,
    ToggleModalSelectCategories,
    ToggleModalToConfigGame,
  }
}
