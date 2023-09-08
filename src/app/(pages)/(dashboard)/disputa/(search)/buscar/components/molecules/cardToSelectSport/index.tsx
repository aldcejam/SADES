import styled from "./styled.module.scss"
import { ReactComponentElement, ComponentProps } from "react"

interface CardToSelectSportProps extends ComponentProps<"button"> {
    sport: string;
    illustration: ReactComponentElement<any>;
}
const CardToSelectSport = ({ illustration, sport, ...props }: CardToSelectSportProps) => {
    return (
        <button
            {...props}
            id={styled["button"]}>
            {illustration}
            <div className={styled["footer"]}> 
                <p>
                    {sport}
                </p> 
            </div>
        </button>
    )
}

export { CardToSelectSport }