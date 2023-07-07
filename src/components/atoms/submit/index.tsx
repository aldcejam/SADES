import styled from "./styled.module.scss"

type SubmitButtonProps = {
    value: string
    Submit?: () => void
    type?: "submit"
}


const SubmitButton = ({ value, Submit, type }: SubmitButtonProps) => {

    return (
        <div className={`${styled["submit-button"]} submit-button`}>
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