import styled from './styled.module.scss';

export const BgViewProfile = () => {
  return (
    <svg
      className={styled['bg-view-profile']}
      width="566"
      height="586"
      viewBox="0 0 566 586"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1433_8920)">
        <path
          d="M686.901 487.583C595.836 575.617 509.09 602.734 426.661 568.935C344.232 535.137 228.046 491.12 78.1039 436.885C-71.8383 382.65 -76.5485 319.769 63.9732 248.241C204.495 176.714 335.989 106.365 458.455 37.1961C580.92 -31.9733 672.377 3.79044 732.825 144.487C793.273 285.184 777.965 399.549 686.901 487.583Z"
          fill="url(#paint0_linear_1433_8920)"
        />
        <path
          d="M686.901 487.583C595.836 575.617 509.09 602.734 426.661 568.935C344.232 535.137 228.046 491.12 78.1039 436.885C-71.8383 382.65 -76.5485 319.769 63.9732 248.241C204.495 176.714 335.989 106.365 458.455 37.1961C580.92 -31.9733 672.377 3.79044 732.825 144.487C793.273 285.184 777.965 399.549 686.901 487.583Z"
          className="fill-absolute_theme"
          fill-opacity="0.29"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1433_8920"
          x="-41"
          y="0"
          width="813"
          height="586"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.5"
            result="effect1_foregroundBlur_1433_8920"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1433_8920"
          x1="769"
          y1="245.407"
          x2="-38.0058"
          y2="349.432"
          gradientUnits="userSpaceOnUse"
        >
          <stop style={{ stopColor: 'var(--secondary)' }} />
          <stop offset="0.7" style={{ stopColor: 'var(--primary)' }} />
          <stop offset="1" style={{ stopColor: 'var(--primary)' }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
