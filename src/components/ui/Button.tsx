import Link from 'next/link';
import { StyledButton } from './styled/Button.styled';
import { CTAType } from './types';

export const Button = ({ href, label, color }: CTAType) => (
  <Link href={href}>
    <StyledButton color={color}>{label}</StyledButton>
  </Link>
);
