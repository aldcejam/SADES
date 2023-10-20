import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import ButtonDarkMode from '.';
import { jest } from '@jest/globals';
import { useThemeContext } from 'contexts/ThemeContext';


jest.mock('contexts/ThemeContext');

describe('Atom Component: ButtonDarkMode', () => {
  it('check if icon matches dark theme', () => {
    jest.mocked(useThemeContext).mockReturnValue({
      theme: 'light',
      ToggleTheme: jest.fn(),
    });

    render(<ButtonDarkMode />);

    const darkIcon = screen.getByTestId('DarkModeOutlinedIcon');
    expect(darkIcon).toBeInTheDocument;
  });

  it('check if icon matches light theme', () => {
    jest.mocked(useThemeContext).mockReturnValue({
      theme: 'dark',
      ToggleTheme: jest.fn(),
    });

    render(<ButtonDarkMode />);

    const lightIcon = screen.getByTestId('LightModeIcon');
    expect(lightIcon).toBeInTheDocument;
  })

  it("should call ToggleTheme when click", async () => {
    jest.mocked(useThemeContext).mockReturnValue({
      theme: 'dark',
      ToggleTheme: jest.fn(),
    });

    render(
      <ButtonDarkMode />
    );
    
    const button = screen.getByRole("button")
    fireEvent.click(button) 

    expect(useThemeContext().ToggleTheme).toBeCalledTimes(1)


  })
});
