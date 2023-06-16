import ButtonLoginGoogle from "src/components/atoms/buttons/login/google"
import ButtonLoginSuap from "src/components/atoms/buttons/login/suap"
import { StyledOptionsLogin } from "./styled"

const OptionsLogin = () => {
    return (
        <StyledOptionsLogin>
            <div className="title">
                <p>Conecte-se com:</p>
            </div>
            <div className="account-options">
                <ButtonLoginGoogle/>
                <ButtonLoginSuap/>
            </div>
        </StyledOptionsLogin>
    )
}

export default OptionsLogin