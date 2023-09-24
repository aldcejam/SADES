import { ComponentProps } from "react"
import styled from "./styled.module.scss"

type SubmitButtonProps = ComponentProps<"div"> & {
    value: string
    Submit?: () => void
    type?: "submit"
}


const SubmitButton = ({ value, Submit, type, ...props }: SubmitButtonProps) => {

    return (
        <div
            {...props}
            id={styled["submit-button"]}>
            <div>
                <button
                    type={type}
                    onClick={() => Submit ? Submit() : ""}
                >{value}
                </button>
            </div>
        </div>
    )
}

export default SubmitButton