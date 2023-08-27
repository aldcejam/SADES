"use client"
import { ModalSelectCategories } from "components/templates/modals/modalSelectCategories"
import { PageDisputaBuscarConnection } from "../../../@core/connection"
import { usePageBuscarDisputa } from "../../../context"

const ModalSelectCategoriesInserted = () => {

    const {
        sportSelected,
        genderAndSportCategorySelected,
        Submit,
    } = PageDisputaBuscarConnection()

    const { genderCategorySelected, sportCategorySelected } = genderAndSportCategorySelected

    const { modalSelectCategories } = usePageBuscarDisputa()

    return (
        <ModalSelectCategories.Root
            ToggleModal={modalSelectCategories.ToggleModal}
            isModalOpen={modalSelectCategories.modalIsOpen}
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
                Submit={Submit()}
            />
        </ModalSelectCategories.Root>
    )
}

export { ModalSelectCategoriesInserted }