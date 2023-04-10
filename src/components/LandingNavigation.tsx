import React, { FC, useContext, useEffect } from 'react';
import { styled } from 'linaria/react';
import Link from 'next/link';

import { ThemeContext, media, tm, tmDark, tmSelectors } from '../themes';
import Hamburger from './ui/Hamburger';

import DesktopMenu from './ui/DesktopMenu';
import { menuItemsList } from '../config';
import NomicFoundationLogo from '../assets/nomic-foundation-logo';
import NomicFoundationLogoDark from '../assets/nomic-foundation-logo_dark';

interface Props {
  isSidebarOpen: boolean;
  onSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;

  box-sizing: border-box;
  padding: 32px 0px;
  transition: all ease-in-out 0.25s;
  background-color: ${tm(({ colors }) => colors.navbarFill)};
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${tm(({ colors }) => colors.navbarBorder)};
  z-index: 10;
  ${media.md} {
    padding: 24px 64px;
  }
  ${tmSelectors.dark} {
    background-color: ${tmDark(({ colors }) => colors.navbarFill)};
    border-top-color: ${tmDark(({ colors }) => colors.transparent)};
    border-bottom-color: ${tmDark(({ colors }) => colors.navbarBorder)};
  }
`;

const ControlsContainer = styled.section`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  transition: all 0.25s ease-in-out;
  padding: 0 24px;
  ${media.md} {
    padding: 0;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  box-sizing: border-box;
  background-color: ${tm(({ colors }) => colors.transparent)};
  border: none;
  cursor: pointer;
`;

const LandingNavigation: FC<Props> = ({ isSidebarOpen, onSidebarOpen }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;

    if (isSidebarOpen) {
      // Disable scroll
      body.style.overflow = 'hidden';
    } else {
      // Enable scroll
      body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);

  return (
    <Navigation>
      <ControlsContainer>
        <Link href='/' passHref>
          <LogoContainer aria-label='home page'>
            {theme === 'LIGHT' ? (
              <NomicFoundationLogo />
            ) : (
              <NomicFoundationLogoDark />
            )}
          </LogoContainer>
        </Link>
        <Hamburger
          isOpen={isSidebarOpen}
          onClick={() => onSidebarOpen(!isSidebarOpen)}
        />
        <DesktopMenu menuItems={menuItemsList} isDocumentation />
      </ControlsContainer>

      {/* <MobileMenu
        menuItems={menuItemsList}
        socialsItems={socialsItems}
        isOpen={isMobileMenuOpen}
        closeMobileMenu={() => setIsMobileMenuOpen(false)}
      /> */}
    </Navigation>
  );
};

export default LandingNavigation;
