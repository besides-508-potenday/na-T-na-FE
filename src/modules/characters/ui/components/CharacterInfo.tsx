import { useAppStore } from '@/store';
import { useCharacterById } from '@/hooks/useCharacters';

export const CharacterInfo = () => {
  const { selectedChatbotId } = useAppStore();
  const { data: selectedCharacter } = useCharacterById(
    selectedChatbotId || undefined
  );

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
        <div className="flex-1 bg-white border-[2px] border-[#9E85FD] rounded px-2 py-1">
          <span
            className="text-[#18181B] text-lg font-semibold"
            style={{ fontFamily: 'Pretendard' }}
          >
            {selectedCharacter.chatbot_name}
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
        <div className="flex-1 bg-white border-[2px] border-[#9E85FD] rounded px-2 py-1">
          <span
            className="text-black text-lg font-semibold"
            style={{ fontFamily: 'Pretendard' }}
          >
            {(selectedCharacter.chatbot_personality ?? '')
              .split('\n')
              .map((line, index, arr) => (
                <span key={index}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </span>
              ))}
          </span>
        </div>
      </div>{' '}
      <div className="flex items-center gap-5 w-full">
        <span
          className="text-[#18181B] text-[32px] leading-[1em] whitespace-nowrap"
          style={{ fontFamily: 'DungGeunMo' }}
        >
          특징
        </span>
        <div className="flex-1 bg-white border-[2px] border-[#9E85FD] rounded px-2 py-1">
          <span
            className="text-[#18181B] text-lg font-semibold"
            style={{ fontFamily: 'Pretendard' }}
          >
            {selectedCharacter.chatbot_speciality}
          </span>
        </div>
      </div>
    </div>
  );
};
