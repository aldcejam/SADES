import Image from "next/image"
import { StyleProfilePic } from "./styled"

const ProfilePic = () => {
    return (
        <StyleProfilePic className="profile-pic-size">
            <div>
                <Image alt="imagem do usuario" src={'/profile-image.jpg'} fill={true} />
            </div>
        </StyleProfilePic>
    )
}

export default ProfilePic