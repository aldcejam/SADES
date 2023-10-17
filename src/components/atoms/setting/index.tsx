import styled from './styled.module.scss';
import { BsFillGearFill } from 'react-icons/bs';

const SettingButton = () => {
  return (
    <div className={styled['setting']}>
      <BsFillGearFill />
    </div>
  );
};
export default SettingButton;
