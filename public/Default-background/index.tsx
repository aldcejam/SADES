"use client"
import { BottomLeft } from "./shapes/bottom-left"
import { BottomRight } from "./shapes/bottom-right"
import { TopLeft } from "./shapes/top-left"
import { TopRight } from "./shapes/top-right"
import { StyledBackgroundPage, ContainerBackgroundPage} from "./Styled"

type DefaultBackgroundProps = {
    className?: string
}
const DefaultBackground = ({className}: DefaultBackgroundProps) => {
    return (
        <ContainerBackgroundPage >
            <StyledBackgroundPage className={className}>
                <TopLeft/>
                <TopRight/>
                <BottomRight/>
                <BottomLeft/>
            </StyledBackgroundPage>
        </ContainerBackgroundPage>

    )
}

export default DefaultBackground
