import InstagramIcon from "public/Icons/social-midias/InstagramIcon"
import TwitterIcon from "public/Icons/social-midias/TwitterIcon"
import styled from "./styled.module.scss" 

type SocialMidiasProps = {
    instagram: string,
    twitter: string,
}

const SocialMidias = ({ instagram, twitter }: SocialMidiasProps) => {
    return (
        <div className={styled["social-midias"]}>
            <div className={styled["social-midias--twitter"]}>
                <TwitterIcon />
                <p>{twitter}</p>
            </div>
            <div className={styled["social-midias--instagram"]}>
                <InstagramIcon />
                <p>{instagram}</p>
            </div>
        </div>
    )
}

export default SocialMidias