import Image from 'next/image';
import ContainerProfilePic from '@base-project/public/Polygon/ContainerProfilePic';
import styled from './styled.module.scss';

interface ButtonRedirectPerfilPros {
  image: string
}

const ButtonRedirectPerfil = ({ image }: ButtonRedirectPerfilPros) => {
  return (
    <div className={styled['button-redirect-perfil']}>
      <div className={styled['image']}>
        <Image
          alt="imagem do perfil"
          src={image}
          fill
          sizes="40px"
        />
      </div>
      <div className={styled['mask']}>
        <ContainerProfilePic />
      </div>
    </div>
  );
};

export default ButtonRedirectPerfil;
