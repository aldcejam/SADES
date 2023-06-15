import { StyledCardIllustration } from "./styled"

type CardIllustrationProps = {
    illustration: any
}
const CardIllustration = ({ illustration }: CardIllustrationProps) => {
    return (
        <StyledCardIllustration>
            {illustration}
        </StyledCardIllustration>
    )
}

export default CardIllustration