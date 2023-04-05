import { styled } from 'linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const BannerContainer = styled.a`
  user-select: none;
  z-index: 100;
  width: 100%;
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: baseline;
  background-color: ${appTheme.light.colors.bg100};
  mix-blend-mode: normal;
  color: ${appTheme.light.colors.font100};
  white-space: nowrap;
  width: 100%;

  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.15em;
  height: 46px;
  & .banner-text {
    margin: 0 6px;
  }
  cursor: pointer;
  ${media.smd} {
    font-size: 19px;
    line-height: 140%;
    letter-spacing: 0.02em;
    height: 55px;
    & .banner-text {
      margin: 0 18px;
    }
  }
  ${tmSelectors.dark} {
    background-color: ${appTheme.dark.colors.bg100};
    color: ${appTheme.dark.colors.font100};
  }
`;

export const BannerDecorator = styled.span`
  color: ${appTheme.light.colors.font50};
  font-size: 15px;
  margin: 0px 3px;

  ${tmSelectors.dark} {
    color: ${appTheme.light.colors.font50};
  }
  &.optional {
    display: none;
  }
  ${media.sm} {
    font-size: 22px;
    &.optional {
      display: block;
    }
  }
`;
