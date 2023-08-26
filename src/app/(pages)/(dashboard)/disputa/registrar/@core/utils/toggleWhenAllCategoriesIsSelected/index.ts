import { toast } from "react-toastify";
import { VerifyIfCategoriesSelected } from "./verification";
import { PageDisputaRegistrarConnection } from "../../connection";

interface ToggleWhenAllCategoriesIsSelectedProps {
    state: boolean
    setState: (state: boolean) => void 
}

const ToggleWhenAllCategoriesIsSelected = ({
    state,
    setState
}: ToggleWhenAllCategoriesIsSelectedProps) => {

    const { sportAndCourseSelected, genderAndSportCategorySelected } = PageDisputaRegistrarConnection()
    const { sportCategorySelected, genderCategorySelected } = genderAndSportCategorySelected
    const { sportSelected } = sportAndCourseSelected

    return () => {
        if(state){
            setState(false)
        }
        else{
            try {
                VerifyIfCategoriesSelected({
                    genderCategorySelected,
                    sportCategorySelected,
                    sportSelected
                });
            setState(true)
            } catch(error: any) {
                toast.error(error.message.toString());
            }
        }
    }
}

export { ToggleWhenAllCategoriesIsSelected }