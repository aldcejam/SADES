'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from 'components/atoms/submit';
import InputUpload from 'components/atoms/inputUpload';
import ModifyBio from '../../../molecules/ModifyUserData/modifyBio';
import ModifyCourse from '../../../molecules/ModifyUserData/modifyCourse';
import ModifyIdentity from '../../../molecules/ModifyUserData/modifyIdentity';
import ModifySocialMidias from '../../../molecules/ModifyUserData/modifySocialMidias';
import './styled.scss';
import styled from './styled.module.scss';

type FormProps = {
  title: string;
};
const Form = ({ title }: FormProps) => {
  type Inputs = {
    name: string;
    matriculation: number;
    instagram: string;
    twitter: string;
    personalEmail: string;
    academicEmail: string;
    course: string;
    bio: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={styled['form']} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styled['title']}>{title}</h2>
      <div className={styled['identity']}>
        <ModifyIdentity errors={errors} register={register} />
      </div>
      <div className={styled['social-midias']}>
        <ModifySocialMidias errors={errors} register={register} />
      </div>
      {/* <div className="course">
                <ModifyCourse course={courses} errors={errors} register={register} />
            </div> */}
      <div className={styled['upload-image']}>
        <InputUpload />
      </div>
      <div className={styled['bio']}>
        <ModifyBio errors={errors} register={register} />
      </div>
      <SubmitButton value="Salvar" type="submit" />
    </div>
  );
};

export default Form;
