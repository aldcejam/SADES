import { memo } from "react"
import DimontPolygon from "public/Polygon/DimontPolygon"
import Content from "src/components/organisms/viewProfile/content"
import { StyledViewProfile } from "./styled"

type TypesViewProfileComponent = {
    screen: 'profileUser' | 'viewFriend'
}

const ViewProfileComponent = ({ screen }: TypesViewProfileComponent) => {
    return (
        <StyledViewProfile>
            <DimontPolygon />
            <Content/>
        </StyledViewProfile>

    )
}

export const ViewProfile = memo(ViewProfileComponent)