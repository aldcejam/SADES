import { StyledSubmitButton } from "./styled"

type SubmitButtonProps = {
    value: string
    Submit?: () => void
    type?: "submit"
}


const SubmitButton = ({ value, Submit, type }: SubmitButtonProps) => {

    return (
        <StyledSubmitButton className="submit-button">
            <div>
                <button
                    type={type}
                    onClick={() => Submit ? Submit() : ""}
                >{value}
                </button>
            </div>
        </StyledSubmitButton>
    )
}

export default SubmitButton