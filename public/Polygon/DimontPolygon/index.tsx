const DimontPolygon = () => {
  return (
    <svg
      className="dimont-polygon"
      width="550"
      height="461"
      viewBox="0 0 550 461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M377 0L864 230.5L377 461L-110 230.5L377 0Z"
        fill="url(#paint0_linear_678_199)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_678_199"
          x1="-110"
          y1="230.5"
          x2="864"
          y2="230.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: 'var(--primary)' }} />
          <stop offset="0.3" style={{ stopColor: 'var(--primary)' }} />
          <stop offset="1" style={{ stopColor: 'var(--secondary)' }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DimontPolygon;
