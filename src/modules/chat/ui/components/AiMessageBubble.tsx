const AiMessageBubble = ({
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
        viewBox="0 0 275 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M275 74.8213H55.001V67.1689L55 74.3965H32.0859V79.498H16.5029V88H0.00292969V9.35254H0V0H275V74.8213Z"
          fill="#C6CAFE"
        />
      </svg>

      {/* 메시지 내용 */}
      <div className="relative z-10 px-6 py-4 pl-5 pr-8 min-h-[88px] flex items-center">
        <span
          className="text-[16px] leading-5 text-[#18181B] font-normal"
          style={{ fontFamily: 'Pretendard' }}
        >
          {children}
        </span>
      </div>
    </div>
  );
};

export default AiMessageBubble;
