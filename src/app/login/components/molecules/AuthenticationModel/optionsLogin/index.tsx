import ButtonLoginGoogle from "components/atoms/buttons/login/google"
import ButtonLoginSuap from "components/atoms/buttons/login/suap"
import styled from "./styled.module.scss"

const OptionsLogin = () => {
    return (
        <div className={styled["options-login"]}>
            <div className={styled["title"]}>
                <p>Conecte-se com:</p>
            </div>
            <div className={styled["account-options"]}>
                <ButtonLoginGoogle/>
                <ButtonLoginSuap/>
            </div>
        </div>
    )
}

export default OptionsLogin