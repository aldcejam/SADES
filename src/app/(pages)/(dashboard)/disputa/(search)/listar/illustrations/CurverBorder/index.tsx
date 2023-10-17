'use client';
import { ComponentProps } from 'react';
import './styled.scss';

interface CurverBorderProps extends ComponentProps<'svg'> {}

const CurverBorder = ({ ...props }: CurverBorderProps) => {
  return (
    <svg
      {...props}
      id="curver-border-polygon"
      viewBox="0 0 132 137"
      fill="none"
    >
      <path
        d="M132 137V0L97.548 67.9991C84.7769 93.2058 63.0995 112.771 36.7201 122.9L0 137H132Z"
        fill="url(#paint0_linear_1583_2729)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1583_2729"
          x1="-28.5"
          y1="-3.67109e-06"
          x2="-61.375"
          y2="125.581"
          gradientUnits="userSpaceOnUse"
        >
          <stop style={{ stopColor: 'var(--primary)' }} />
          <stop offset="1" style={{ stopColor: 'var(--secondary)' }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CurverBorder;
