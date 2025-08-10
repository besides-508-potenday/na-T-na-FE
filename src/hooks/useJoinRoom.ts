import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppStore } from '@/store';
import type { ChatInitResponse } from '@/types';
import socket from '@/server';

interface JoinRoomError {
  error: string;
}

export const useJoinRoom = () => {
  const navigate = useNavigate();
  const { selectedChatbotId, nickname, setChatSession } = useAppStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinRoom = () => {
    if (!selectedChatbotId || !nickname) return;

    setIsLoading(true);

    const payload = {
      user_nickname: nickname,
      chatbot_id: selectedChatbotId,
    };

    const emitJoinWithAck = () => {
      socket.emit(
        'join_room',
        payload,
        (res: ChatInitResponse | JoinRoomError) => {
          if (res && 'error' in res) {
            console.error('채팅 세션 시작 실패:', res.error);
            setIsLoading(false);
            return;
          }

          const data = res as ChatInitResponse;

          setChatSession(data);
          navigate(`/chat/${data.chatroom_id}`);
          setIsLoading(false);
        }
      );
    };

    emitJoinWithAck();
  };

  return {
    isLoading,
    handleJoinRoom,
  };
};

export default useJoinRoom;
