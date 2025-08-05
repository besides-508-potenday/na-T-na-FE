import { useAppStore } from '@/store';

export const CharacterInfo = () => {
  const { selectedCharacter } = useAppStore();

  if (!selectedCharacter) {
    return (
      <div className="flex flex-col items-center gap-3 px-4 w-full">
        <div className="text-center text-gray-500">캐릭터를 선택해주세요</div>
      </div>
    );
  }

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
            {selectedCharacter.name}
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
            {selectedCharacter.personality.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index <
                  selectedCharacter.personality.split('\n').length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};
