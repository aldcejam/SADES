import InstagramIcon from "public/Icons/social-midias/InstagramIcon"
import TwitterIcon from "public/Icons/social-midias/TwitterIcon"
import { StyledSocialMidias } from "./styled"


type SocialMidiasProps = {
    instagram: string,
    twitter: string,
}
const SocialMidias = ({ instagram, twitter }: SocialMidiasProps) => {
    return (
        <StyledSocialMidias>
            <div className="social-midias--twitter">
                <TwitterIcon />
                <p>{twitter}</p>
            </div>
            <div className="social-midias--instagram">
                <InstagramIcon/>
                <p>{instagram}</p>
            </div>
        </StyledSocialMidias>
    )
}

export default SocialMidias