export const StepIcon = ({ size = 24, fill = '#18181B' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 20H16V18H14V20ZM4 16H16V18H18V16H20V14H18V12H16V14H6V4H4V16ZM14 12H16V10H14V12Z"
        fill={fill}
      />
    </svg>
  );
};

export const XIcon = ({ size = 24, fill = '#18181B' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 14H0V12H2V14ZM14 14H12V12H14V14ZM4 10V12H2V10H4ZM12 12H10V10H12V12ZM6 10H4V8H6V10ZM10 10H8V8H10V10ZM8 8H6V6H8V8ZM6 6H4V4H6V6ZM10 6H8V4H10V6ZM4 4H2V2H4V4ZM12 4H10V2H12V4ZM2 2H0V0H2V2ZM14 2H12V0H14V2Z"
        fill={fill}
      />
    </svg>
  );
};

export const SquareIcon = ({ size = 24, fill = '#18181B' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18H0V16H2V18ZM6 18H4V16H6V18ZM10 18H8V16H10V18ZM14 18H12V16H14V18ZM18 18H16V16H18V18ZM2 14H0V12H2V14ZM18 14H16V12H18V14ZM2 10H0V8H2V10ZM18 10H16V8H18V10ZM2 6H0V4H2V6ZM18 6H16V4H18V6ZM2 2H0V0H2V2ZM6 2H4V0H6V2ZM10 2H8V0H10V2ZM14 2H12V0H14V2ZM18 2H16V0H18V2Z"
        fill={fill}
      />
    </svg>
  );
};

export const ChevronRightIcon = ({ size = 24, fill = '#18181B' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 8L8 6L6 6L6 8L8 8ZM6 6L6 4L4 4L4 6L6 6ZM6 10L6 8L4 8L4 10L6 10ZM4 4L4 2L2 2L2 4L4 4ZM4 12L4 10L2 10L2 12L4 12ZM2 2L2 -8.74228e-08L0 0L8.74232e-08 2L2 2ZM2 14L2 12L5.24537e-07 12L6.11959e-07 14L2 14Z"
        fill={fill}
      />
    </svg>
  );
};
export const ChevronLeftIcon = ({ size = 24, fill = '#18181B' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-3.49691e-07 8L-2.62268e-07 6L2 6L2 8L-3.49691e-07 8ZM2 6L2 4L4 4L4 6L2 6ZM2 10L2 8L4 8L4 10L2 10ZM4 4L4 2L6 2L6 4L4 4ZM4 12L4 10L6 10L6 12L4 12ZM6 2L6 -8.74228e-08L8 0L8 2L6 2ZM6 14L6 12L8 12L8 14L6 14Z"
        fill={fill}
      />
    </svg>
  );
};

export const ArrowIcon = ({ size = 24, fill = 'white' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 14.5V13.5H3V12.5H4V11.5H5V10.5H6V9.5H7V8.5H8V7.5H9V6.5H10V5.5H11V4.5H12V10.5H14V0.5H4V2.5H10V3.5H9V4.5H8V5.5H7V6.5H6V7.5H5V8.5H4V9.5H3V10.5H2V11.5H1V12.5H0V14.5H2Z"
        fill={fill}
      />
    </svg>
  );
};

export const CornerDownRightIcon = ({ size = 20, fill = '#18181B' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(3.33, 3.33)">
        <rect x="0" y="0" width="13.33" height="1.67" fill={fill} />
        <rect x="0" y="3.33" width="1.67" height="10" fill={fill} />
        <rect x="1.67" y="1.67" width="1.67" height="1.67" fill={fill} />
        <rect x="3.33" y="3.33" width="1.67" height="1.67" fill={fill} />
        <rect x="5" y="5" width="1.67" height="1.67" fill={fill} />
        <rect x="6.67" y="6.67" width="1.67" height="1.67" fill={fill} />
        <rect x="8.33" y="8.33" width="1.67" height="1.67" fill={fill} />
        <rect x="10" y="10" width="1.67" height="1.67" fill={fill} />
        <rect x="11.67" y="11.67" width="1.67" height="1.67" fill={fill} />
      </g>
    </svg>
  );
};
