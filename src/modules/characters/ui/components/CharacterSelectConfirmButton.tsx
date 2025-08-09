import { StepIcon } from '@/assets/icons';
import { useCharacterById } from '@/hooks/useCharacters';
import { useAppStore } from '@/store';
import { useNavigate } from 'react-router';
import { initiateChatSession } from '@/lib/api';
import { useState } from 'react';
import type { ChatInitResponse } from '@/types';

const CharacterSelectConfirmButton = () => {
  const navigate = useNavigate();
  const { selectedChatbotId, nickname, setChatSession } = useAppStore();
  const { data: selectedCharacter } = useCharacterById(
    selectedChatbotId || undefined
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (selectedChatbotId && nickname) {
      setIsLoading(true);

      const socket = initiateChatSession(
        nickname,
        selectedChatbotId,
        (data: ChatInitResponse) => {
          // 채팅 세션 데이터를 store에 저장
          setChatSession(data);
          // 서버 응답을 받으면 chatroom_id로 이동
          navigate(`/chat/${data.chatroom_id}`);
          socket.disconnect();
          setIsLoading(false);
        },
        (error: string) => {
          console.error('채팅 세션 시작 실패:', error);
          setIsLoading(false);
          // 에러 처리 (필요시 에러 페이지로 이동)
        }
      );
    }
  };

  const isDisabled =
    !selectedCharacter || selectedCharacter?.is_unknown || isLoading;

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`w-full rounded-md px-5 py-4 flex items-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 ${
        isDisabled
          ? 'bg-gray-300 border-l-[3px] border-b-[3px] border-gray-400 cursor-not-allowed opacity-60'
          : 'bg-[#95CDFE] border-l-[3px] border-b-[3px] border-[#2C55C7] hover:bg-[#759CFE] active:bg-[#2C55C7] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px] cursor-pointer'
      }`}
    >
      <StepIcon size={24} fill={isDisabled ? '#9CA3AF' : '#18181B'} />

      <span
        className={`text-[24px] leading-[1em] font-normal text-center ${
          isDisabled ? 'text-gray-500 pl-12' : 'text-[#18181B] pl-2'
        }`}
        style={{ fontFamily: 'DungGeunMo' }}
      >
        {selectedCharacter?.is_unknown
          ? 'Comming Soon!'
          : isLoading
          ? '대화방 생성 중...'
          : '이 친구랑 대화할래요'}
      </span>
    </button>
  );
};

export default CharacterSelectConfirmButton;
