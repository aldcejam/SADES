import ButtonDarkMode from 'components/atoms/buttons/darkMode';
import SettingButton from 'components/atoms/setting';
import styled from './styled.module.scss';

const SettingsButtons = () => {
  return (
    <div className={styled['settings-buttons']}>
      <SettingButton />
      <ButtonDarkMode />
    </div>
  );
};
export default SettingsButtons;
