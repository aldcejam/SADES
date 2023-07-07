import Image from "next/image"
import styled from "./styled.module.scss"

const ProfilePic = () => {
    return (
        <div className={`${styled["profile-pic"]} profile-pic-size`}>
            <div>
                <Image alt="imagem do usuario" src={'/profile-image.jpg'} fill={true} />
            </div>
        </div>
    )
}

export default ProfilePic