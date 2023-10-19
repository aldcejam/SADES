import styled from './styled.module.scss';

type TitleProps = {
  title: string[] | string | undefined;
};
const Title = ({ title }: TitleProps) => {
  return (
    <div className={styled.title}>
      <h2>{title}</h2>
      <h3>Clique para selecionar o Esporte</h3>
    </div>
  );
};

export default Title;
