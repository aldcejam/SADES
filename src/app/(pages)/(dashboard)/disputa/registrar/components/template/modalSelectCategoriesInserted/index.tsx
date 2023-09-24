"use client"
import { ModalSelectCategories } from "components/templates/modals/modalSelectCategories"
import { PageDisputaRegistrarConnection } from "app/(pages)/(dashboard)/disputa/registrar/@core/connection"
import { usePageRegistrarDisputa } from "../../../context"


export const ModalSelectCategoriesInserted = () => {

    const { sportAndCourseSelected, genderAndSportCategorySelected } = PageDisputaRegistrarConnection()
    const { sportCategorySelected, genderCategorySelected } = genderAndSportCategorySelected
    const { sportSelected } = sportAndCourseSelected

    const { modalSelectCategories, modalToConfigGame } = usePageRegistrarDisputa()

    return (
        <ModalSelectCategories.Root
            modal={modalSelectCategories}
            sportName={sportSelected.value.sportName}
        >
            {
                sportSelected.value.sportCategories ?
                    <ModalSelectCategories.SportCategories
                        sportCategories={sportSelected.value.sportCategories}
                        sportCategorySelected={sportCategorySelected.value}
                        updateSportCategorySelected={sportCategorySelected.Update}
                    /> : null
            }
            {
                sportSelected.value.genderCategories ?
                    <ModalSelectCategories.GenderOptions
                        genderCategorySelected={genderCategorySelected.value}
                        updateGenderCategorySelected={genderCategorySelected.Update}
                        genderCategories={sportSelected.value.genderCategories}
                    /> : null
            }
            <ModalSelectCategories.SubmitButton
                value='Prosseguir'
                Submit={modalToConfigGame.Toggle}
            />
        </ModalSelectCategories.Root>
    )
}