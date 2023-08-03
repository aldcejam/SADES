import React from 'react';
import AuthenticationModel from "./components/template/authenticationModel"
import LoginPresentation from "./components/template/displayDecorationLogin"
import styled from "./styled.module.scss"


export default function Page() {
    return (
        <div className={styled["container-login"]}>
            <div className={styled["page-login"]}>
                <LoginPresentation />
                <AuthenticationModel />
            </div>
        </div>
    )
}
