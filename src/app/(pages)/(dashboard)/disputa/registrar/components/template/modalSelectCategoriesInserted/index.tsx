"use client"
import { ModalSelectCategories } from "components/templates/modals/modalSelectCategories"
import { PageDisputaRegistrarConnection } from "app/(pages)/(dashboard)/disputa/registrar/@core/connection"
  
type ModalSelectCategoriesInsertedProps = {
    modalSelectCategories: boolean
    ToggleModalSelectCategories: () => void
    ToggleModalToConfigGame: () => void
}

export const ModalSelectCategoriesInserted = ({ ToggleModalToConfigGame, ToggleModalSelectCategories, modalSelectCategories }: ModalSelectCategoriesInsertedProps) => {

    const { sportAndCourseSelected, genderAndSportCategorySelected } = PageDisputaRegistrarConnection()

    const { sportCategorySelected, genderCategorySelected } = genderAndSportCategorySelected

    const { sportSelected } = sportAndCourseSelected
 
    return (
        <ModalSelectCategories.Root
            ToggleModal={ToggleModalSelectCategories}
            isModalOpen={modalSelectCategories}
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
                Submit={ToggleModalToConfigGame}
            />
        </ModalSelectCategories.Root>
    )
}