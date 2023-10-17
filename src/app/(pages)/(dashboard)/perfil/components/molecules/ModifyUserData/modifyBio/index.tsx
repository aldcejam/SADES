import styled from './styled.module.scss';

type ModifyBioProps = {
  errors: any;
  register: any;
};
const ModifyBio = ({ errors, register }: ModifyBioProps) => {
  return (
    <div className={styled['modify-bio']}>
      <textarea
        placeholder="mensagem da bio"
        {...register('bio', { required: false, minLength: 8 })}
        className={`${errors.bio ? styled['input-error'] : ''}`}
      />
    </div>
  );
};

export default ModifyBio;
