import React from 'react';
import { styled } from 'linaria/react';
import { media, tm, tmDark, tmSelectors } from '../../themes';

const A = styled.a`
  --bgColor: ${tm(({ colors }) => colors.ctaBg)};
  --borderColor: ${({ color }) => (!!color ? color : 'transparent')};
  position: relative;
  height: fit-content;
  cursor: pointer;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: 19px;
  color: ${tm(({ colors }) => colors.font300)};
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
    top: -1px;
    left: -1px;
  }

  &:hover {
    cursor: pointer;
    &:before {
      border: solid 2px ${({ color }) => (!!color ? color : 'transparent')};
      margin-left: -1px;
      margin-top: -1px;
    }
  }
  ${tmSelectors.dark} {
    background-color: transparent;

    color: ${tmDark(({ colors }) => colors.font300)};
    --bgColor: ${tmDark(({ colors }) => colors.ctaBg)};
  }

  &.secondary {
    --secondaryBorderColor: ${tm(({ colors }) => colors.ctaSecondaryBorder)};
    background: ${tm(({ colors }) => colors.transparent)};
    color: ${tm(({ colors }) => colors.ctaSecondaryColor)};
    outline: 1px solid var(--secondaryBorderColor);

    &:before {
      display: none;
    }
    &:hover {
      outline: 2px solid var(--secondaryBorderColor);
    }

    ${tmSelectors.dark} {
      color: ${tmDark(({ colors }) => colors.ctaSecondaryColor)};
      --secondaryBorderColor: ${tmDark(
        ({ colors }) => colors.ctaSecondaryBorder
      )};
    }
  }

  &.full-padding {
    padding: 12px 28px;
  }
`;

type Props = React.PropsWithChildren<{
  href?: string;
  variant?: string;
  onClick?: () => void;
}>;

const CTA = ({ children, href, variant = '', onClick }: Props) => {
  if ((href === '' || href === undefined || href === null) && !onClick) {
    throw new Error('CTA should have a href prop or a onClick prop');
  }
  return (
    <A
      as={onClick ? 'button' : 'a'}
      className={variant}
      href={href ?? undefined}
      onClick={onClick ?? undefined}
    >
      {children}
    </A>
  );
};

export default CTA;
