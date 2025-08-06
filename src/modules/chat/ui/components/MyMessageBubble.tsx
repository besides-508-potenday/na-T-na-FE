const MyMessageBubble = ({
  children,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className={`relative `} style={{ width: '275px' }}>
      {/* 메시지 내용 */}
      <div
        className="bg-white border-[#7538C5] border-[2px] rounded-[16px] rounded-tr-[2px] z-10 px-[12px] py-[16px]"
        style={{
          fontFamily: 'Pretendard',
          minHeight: '5.5em',
        }}
      >
        <div className="text-[16px] leading-5 text-[#18181B] font-normal whitespace-pre-wrap break-words">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyMessageBubble;
