import { styled } from 'linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 199;
  margin-top: 0;
  transition: all 0.25s ease-in-out;

  &.blur {
    background: ${appTheme.light.colors.navbarBlur};
    backdrop-filter: blur(9px);
    mix-blend-mode: normal;
    transition: all 0.25s ease-in-out;
  }
  &.fill {
    background: ${appTheme.light.colors.navbarFill};
    backdrop-filter: blur(9px);
    mix-blend-mode: normal;
    margin-top: -55px;
    transition: all 0.25s ease-in-out;
  }
  ${tmSelectors.dark} {
    &.blur {
      background: ${appTheme.dark.colors.navbarBlur};
      backdrop-filter: blur(9px);
      mix-blend-mode: normal;
    }
    &.fill {
      background: ${appTheme.dark.colors.navbarFill};
      backdrop-filter: blur(9px);
      mix-blend-mode: normal;
    }
  }

  ${media.smd} {
    &.fill {
      margin-top: -46px;
    }
  }
`;

export const DesktopMenuContainer = styled.menu`
  display: none;
  align-items: center;
  ${media.md} {
    display: flex;
  }
`;

export const MenuItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-right: 64px;
`;

export const MenuItem = styled.li`
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.1em;
  color: ${appTheme.light.colors.font50};
  margin-right: 32px;
  white-space: nowrap;
  &:last-child {
    margin-right: unset;
  }
  &:hover {
    color: ${appTheme.light.colors.font100};
  }
  ${tmSelectors.dark} {
    &:hover {
      color: ${appTheme.dark.colors.font100};
    }
  }
`;

export const SocialsContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const SocialItem = styled.div`
  font-size: 0px;
  & svg {
    fill: ${appTheme.light.colors.font50};
  }
  &:hover svg {
    fill: ${appTheme.light.colors.font100};
  }
  ${tmSelectors.dark} {
    &:hover svg {
      fill: ${appTheme.dark.colors.font100};
    }
  }
  ${media.smd} {
    & svg {
      width: 32px;
      height: 32px;
    }
  }
  cursor: pointer;
`;
