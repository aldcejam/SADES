"use client"
import styled from "./styled.module.scss"
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
        <div className={styled["form"]} onSubmit={handleSubmit(onSubmit)}>
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
            <input className={styled["submit"]} type="submit" value={"Entrar"} />

        </div>
    )
}

export default Form