import OptionsLogin from "../../molecules/AuthenticationModel/optionsLogin";
import Titles from "../../molecules/AuthenticationModel/titles";
import Form from "../../organisms/AuthenticationModel/form";
import { StyledAuthenticationTemplate } from "./styled";


const AuthenticationModel = () => {
    return (
        <StyledAuthenticationTemplate>
            <div className="content">
                <Titles />
                <Form />
                <OptionsLogin />
            </div>
        </StyledAuthenticationTemplate>
    )
}

export default AuthenticationModel