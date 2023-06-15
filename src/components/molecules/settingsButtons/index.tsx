import ButtonDarkMode from "src/components/atoms/darkMode"
import SettingButton from "src/components/atoms/setting"
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