import { useEffect } from 'react';
import { CharacterInfo } from '@/modules/characters/ui/components/CharacterInfo';
import { CharacterSelectField } from '@/modules/characters/ui/components/CharacterSelectField';
import CharacterSelectConfirmButton from '@/modules/characters/ui/components/CharacterSelectConfirmButton';
import LayoutCard from '@/components/LayoutCard';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import { useCharacters } from '@/hooks/useCharacters';
import { useAppStore } from '@/store';

export default function Characters() {
  const { data: characters, isLoading, isError } = useCharacters();
  const { selectedChatbotId, setSelectedChatbotId } = useAppStore();

  // 첫 번째 캐릭터를 기본 선택으로 설정
  useEffect(() => {
    if (characters && characters.length > 0 && selectedChatbotId === null) {
      setSelectedChatbotId(characters[0].chatbot_id);
    }
  }, [characters, selectedChatbotId, setSelectedChatbotId]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (!characters || characters.length === 0) {
    return (
      <LayoutCard headerMessage="캐릭터 선택">
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4 py-5 w-full">
          <div className="text-center text-gray-500">
            사용 가능한 캐릭터가 없습니다.
          </div>
        </div>
      </LayoutCard>
    );
  }

  return (
    <>
      <LayoutCard headerMessage="캐릭터 선택">
        {/* 바디 */}
        <div className="flex-1 flex flex-col items-center gap-7 px-4 py-5 w-full">
          {/* 제목 섹션 */}
          <div className="flex flex-col items-center gap-1 w-full py-2">
            <h1
              className="text-[#18181B] text-[26px] font-semibold leading-[1.19] text-center"
              style={{ fontFamily: 'Pretendard' }}
            >
              대화를 나눌 친구를
              <br />
              선택해 주세요
            </h1>
          </div>
          <div className=" pb-2">
            {/* 캐릭터 선택 섹션 */}
            <CharacterSelectField />
          </div>
          {/* 캐릭터 정보 */}
          <CharacterInfo />
        </div>

        {/* 하단 버튼 */}
        <div className="w-full max-w-sm px-7 pb-13">
          <CharacterSelectConfirmButton />
        </div>
      </LayoutCard>
    </>
  );
}
