import Image from "next/image"
import ContainerProfilePic from "public/Polygon/ContainerProfilePic"
import { StyledButtonRedirectPerfil } from "./styled"

const ButtonRedirectPerfil = () => {
    return (
        <StyledButtonRedirectPerfil>
            <div className="image">
                <Image 
                alt="imagem do perfil"
                src={'/profile-image.jpg'} 
                fill 
                sizes="40px"
                />
            </div>
            <div className="mask">
                <ContainerProfilePic />
            </div>
        </StyledButtonRedirectPerfil>
    )
}

export default ButtonRedirectPerfil

