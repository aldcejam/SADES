import styled from './styled.module.scss';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

type SocialMidiasProps = {
  instagram: string;
  twitter: string;
};

const SocialMidias = ({ instagram, twitter }: SocialMidiasProps) => {
  return (
    <div className={styled['social-midias']}>
      <div className={styled['social-midias--twitter']}>
        <AiOutlineTwitter className={styled['icon']} />
        <p>{twitter}</p>
      </div>
      <div className={styled['social-midias--instagram']}>
        <AiFillInstagram className={styled['icon']} />
        <p>{instagram}</p>
      </div>
    </div>
  );
};

export default SocialMidias;
