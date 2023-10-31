import styled from './styled.module.scss';

type IdentityProps = {
  name: string;
  matriculation: number;
  course: string;
  bio: string;
};
const Identity = ({ bio, course, matriculation, name }: IdentityProps) => {
  return (
    <div className={styled['identity']}>
      <h2>{name.split(' ')[0]}</h2>
      <div className={styled["informations"]}>
        <h3>{matriculation}</h3> - 
        <h4>{course}</h4>
      </div>
      <p>
        <i>{bio}</i>
      </p>
    </div>
  );
};

export default Identity;
