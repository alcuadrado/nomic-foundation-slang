import { useContext } from 'react';
import {
  ActiveThemeIndicator,
  ThemeSwitcherContainer,
  ThemeSwitcherItem,
} from './styled/ThemeSwitcher.styled';
import LightThemeIcon from '../../assets/themes/light';
import DarkThemeIcon from '../../assets/themes/dark';
import { ThemeContext } from '../../themes';

const ThemeSwitcher = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <ThemeSwitcherContainer onClick={() => changeTheme()}>
      <ThemeSwitcherItem className='light'>
        <LightThemeIcon />
      </ThemeSwitcherItem>
      <ThemeSwitcherItem className='dark'>
        <DarkThemeIcon />
      </ThemeSwitcherItem>
      <ActiveThemeIndicator />
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
