"use client"
import { BottomLeft } from "./shapes/bottom-left"
import { BottomRight } from "./shapes/bottom-right"
import { TopLeft } from "./shapes/top-left"
import { TopRight } from "./shapes/top-right"
import "./styled.scss"
import { usePathname } from 'next/navigation'

const DefaultBackground = () => {

    return (
        <div className="container-background-page">
            <div 
            data-page={usePathname()}
            className="background-page">
                <TopLeft />
                <TopRight />
                <BottomRight />
                <BottomLeft />
            </div>
        </div>

    )
}

export default DefaultBackground
