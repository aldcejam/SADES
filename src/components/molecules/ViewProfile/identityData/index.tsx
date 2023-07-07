import styled from "./styled.module.scss"

type IdentityProps = {
    name: string,
    matriculation: number,
    course: string,
    bio: string
}
const Identity = ({ bio, course, matriculation, name }: IdentityProps) => {
    return (
        <div className={styled["identity"]}>
            <h2>
                {name}
            </h2>
            <h3>
                {matriculation}
            </h3>
            <h4>{course}</h4>
            <p>
                <i>
                    {bio}
                </i>
            </p>
        </div>
    )

}

export default Identity