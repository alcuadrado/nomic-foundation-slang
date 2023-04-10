import React from 'react';
import { styled } from 'linaria/react';
import { media, tm, tmDark, tmSelectors } from '../../themes';

interface Props {
  children: string;
}

const StyledHorizontalRule = styled.ul`
  margin: 8px 0;
  border-top: 1px solid ${tm(({ colors }) => colors.neutral400)};

  ${tmSelectors.dark} {
    border-top: 1px solid ${tmDark(({ colors }) => colors.neutral400)};
  }
`;

const HorizontalRule = ({ children }: Props) => {
  return <StyledHorizontalRule>{children}</StyledHorizontalRule>;
};

export default HorizontalRule;
