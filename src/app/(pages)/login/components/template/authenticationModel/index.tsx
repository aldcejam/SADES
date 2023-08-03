import OptionsLogin from "../../molecules/AuthenticationModel/optionsLogin";
import Titles from "../../molecules/AuthenticationModel/titles";
import Form from "../../organisms/AuthenticationModel/form";
import styled from "./styled.module.scss";


const AuthenticationModel = () => {
    return (
        <div className={styled["authentication-model"]}>
            <div className={styled["content"]}>
                <Titles />
                <Form />
                <OptionsLogin />
            </div>
        </div>
    )
}

export default AuthenticationModel