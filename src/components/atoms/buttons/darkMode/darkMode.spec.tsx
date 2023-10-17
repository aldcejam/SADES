import { screen, render } from '@testing-library/react';
import ButtonDarkMode from '.';
import { jest } from '@jest/globals';
import { useThemeContext } from 'contexts/ThemeContext';

jest.mock('contexts/ThemeContext');

describe('Atom Component: ButtonDarkMode', () => {
  it('check if icon matches light theme', () => {
    jest.mocked(useThemeContext).mockReturnValue({
      theme: 'light',
      ToggleTheme: jest.fn(),
    });

    render(<ButtonDarkMode />);

    const lightIcon = screen.queryByTestId('LightModeIcon');
    expect(lightIcon).toBeInTheDocument;
  });
  it('check if icon matches dark theme', () => {
    jest.mocked(useThemeContext).mockReturnValue({
      theme: 'dark',
      ToggleTheme: jest.fn(),
    });

    render(<ButtonDarkMode />);

    const lightIcon = screen.queryByTestId('DarkModeIcon');
    expect(lightIcon).toBeInTheDocument;
  });
});
