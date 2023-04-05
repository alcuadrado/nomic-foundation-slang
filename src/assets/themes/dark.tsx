import * as React from 'react';
import { SVGProps } from 'react';

const DarkThemeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={16}
    fill='none'
    {...props}
  >
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M11.25 1.126a7.489 7.489 0 0 0-3.26 2.766 7.511 7.511 0 0 0 3.26 10.972 7.471 7.471 0 0 1-8.965-2.314A7.507 7.507 0 0 1 .96 6.238a7.506 7.506 0 0 1 4.056-5.01A7.472 7.472 0 0 1 8.235.5c1.037 0 2.063.212 3.015.626Z'
      clipRule='evenodd'
    />
  </svg>
);

export default DarkThemeIcon;
