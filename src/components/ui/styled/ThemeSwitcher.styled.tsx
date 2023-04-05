import { styled } from 'linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const ThemeSwitcherContainer = styled.div`
  --itemSize: 24px;
  display: flex;
  align-items: center;
  width: calc(var(--itemSize) * 2);
  height: var(--itemSize);
  position: relative;
  cursor: pointer;
  ${media.smd} {
    --itemSize: 20px;
  }
`;

export const ThemeSwitcherItem = styled.div`
  --itemSize: 24px;

  width: var(--itemSize);
  height: var(--itemSize);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in-out;

  &.light {
    background-color: unset;
    ${tmSelectors.dark} {
      background-color: ${appTheme.light.colors.themeBg};
    }
  }

  &.dark {
    background-color: ${appTheme.dark.colors.themeBg};
    ${tmSelectors.dark} {
      background-color: unset;
    }
  }
  ${media.smd} {
    --itemSize: 20px;
  }
`;

export const ActiveThemeIndicator = styled.div`
  --itemSize: 24px;

  width: var(--itemSize);
  height: var(--itemSize);
  border: 1px solid;
  border-color: ${appTheme.light.colors.themeIndicator};
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.25s;

  ${tmSelectors.dark} {
    transform: translateX(var(--itemSize));
    border-color: ${appTheme.dark.colors.themeIndicator};
  }
  ${media.smd} {
    --itemSize: 20px;
  }
`;
