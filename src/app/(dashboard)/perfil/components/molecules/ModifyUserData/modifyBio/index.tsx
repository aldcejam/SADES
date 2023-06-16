import { StyledModifyBio } from "./styled"
 
type ModifyBioProps = {
    errors: any
    register: any
}
const ModifyBio = ({errors, register}:ModifyBioProps) => {
    return (
        <StyledModifyBio>
            <textarea
                placeholder="mensagem da bio"
                {...register("bio", { required: false, minLength: 8 })}
                className={`${errors.bio ? "input-error" : ""}`}
            />
        </StyledModifyBio>
    )
}

export default ModifyBio