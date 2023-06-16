import SubmitButton from "src/components/atoms/submit"
import AvailableSports, { UpdateSportsProps } from "../../organisms/availableSports"
import { StyledChooseDispute } from "./styled"
import AvailableCourses from "../../organisms/availableCourses" 
 
type ChooseDisputeProps = {
    UpdateSelectedSportData: (sport: UpdateSportsProps) => void
    Submit: () => void
}
const ChooseDispute = ({UpdateSelectedSportData,Submit}: ChooseDisputeProps) => {
    return (
        <StyledChooseDispute>
            <AvailableCourses />
            <AvailableSports UpdateSport={UpdateSelectedSportData} />
            <SubmitButton
                Submit={() => Submit()}
                value="Selecionar categorias" />
        </StyledChooseDispute>
    )
}

export default ChooseDispute