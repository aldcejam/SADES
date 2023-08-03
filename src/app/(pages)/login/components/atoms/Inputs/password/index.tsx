"use client"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { useState } from "react"
import { UseFormRegister } from "react-hook-form"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DefaultStyledInput } from "../defaultStyledInput";


type InputPasswordProps = {
    register: UseFormRegister<any>
    label: string
    error: any
}

const InputPassword = ({ register, label, error }: InputPasswordProps) => {

    const [showPassword, setShowPassword] = useState(false);
    const HandleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <FormControl error={error ? true : false} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                {...register("password", { minLength: 6 })}
                required
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={HandleShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Senha"
            />
        </FormControl>
    )
}

export default InputPassword