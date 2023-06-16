import { StyledIdentity } from "./styled"

type IdentityProps = {
    name: string,
    matriculation: number,
    course: string,
    bio: string
}
const Identity = ({ bio,course, matriculation, name }: IdentityProps) => {
    return (
        <StyledIdentity>
            <h2 className="main-data--name">
                {name}
            </h2>
            <h3 className="main-data--matriculation">
                {matriculation}
            </h3>
            <h4 className='main-data--course'>{course}</h4>
            <p className="main-data--bio">
                <i>
                    {bio}
                </i>
            </p>
        </StyledIdentity>
    )

}

export default Identity