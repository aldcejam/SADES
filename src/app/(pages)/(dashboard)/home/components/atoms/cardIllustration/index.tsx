import './styled.scss';

type CardIllustrationProps = {
  illustration: any;
};
const CardIllustration = ({ illustration }: CardIllustrationProps) => {
  return <div>{illustration}</div>;
};

export default CardIllustration;
