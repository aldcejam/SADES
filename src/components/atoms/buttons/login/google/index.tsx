"use client"
import styled from "./styled.module.scss"
import GoogleIcon from '@mui/icons-material/Google';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import { toast } from "react-toastify";

const ButtonLoginGoogle = () => {

    const { status } = useSession()
    const { push } = useRouter()

    const HandleSignIn = () => {
        switch (status) {
            case ("authenticated"):
                push("/")
                toast.warning("você já está conectado com o Google")
                break;
            case ("loading"):
                toast.info("você já está conectado com o Google")
                break;
            case ("unauthenticated"):
                signIn()
                break;
        }

    }

    return (
        <div className={styled["button-login-google"]} onClick={() => HandleSignIn()}>
            <GoogleIcon className={styled["icon"]} />
        </div>
    )

}

export default ButtonLoginGoogle