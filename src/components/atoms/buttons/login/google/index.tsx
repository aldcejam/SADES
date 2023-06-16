"use client"
import { StyledButtonLoginGoogle } from "./styled"
import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from "next-auth/react";


const ButtonLoginGoogle = () => {
    return(
        <StyledButtonLoginGoogle onClick={() => signIn()}>
            <GoogleIcon className="icon"/>
        </StyledButtonLoginGoogle>
    )

}

export default ButtonLoginGoogle