import * as React from 'react';
import { SVGProps } from 'react';

const MediumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox='0 0 40 40'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <ellipse cx={31.488} cy={20.001} rx={1.512} ry={6.344} />
    <ellipse cx={25.745} cy={20.004} rx={3.628} ry={6.948} />
    <ellipse cx={14.256} cy={20.001} rx={7.256} ry={7.25} />
  </svg>
);

export default MediumIcon;
