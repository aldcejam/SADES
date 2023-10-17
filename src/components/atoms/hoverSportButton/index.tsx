import styled from './styled.module.scss';

type HoverSportButtonProps = {
  nameButton: string;
};
const HoverSportButton = ({ nameButton }: HoverSportButtonProps) => {
  return (
    <div className={styled['hover-sport-button']}>
      <p>{nameButton}</p>
    </div>
  );
};

export default HoverSportButton;
