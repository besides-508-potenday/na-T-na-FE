export const CharacterInfo = () => {
  return (
    <div className="flex flex-col items-center gap-3 px-4 w-full">
      {/* 이름 */}
      <div className="flex items-center gap-5 w-full">
        <span
          className="text-[#18181B] text-[32px] leading-[1em] whitespace-nowrap"
          style={{ fontFamily: 'DungGeunMo' }}
        >
          이름
        </span>
        <div className="flex-1 bg-white border-[1.5px] border-[#9E85FD] rounded px-2 py-1">
          <span
            className="text-[#18181B] text-lg font-semibold"
            style={{ fontFamily: 'Pretendard' }}
          >
            투닥이
          </span>
        </div>
      </div>

      {/* 성격 */}
      <div className="flex items-center gap-5 w-full">
        <span
          className="text-[#18181B] text-[32px] leading-[1em] whitespace-nowrap"
          style={{ fontFamily: 'DungGeunMo' }}
        >
          성격
        </span>
        <div className="flex-1 bg-white border-[1.5px] border-[#9E85FD] rounded px-2 py-1">
          <span
            className="text-black text-lg font-semibold"
            style={{ fontFamily: 'Pretendard' }}
          >
            소심함, 감정 과몰입,
            <br />
            인정 욕구, 관계 중심 정서
          </span>
        </div>
      </div>
    </div>
  );
};
