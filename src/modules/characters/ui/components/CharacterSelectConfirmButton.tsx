import { StepIcon } from '@/assets/icons';
import { useCharacterById } from '@/hooks/useCharacters';
import { useAppStore } from '@/store';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import type { ChatInitResponse } from '@/types';
import socket from '@/server';

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

      // 최초 1회 수신: join_room 이후 서버가 보내는 초기 BOT 메시지 (join_room_success)
      socket.once('join_room_success', (data: ChatInitResponse) => {
        setChatSession(data);
        console.log('data', data);
        navigate(`/chat/${data.chatroom_id}`);
        setIsLoading(false);
      });

      // 오류 이벤트 처리
      socket.once('join_room_error', (err: { error: string }) => {
        console.error('채팅 세션 시작 실패:', err?.error);
        setIsLoading(false);
      });

      // 연결 상태에 따라 join_room 전송
      const payload = {
        user_nickname: nickname,
        chatbot_id: selectedChatbotId,
      };

      if (socket.disconnected) {
        socket.connect();
        socket.once('connect', () => {
          socket.emit('join_room', payload);
        });
      } else {
        socket.emit('join_room', payload);
      }
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
