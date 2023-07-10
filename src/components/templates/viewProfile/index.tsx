import { memo } from "react"
import DimontPolygon from "@base-project/public/Polygon/DimontPolygon"
import Content from "components/organisms/viewProfile/content"
import styled from "./styled.module.scss"
import "./styled.scss"

type TypesViewProfileComponent = {
    screen: 'profileUser' | 'viewFriend'
}

const ViewProfileComponent = ({ screen }: TypesViewProfileComponent) => {
    return (
        <div className={styled["view-profile"]}>
            <DimontPolygon />
            <Content />
        </div>

    )
}

export const ViewProfile = memo(ViewProfileComponent)