import styled from './styled.module.scss';
import Carousel from '../../organisms/DisplayDecorationLogin/carousel';

const DisplayDecorationLogin = () => {
  return (
    <div className={styled['display-decoration-login']}>
      <Carousel />
    </div>
  );
};

export default DisplayDecorationLogin;
