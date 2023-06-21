import ButtonDarkMode from "components/atoms/buttons/darkMode"
import SettingButton from "components/atoms/setting"
import { StyledSettingsButtons } from "./styled"

const SettingsButtons = () => {
    return (
        <StyledSettingsButtons>
            <SettingButton/>
            <ButtonDarkMode/>
        </StyledSettingsButtons>
    )

}
export default SettingsButtons