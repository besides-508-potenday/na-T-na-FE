import { useCallback, useState } from 'react';
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

  const handleJoinRoom = useCallback(() => {
    if (!selectedChatbotId || !nickname) return;

    setIsLoading(true);

    // 최초 1회 수신: join_room 이후 서버가 보내는 초기 BOT 메시지
    socket.once('join_room_success', (data: ChatInitResponse) => {
      setChatSession(data);
      navigate(`/chat/${data.chatroom_id}`);
      setIsLoading(false);
    });

    // 오류 이벤트 처리
    socket.once('join_room_error', (err: JoinRoomError) => {
      console.error('채팅 세션 시작 실패:', err?.error);
      setIsLoading(false);
    });

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
  }, [navigate, nickname, selectedChatbotId, setChatSession]);

  return {
    isLoading,
    handleJoinRoom,
  };
};

export default useJoinRoom;
