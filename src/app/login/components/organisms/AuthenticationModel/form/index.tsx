"use client"
import { StyledForm } from "./styled"
import { SubmitHandler, useForm } from "react-hook-form"
import InputIdentifier from "../../../atoms/Inputs/identifier";
import InputPassword from "../../../atoms/Inputs/password";
import ForgotPassword from "../../../atoms/forgotPassword";

const Form = () => {

    type Inputs = {
        identifier: string;
        password: string;
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputIdentifier
                label="Identificador"
                register={register}
                error={errors.identifier}
            />
            <InputPassword
                label="Senha"
                register={register}
                error={errors.password}

            />
            <ForgotPassword/>
            <input className="submit" type="submit" value={"Entrar"} />

        </StyledForm>
    )
}

export default Form