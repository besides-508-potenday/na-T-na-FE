import { ChevronLeftIcon, ChevronRightIcon } from '@/assets/icons';
import { useAppStore } from '@/store';
import { useCharacters } from '@/hooks/useCharacters';
import { useState, useEffect } from 'react';

export const CharacterSelectField = () => {
  const { data: characters } = useCharacters();
  const { selectedChatbotId, setSelectedChatbotId } = useAppStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  // 선택된 캐릭터 ID에 따라 현재 인덱스 업데이트
  useEffect(() => {
    if (selectedChatbotId && characters) {
      const index = characters.findIndex(
        (char) => char.chatbot_id === selectedChatbotId
      );
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [selectedChatbotId, characters]);

  if (!characters || characters.length === 0) return null;

  const currentCharacter = characters[currentIndex];

  const handlePrevious = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : characters.length - 1;
    setCurrentIndex(newIndex);
    setSelectedChatbotId(characters[newIndex].chatbot_id);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex < characters.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedChatbotId(characters[newIndex].chatbot_id);
  };

  if (!currentCharacter) return null;

  return (
    <div className="flex items-center justify-between w-full">
      {/* 왼쪽 화살표 */}
      <button
        onClick={handlePrevious}
        className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
        disabled={characters.length <= 1}
      >
        <ChevronLeftIcon
          size={32}
          fill={characters.length > 1 ? '#18181B' : '#9CA3AF'}
        />
      </button>

      {/* 캐릭터 이미지 */}
      <div className="w-[210px] h-[210px] bg-[#EFFFD3] border-[#AAFE75] border-[3px]  rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={currentCharacter.chatbot_profile_image}
          alt={currentCharacter.chatbot_name}
          className=" object-cover"
        />
      </div>

      {/* 오른쪽 화살표 */}
      <button
        onClick={handleNext}
        className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
        disabled={characters.length <= 1}
      >
        <ChevronRightIcon
          size={32}
          fill={characters.length > 1 ? '#18181B' : '#9CA3AF'}
        />
      </button>
    </div>
  );
};
