import SubmitButton from "components/atoms/submit"
import AvailableSports, { UpdateSportsProps } from "../../organisms/availableSports"
import styled from "./styled.module.scss"
import AvailableCourses from "../../organisms/availableCourses" 
 
type ChooseDisputeProps = {
    UpdateSelectedSportData: (sport: UpdateSportsProps) => void
    Submit: () => void
}
const ChooseDispute = ({UpdateSelectedSportData,Submit}: ChooseDisputeProps) => {
    return (
        <div className={styled["choose-dispute"]}>
            <AvailableCourses />
            <AvailableSports UpdateSport={UpdateSelectedSportData} />
            <SubmitButton
                Submit={() => Submit()}
                value="Selecionar categorias" />
        </div>
    )
}

export default ChooseDispute