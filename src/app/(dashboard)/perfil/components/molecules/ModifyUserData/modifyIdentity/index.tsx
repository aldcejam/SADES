"use client"
import { TextField } from "@mui/material"
import { StyledModifyIdentity } from "./styled"

type InputTextProps = {
    register: any,
    errors: any
}

const ModifyIdentity = ({errors,register}:InputTextProps) => {
    return (
        <StyledModifyIdentity>
            <TextField
                {...register("name", { required: false, minLength: 4 })}
                label="Nome"
                error={errors.name ? true : false}
                className="input-material-ui"
            />
            <TextField
                {...register("matriculation", { required: false, minLength: 8 })}
                label="Matrícula"
                error={errors.matriculation ? true : false}
                className="input-material-ui"
                type={"number"}
            />
        </StyledModifyIdentity>
    )
}
export default ModifyIdentity