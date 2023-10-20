import { render } from "@testing-library/react";
import { useThemeContext, ThemeContextProvider } from "./"

describe('ThemeContext', () => {
    it('should be true', () => {
        render(
            <ThemeContextProvider initialTheme={"dark"}/>

        )
    });
});