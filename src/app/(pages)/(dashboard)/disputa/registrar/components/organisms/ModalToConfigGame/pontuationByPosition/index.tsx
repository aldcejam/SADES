import { ComponentProps } from "react"
import SelectPontuations from "../../../atoms/modalToConfigGame/SelectPontuations"
import Pontuation from "../../../molecules/ModalToConfigGame/pontuation"

interface PontuationByPositionProps extends ComponentProps<"div"> { }

const PontuationByPosition = ({ ...props }: PontuationByPositionProps) => {

    return (
        <div
            {...props}
        >
            <SelectPontuations />
            <Pontuation />
        </div>
    )
}

export default PontuationByPosition