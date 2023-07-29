import { screen, render } from "@testing-library/react" 
import ButtonDarkMode from "./" 
import { useThemeContext } from "contexts/ThemeContext";

jest.mock("contexts/ThemeContext", () => {
    return {
        useThemeContext() {
            return {
                theme: "dark",
                ToggleTheme: jest.fn()
            }
        }
    }
})

describe("ButtonDarkMode Atom Component", () => {
    it("check if icon matches theme", () => {

        render(<ButtonDarkMode />)

        const lightIcon = screen.queryByTestId("LightModeIcon")
        expect(lightIcon).toBeInTheDocument()
    })
   
}
)