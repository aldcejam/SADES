"use client"
import styled from "./styled.module.scss"
import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from "next-auth/react";


const ButtonLoginGoogle = () => {
    return (
        <div className={styled["button-login-google"]} onClick={() => signIn()}>
            <GoogleIcon className={styled["icon"]} />
        </div>
    )

}

export default ButtonLoginGoogle