import { StyedHoverSportButton } from "./styled"

type HoverSportButtonProps = {
    nameButton: string
}
const HoverSportButton = ({ nameButton }: HoverSportButtonProps) => {
    return (
        <StyedHoverSportButton>
            <span>
                {nameButton}
            </span>
        </StyedHoverSportButton>
    )
}

export default HoverSportButton