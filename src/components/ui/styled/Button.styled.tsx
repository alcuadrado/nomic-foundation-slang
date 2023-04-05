import { styled } from 'linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const StyledButton = styled.button<{ color?: string }>`
  --bgColor: ${appTheme.light.colors.ctaBg};
  --borderColor: ${({ color }) => (!!color ? color : 'transparent')};
  position: relative;
  height: fit-content;
  cursor: pointer;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: 19px;
  color: ${appTheme.light.colors.font200};
  border: unset;
  padding: 24px 56px;
  border-radius: 40px;
  background-color: transparent;

  &:before {
    background: var(--bgColor);
    background-origin: border-box;
    background-clip: content-box, border-box;
    position: absolute;
    border: solid 1px ${({ color }) => (!!color ? color : 'transparent')};
    content: ' ';
    display: block;
    border-radius: 40px;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
  }

  &:hover {
    cursor: pointer;
    &:before {
      border: solid 2px ${({ color }) => (!!color ? color : 'transparent')};
      margin-left: -1px;
      margin-top: -1px;
    }
  }

  ${media.lg} {
    padding: 20px 40px;
  }
  ${media.smd} {
    font-size: 12px;
    padding: 16px 24px;
  }
  ${tmSelectors.dark} {
    background-color: transparent;

    color: ${appTheme.dark.colors.font200};
    --bgColor: ${appTheme.dark.colors.ctaBg};
  }
`;
