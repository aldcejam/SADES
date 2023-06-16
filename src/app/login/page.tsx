import React from 'react';
import AuthenticationModel from "./components/template/authenticationModel"
import LoginPresentation from "./components/template/displayDecorationLogin"
import { StyledLogin, ContainerLogin } from "./styled"


export default function Page() {
    return (
        <ContainerLogin>
            <StyledLogin>
                <LoginPresentation />
                <AuthenticationModel />
            </StyledLogin>
        </ContainerLogin>
    )
}
