const MyMessageBubble = ({
  children,
  className = '',
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: '275px' }}>
      {/* SVG 배경 */}
      <svg
        width="275"
        height="100%"
        viewBox="0 0 275 176"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_201_2034)">
          <path
            d="M0 162H219.999V154L220 161.5H242.914V166.5H258.497V175H274.997V9.35254H275V0H0V162Z"
            fill="white"
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_2034">
            <rect
              width="275"
              height="176"
              fill="white"
              transform="matrix(-1 0 0 1 275 0)"
            />
          </clipPath>
        </defs>
      </svg>

      {/* 메시지 내용 */}
      <div
        className="relative z-10 px-6 py-4 pl-8 pr-12"
        style={{
          fontFamily: 'Pretendard',
          minHeight: '5.5em',
        }}
      >
        <div
          className="text-[16px] leading-5 text-[#18181B] font-normal whitespace-pre-wrap"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyMessageBubble;
