import * as React from 'react';
import { SVGProps } from 'react';

const LightThemeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={14}
    fill='none'
    {...props}
  >
    <path fill='#888890' d='M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z' />
  </svg>
);

export default LightThemeIcon;
