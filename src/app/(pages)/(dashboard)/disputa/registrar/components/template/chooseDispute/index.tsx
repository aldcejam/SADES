import SubmitButton from "components/atoms/submit"
import AvailableSports from "../../organisms/availableSports"
import styled from "./styled.module.scss"
import AvailableCourses from "../../organisms/availableCourses"

type ChooseDisputeProps = {
    Submit: () => void
}
const ChooseDispute = ({ Submit }: ChooseDisputeProps) => {
    return (
        <div className={styled["choose-dispute"]}>
            <AvailableCourses />
            <AvailableSports />
            <SubmitButton
                Submit={() => Submit()}
                value="Selecionar categorias" />
        </div>
    )
}

export default ChooseDispute