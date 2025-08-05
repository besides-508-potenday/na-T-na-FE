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

export const DeleteInputIcon = ({ size = 25 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_489_14306)">
        <mask id="path-1-inside-1_489_14306" fill="white">
          <path d="M0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12Z" />
        </mask>
        <path
          d="M0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12Z"
          fill="#E4E4E7"
        />
        <path
          d="M0.5 0H24.5H0.5ZM24.5 12.75C24.5 19.7916 18.7916 25.5 11.75 25.5C4.70837 25.5 -1 19.7916 -1 12.75L2 12C2 17.799 6.70101 22.5 12.5 22.5C19.1274 22.5 24.5 17.799 24.5 12V12.75ZM11.75 25.5C4.70837 25.5 -1 19.7916 -1 12.75C-1 5.70837 4.70837 0 11.75 0H12.5C6.70101 0 2 5.37258 2 12C2 17.799 6.70101 22.5 12.5 22.5L11.75 25.5ZM24.5 0V24V0Z"
          fill="#A1A1AA"
          mask="url(#path-1-inside-1_489_14306)"
        />
        <path
          d="M9.16626 16.667H7.83325V15.333H9.16626V16.667ZM17.1663 16.667H15.8333V15.333H17.1663V16.667ZM10.5002 14V15.333H9.16626V14H10.5002ZM15.8333 15.333H14.5002V14H15.8333V15.333ZM11.8333 14H10.5002V12.667H11.8333V14ZM14.5002 14H13.1663V12.667H14.5002V14ZM13.1663 12.667H11.8333V11.333H13.1663V12.667ZM11.8333 11.333H10.5002V10H11.8333V11.333ZM14.5002 11.333H13.1663V10H14.5002V11.333ZM10.5002 10H9.16626V8.66699H10.5002V10ZM15.8333 10H14.5002V8.66699H15.8333V10ZM9.16626 8.66699H7.83325V7.33301H9.16626V8.66699ZM17.1663 8.66699H15.8333V7.33301H17.1663V8.66699Z"
          fill="#18181B"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_489_14306"
          x="-0.1"
          y="0"
          width="24.6"
          height="24.6"
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
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1.2" dy="1.2" />
          <feGaussianBlur stdDeviation="0.3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_489_14306"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const PencilIcon = ({ size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_563_5549"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="26"
        height="26"
      >
        <path d="M26 0H0V26H26V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_563_5549)">
        <path
          d="M7.22228 9.17676H5.77783V10.7062H7.22228V9.17676Z"
          fill="#FFBB00"
        />
        <path
          d="M8.66661 10.7061H7.22217V12.2355H8.66661V10.7061Z"
          fill="#FFBB00"
        />
        <path
          d="M8.66661 7.64746H7.22217V9.17687H8.66661V7.64746Z"
          fill="#FFBB00"
        />
        <path
          d="M10.1109 6.11719H8.6665V7.6466H10.1109V6.11719Z"
          fill="#FFBB00"
        />
        <path
          d="M11.5558 7.64746H10.1113V9.17687H11.5558V7.64746Z"
          fill="#FFBB00"
        />
        <path
          d="M10.1109 7.64746H8.6665V9.17687H10.1109V7.64746Z"
          fill="#FFBB00"
        />
        <path
          d="M11.5558 9.17676H10.1113V10.7062H11.5558V9.17676Z"
          fill="#FFBB00"
        />
        <path
          d="M10.1109 9.17676H8.6665V10.7062H10.1109V9.17676Z"
          fill="#FFBB00"
        />
        <path
          d="M8.66661 9.17676H7.22217V10.7062H8.66661V9.17676Z"
          fill="#FFBB00"
        />
        <path
          d="M11.5558 6.11719H10.1113V7.6466H11.5558V6.11719Z"
          fill="#FFDE3F"
        />
        <path
          d="M13.0001 7.64746H11.5557V9.17687H13.0001V7.64746Z"
          fill="#FFDE3F"
        />
        <path d="M14.4444 9.17676H13V10.7062H14.4444V9.17676Z" fill="#FFDE3F" />
        <path
          d="M13.0001 9.17676H11.5557V10.7062H13.0001V9.17676Z"
          fill="#FFBB00"
        />
        <path
          d="M13.0001 10.7061H11.5557V12.2355H13.0001V10.7061Z"
          fill="#FFBB00"
        />
        <path d="M14.4444 10.7061H13V12.2355H14.4444V10.7061Z" fill="#FFBB00" />
        <path d="M14.4444 12.2354H13V13.7648H14.4444V12.2354Z" fill="#FFBB00" />
        <path
          d="M15.8888 12.2354H14.4443V13.7648H15.8888V12.2354Z"
          fill="#FFBB00"
        />
        <path
          d="M15.8888 10.7061H14.4443V12.2355H15.8888V10.7061Z"
          fill="#FFDE3F"
        />
        <path
          d="M17.3331 12.2354H15.8887V13.7648H17.3331V12.2354Z"
          fill="#FFDE3F"
        />
        <path
          d="M18.7779 13.7646H17.3335V15.2941H18.7779V13.7646Z"
          fill="#FFDE3F"
        />
        <path
          d="M17.3331 13.7646H15.8887V15.2941H17.3331V13.7646Z"
          fill="#FFBB00"
        />
        <path
          d="M15.8888 13.7646H14.4443V15.2941H15.8888V13.7646Z"
          fill="#FFBB00"
        />
        <path
          d="M17.3331 15.2939H15.8887V16.8234H17.3331V15.2939Z"
          fill="#FFBB00"
        />
        <path
          d="M18.7779 15.2939H17.3335V16.8234H18.7779V15.2939Z"
          fill="#FFBB00"
        />
        <path
          d="M20.2223 15.2939H18.7778V16.8234H20.2223V15.2939Z"
          fill="#FFDE3F"
        />
        <path
          d="M20.2223 16.8232H18.7778V18.3527H20.2223V16.8232Z"
          fill="#FFBB00"
        />
        <path
          d="M18.7779 16.8232H17.3335V18.3527H18.7779V16.8232Z"
          fill="#FFBB00"
        />
        <path
          d="M21.6666 16.8232H20.2222V18.3527H21.6666V16.8232Z"
          fill="#FFDE3F"
        />
        <path
          d="M23.1109 18.3525H21.6665V19.882H23.1109V18.3525Z"
          fill="#FFBB00"
        />
        <path
          d="M13.0001 4.58789H11.5557V6.1173H13.0001V4.58789Z"
          fill="#987926"
        />
        <path d="M14.4444 6.11719H13V7.6466H14.4444V6.11719Z" fill="#987926" />
        <path
          d="M15.8888 7.64746H14.4443V9.17687H15.8888V7.64746Z"
          fill="#987926"
        />
        <path
          d="M17.3331 9.17676H15.8887V10.7062H17.3331V9.17676Z"
          fill="#987926"
        />
        <path
          d="M18.7779 10.7061H17.3335V12.2355H18.7779V10.7061Z"
          fill="#987926"
        />
        <path
          d="M20.2223 12.2354H18.7778V13.7648H20.2223V12.2354Z"
          fill="#987926"
        />
        <path
          d="M21.6666 13.7646H20.2222V15.2941H21.6666V13.7646Z"
          fill="#987926"
        />
        <path
          d="M23.1109 15.2939H21.6665V16.8234H23.1109V15.2939Z"
          fill="#987926"
        />
        <path
          d="M24.5558 16.8232H23.1113V18.3527H24.5558V16.8232Z"
          fill="#987926"
        />
        <path
          d="M21.6666 18.3525H20.2222V19.882H21.6666V18.3525Z"
          fill="#FFBB00"
        />
        <path
          d="M13.0001 6.11719H11.5557V7.6466H13.0001V6.11719Z"
          fill="#D79D00"
        />
        <path d="M14.4444 7.64746H13V9.17687H14.4444V7.64746Z" fill="#D79D00" />
        <path
          d="M15.8888 9.17676H14.4443V10.7062H15.8888V9.17676Z"
          fill="#D79D00"
        />
        <path
          d="M17.3331 10.7061H15.8887V12.2355H17.3331V10.7061Z"
          fill="#D79D00"
        />
        <path
          d="M18.7779 12.2354H17.3335V13.7648H18.7779V12.2354Z"
          fill="#D79D00"
        />
        <path
          d="M20.2223 13.7646H18.7778V15.2941H20.2223V13.7646Z"
          fill="#D79D00"
        />
        <path
          d="M21.6666 15.2939H20.2222V16.8234H21.6666V15.2939Z"
          fill="#D79D00"
        />
        <path
          d="M23.1109 16.8232H21.6665V18.3527H23.1109V16.8232Z"
          fill="#D79D00"
        />
        <path
          d="M23.1109 18.3525H21.6665V19.882H23.1109V18.3525Z"
          fill="#D79D00"
        />
        <path
          d="M20.2223 18.3525H18.7778V19.882H20.2223V18.3525Z"
          fill="#FFBB00"
        />
        <path
          d="M20.2223 19.8828H18.7778V21.4122H20.2223V19.8828Z"
          fill="#FFBB00"
        />
        <path
          d="M18.7779 19.8828H17.3335V21.4122H18.7779V19.8828Z"
          fill="#FFBB00"
        />
        <path
          d="M18.7779 21.4121H17.3335V22.9415H18.7779V21.4121Z"
          fill="#FFBB00"
        />
        <path
          d="M17.3331 21.4121H15.8887V22.9415H17.3331V21.4121Z"
          fill="#FFBB00"
        />
        <path
          d="M17.3331 19.8828H15.8887V21.4122H17.3331V19.8828Z"
          fill="#FFBB00"
        />
        <path
          d="M17.3331 21.4121H15.8887V22.9415H17.3331V21.4121Z"
          fill="#FFBB00"
        />
        <path
          d="M11.5558 10.7061H10.1113V12.2355H11.5558V10.7061Z"
          fill="#FFBB00"
        />
        <path
          d="M10.1109 10.7061H8.6665V12.2355H10.1109V10.7061Z"
          fill="#FFBB00"
        />
        <path
          d="M11.5558 12.2354H10.1113V13.7648H11.5558V12.2354Z"
          fill="#FFBB00"
        />
        <path
          d="M10.1109 12.2354H8.6665V13.7648H10.1109V12.2354Z"
          fill="#FFBB00"
        />
        <path
          d="M13.0001 13.7646H11.5557V15.2941H13.0001V13.7646Z"
          fill="#FFBB00"
        />
        <path
          d="M11.5558 13.7646H10.1113V15.2941H11.5558V13.7646Z"
          fill="#FFBB00"
        />
        <path
          d="M13.0001 12.2354H11.5557V13.7648H13.0001V12.2354Z"
          fill="#FFBB00"
        />
        <path
          d="M11.5558 12.2354H10.1113V13.7648H11.5558V12.2354Z"
          fill="#FFBB00"
        />
        <path d="M14.4444 15.2939H13V16.8234H14.4444V15.2939Z" fill="#FFBB00" />
        <path
          d="M13.0001 15.2939H11.5557V16.8234H13.0001V15.2939Z"
          fill="#FFBB00"
        />
        <path d="M14.4444 13.7646H13V15.2941H14.4444V13.7646Z" fill="#FFBB00" />
        <path
          d="M11.5558 3.05859H10.1113V4.58801H11.5558V3.05859Z"
          fill="#97A7B5"
        />
        <path
          d="M10.1109 1.5293H8.6665V3.05871H10.1109V1.5293Z"
          fill="#B0C0D4"
        />
        <path
          d="M8.66661 1.5293H7.22217V3.05871H8.66661V1.5293Z"
          fill="#B0C0D4"
        />
        <path
          d="M8.66661 7.64746H7.22217V9.17687H8.66661V7.64746Z"
          fill="#B0C0D4"
        />
        <path
          d="M8.66661 3.05859H7.22217V4.58801H8.66661V3.05859Z"
          fill="#788FAA"
        />
        <path
          d="M5.77794 4.58789H4.3335V6.1173H5.77794V4.58789Z"
          fill="#938E8B"
        />
        <path
          d="M4.33312 6.11719H2.88867V7.6466H4.33312V6.11719Z"
          fill="#B0C0D4"
        />
        <path
          d="M5.77794 6.11719H4.3335V7.6466H5.77794V6.11719Z"
          fill="#B0C0D4"
        />
        <path
          d="M5.77794 6.11719H4.3335V7.6466H5.77794V6.11719Z"
          fill="#60595B"
        />
        <path
          d="M10.1109 3.05859H8.6665V4.58801H10.1109V3.05859Z"
          fill="#B0C0D4"
        />
        <path
          d="M11.5558 4.58789H10.1113V6.1173H11.5558V4.58789Z"
          fill="#B0C0D4"
        />
        <path
          d="M10.1109 4.58789H8.6665V6.1173H10.1109V4.58789Z"
          fill="#FFBB00"
        />
        <path
          d="M10.1109 4.58789H8.6665V6.1173H10.1109V4.58789Z"
          fill="#788FAA"
        />
        <path
          d="M8.66661 4.58789H7.22217V6.1173H8.66661V4.58789Z"
          fill="#B0C0D4"
        />
        <path
          d="M7.22228 4.58789H5.77783V6.1173H7.22228V4.58789Z"
          fill="#B0C0D4"
        />
        <path
          d="M8.66661 6.11719H7.22217V7.6466H8.66661V6.11719Z"
          fill="#B0C0D4"
        />
        <path
          d="M7.22228 6.11719H5.77783V7.6466H7.22228V6.11719Z"
          fill="#FFBB00"
        />
        <path
          d="M7.22228 6.11719H5.77783V7.6466H7.22228V6.11719Z"
          fill="#938E8B"
        />
        <path
          d="M5.77794 7.64746H4.3335V9.17687H5.77794V7.64746Z"
          fill="#60595B"
        />
        <path
          d="M7.22228 7.64746H5.77783V9.17687H7.22228V7.64746Z"
          fill="#60595B"
        />
        <path
          d="M4.33312 7.64746H2.88867V9.17687H4.33312V7.64746Z"
          fill="#B0C0D4"
        />
        <path
          d="M5.77794 9.17676H4.3335V10.7062H5.77794V9.17676Z"
          fill="#B0C0D4"
        />
        <path
          d="M4.33312 9.17676H2.88867V10.7062H4.33312V9.17676Z"
          fill="#FFBB00"
        />
        <path
          d="M4.33312 9.17676H2.88867V10.7062H4.33312V9.17676Z"
          fill="#B0C0D4"
        />
        <path
          d="M8.66661 1.5293H7.22217V3.05871H8.66661V1.5293Z"
          fill="#FDA3A3"
        />
        <path d="M7.22228 0H5.77783V1.52941H7.22228V0Z" fill="#CF6F6F" />
        <path d="M5.77794 0H4.3335V1.52941H5.77794V0Z" fill="#CF6F6F" />
        <path
          d="M4.33312 1.5293H2.88867V3.05871H4.33312V1.5293Z"
          fill="#CF6F6F"
        />
        <path
          d="M5.77794 1.5293H4.3335V3.05871H5.77794V1.5293Z"
          fill="#FDC0C0"
        />
        <path
          d="M2.88878 3.05859H1.44434V4.58801H2.88878V3.05859Z"
          fill="#F18B8B"
        />
        <path d="M1.44444 4.58789H0V6.1173H1.44444V4.58789Z" fill="#6C4F4F" />
        <path
          d="M2.88878 7.64746H1.44434V9.17687H2.88878V7.64746Z"
          fill="#6C4F4F"
        />
        <path
          d="M2.88878 4.58789H1.44434V6.1173H2.88878V4.58789Z"
          fill="#D37979"
        />
        <path
          d="M7.22228 1.5293H5.77783V3.05871H7.22228V1.5293Z"
          fill="#CF6F6F"
        />
        <path
          d="M8.66661 3.05859H7.22217V4.58801H8.66661V3.05859Z"
          fill="#CF6F6F"
        />
        <path
          d="M7.22228 3.05859H5.77783V4.58801H7.22228V3.05859Z"
          fill="#FFBB00"
        />
        <path
          d="M7.22228 3.05859H5.77783V4.58801H7.22228V3.05859Z"
          fill="#FDC0C0"
        />
        <path
          d="M5.77794 3.05859H4.3335V4.58801H5.77794V3.05859Z"
          fill="#FDA3A3"
        />
        <path
          d="M4.33312 3.05859H2.88867V4.58801H4.33312V3.05859Z"
          fill="#CF6F6F"
        />
        <path
          d="M5.77794 4.58789H4.3335V6.1173H5.77794V4.58789Z"
          fill="#CF6F6F"
        />
        <path
          d="M4.33312 4.58789H2.88867V6.1173H4.33312V4.58789Z"
          fill="#F18B8B"
        />
        <path
          d="M2.88878 6.11719H1.44434V7.6466H2.88878V6.11719Z"
          fill="#D37979"
        />
        <path
          d="M4.33312 6.11719H2.88867V7.6466H4.33312V6.11719Z"
          fill="#D37979"
        />
        <path
          d="M13.0001 13.7646H11.5557V15.2941H13.0001V13.7646Z"
          fill="#FFBB00"
        />
        <path
          d="M15.8888 15.2939H14.4443V16.8234H15.8888V15.2939Z"
          fill="#FFBB00"
        />
        <path d="M14.4444 15.2939H13V16.8234H14.4444V15.2939Z" fill="#FFBB00" />
        <path
          d="M15.8888 16.8232H14.4443V18.3527H15.8888V16.8232Z"
          fill="#FFBB00"
        />
        <path d="M14.4444 16.8232H13V18.3527H14.4444V16.8232Z" fill="#FFBB00" />
        <path
          d="M17.3331 16.8232H15.8887V18.3527H17.3331V16.8232Z"
          fill="#FFBB00"
        />
        <path
          d="M15.8888 16.8232H14.4443V18.3527H15.8888V16.8232Z"
          fill="#FFBB00"
        />
        <path
          d="M17.3331 18.3525H15.8887V19.882H17.3331V18.3525Z"
          fill="#FFBB00"
        />
        <path
          d="M15.8888 18.3525H14.4443V19.882H15.8888V18.3525Z"
          fill="#FFBB00"
        />
        <path
          d="M7.22228 10.7061H5.77783V12.2355H7.22228V10.7061Z"
          fill="#C79D3C"
        />
        <path
          d="M8.66661 12.2354H7.22217V13.7648H8.66661V12.2354Z"
          fill="#C79D3C"
        />
        <path
          d="M17.3331 21.4121H15.8887V22.9415H17.3331V21.4121Z"
          fill="#C79D3C"
        />
        <path
          d="M10.1109 13.7646H8.6665V15.2941H10.1109V13.7646Z"
          fill="#C79D3C"
        />
        <path
          d="M11.5558 15.2939H10.1113V16.8234H11.5558V15.2939Z"
          fill="#C79D3C"
        />
        <path
          d="M13.0001 16.8232H11.5557V18.3527H13.0001V16.8232Z"
          fill="#C79D3C"
        />
        <path d="M14.4444 18.3525H13V19.882H14.4444V18.3525Z" fill="#C79D3C" />
        <path
          d="M15.8888 19.8828H14.4443V21.4122H15.8888V19.8828Z"
          fill="#C79D3C"
        />
        <path
          d="M5.77794 10.7061H4.3335V12.2355H5.77794V10.7061Z"
          fill="#555146"
        />
        <path
          d="M7.22228 12.2354H5.77783V13.7648H7.22228V12.2354Z"
          fill="#555146"
        />
        <path
          d="M15.8888 21.4121H14.4443V22.9415H15.8888V21.4121Z"
          fill="#555146"
        />
        <path
          d="M8.66661 13.7646H7.22217V15.2941H8.66661V13.7646Z"
          fill="#555146"
        />
        <path
          d="M10.1109 15.2939H8.6665V16.8234H10.1109V15.2939Z"
          fill="#555146"
        />
        <path
          d="M11.5558 16.8232H10.1113V18.3527H11.5558V16.8232Z"
          fill="#555146"
        />
        <path
          d="M13.0001 18.3525H11.5557V19.882H13.0001V18.3525Z"
          fill="#555146"
        />
        <path d="M14.4444 19.8828H13V21.4122H14.4444V19.8828Z" fill="#555146" />
        <path
          d="M18.7779 18.3525H17.3335V19.882H18.7779V18.3525Z"
          fill="#FFBB00"
        />
        <path
          d="M17.3331 18.3525H15.8887V19.882H17.3331V18.3525Z"
          fill="#FFBB00"
        />
        <path
          d="M18.7779 18.3525H17.3335V19.882H18.7779V18.3525Z"
          fill="#FFBB00"
        />
        <path
          d="M18.7779 22.9414H17.3335V24.4708H18.7779V22.9414Z"
          fill="#FAD894"
        />
        <path
          d="M20.2223 22.9414H18.7778V24.4708H20.2223V22.9414Z"
          fill="#FAD894"
        />
        <path
          d="M20.2223 22.9414H18.7778V24.4708H20.2223V22.9414Z"
          fill="#EECE8D"
        />
        <path
          d="M21.6666 24.4707H20.2222V26.0001H21.6666V24.4707Z"
          fill="#8C7E63"
        />
        <path
          d="M26.0001 19.8828H24.5557V21.4122H26.0001V19.8828Z"
          fill="#8C7E63"
        />
        <path
          d="M26.0001 22.9414H24.5557V24.4708H26.0001V22.9414Z"
          fill="#8C7E63"
        />
        <path
          d="M26.0001 22.9414H24.5557V24.4708H26.0001V22.9414Z"
          fill="#8C7E63"
        />
        <path
          d="M26.0001 24.4707H24.5557V26.0001H26.0001V24.4707Z"
          fill="#383B3F"
        />
        <path
          d="M26.0001 18.3525H24.5557V19.882H26.0001V18.3525Z"
          fill="#8C7E63"
        />
        <path
          d="M26.0001 21.4121H24.5557V22.9415H26.0001V21.4121Z"
          fill="#CEB377"
        />
        <path
          d="M23.1109 24.4707H21.6665V26.0001H23.1109V24.4707Z"
          fill="#8C7E63"
        />
        <path
          d="M24.5558 24.4707H23.1113V26.0001H24.5558V24.4707Z"
          fill="#FAD894"
        />
        <path
          d="M24.5558 24.4707H23.1113V26.0001H24.5558V24.4707Z"
          fill="#8C7E63"
        />
        <path
          d="M20.2223 21.4121H18.7778V22.9415H20.2223V21.4121Z"
          fill="#FAD894"
        />
        <path
          d="M21.6666 21.4121H20.2222V22.9415H21.6666V21.4121Z"
          fill="#FAD894"
        />
        <path
          d="M21.6666 19.8828H20.2222V21.4122H21.6666V19.8828Z"
          fill="#FAD894"
        />
        <path
          d="M21.6666 22.9414H20.2222V24.4708H21.6666V22.9414Z"
          fill="#FAD894"
        />
        <path
          d="M23.1109 22.9414H21.6665V24.4708H23.1109V22.9414Z"
          fill="#FAD894"
        />
        <path
          d="M23.1109 21.4121H21.6665V22.9415H23.1109V21.4121Z"
          fill="#FAD894"
        />
        <path
          d="M23.1109 19.8828H21.6665V21.4122H23.1109V19.8828Z"
          fill="#FAD894"
        />
        <path
          d="M24.5558 19.8828H23.1113V21.4122H24.5558V19.8828Z"
          fill="#FAD894"
        />
        <path
          d="M24.5558 18.3525H23.1113V19.882H24.5558V18.3525Z"
          fill="#FAD894"
        />
        <path
          d="M24.5558 22.9414H23.1113V24.4708H24.5558V22.9414Z"
          fill="#FAD894"
        />
        <path
          d="M24.5558 21.4121H23.1113V22.9415H24.5558V21.4121Z"
          fill="#FAD894"
        />
        <path
          d="M17.3331 18.3525H15.8887V19.882H17.3331V18.3525Z"
          fill="#FFBB00"
        />
      </g>
    </svg>
  );
};
