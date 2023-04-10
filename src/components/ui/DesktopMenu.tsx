import Link from 'next/link';
import { MenuItemType } from '../types';
import {
  DesktopMenuContainer,
  MenuItem,
  MenuItemsContainer,
} from './styled/DesktopMenu.styled';
import Socials from './Socials';
import ThemeSwitcher from './ThemeSwitcher';
import Searching from '../Searching';

type Props = {
  menuItems: MenuItemType[];
  isDocumentation: boolean;
};

const DesktopMenu = ({ menuItems, isDocumentation = false }: Props) => (
  <DesktopMenuContainer>
    <MenuItemsContainer>
      {isDocumentation ? (
        <MenuItem>
          <Searching />
        </MenuItem>
      ) : null}
      {menuItems.map((menuItem) => {
        return (
          <MenuItem key={menuItem.label}>
            <Link href={menuItem.href}>{menuItem.label}</Link>
          </MenuItem>
        );
      })}
    </MenuItemsContainer>
    <Socials />

    <div style={{ marginLeft: ' 24px' }}>
      <ThemeSwitcher />
    </div>
  </DesktopMenuContainer>
);

export default DesktopMenu;
