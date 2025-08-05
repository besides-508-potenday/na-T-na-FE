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

      {/* 메시지 내용 */}
      <div
        className="relative z-10 px-6 py-4 pl-8 pr-12"
        style={{
          fontFamily: 'Pretendard',
          minHeight: '5.5em',
        }}
      >
        <div className="text-[16px] leading-5 text-[#18181B] font-normal whitespace-pre-wrap">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyMessageBubble;
