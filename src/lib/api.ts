import type { Character, ChatInitResponse, LetterData } from '@/types';
import { io, Socket } from 'socket.io-client';

interface SocketResponse {
  ok: boolean;
  data?: ChatInitResponse;
  error?: string;
}
const API_BASE_URL = 'http://localhost:3000';

// 캐릭터 데이터 가져오기
// API 응답 타입 정의
interface ApiResponse {
  data: {
    chatbots: Character[];
  };
}

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await fetch(`${API_BASE_URL}/api/chatbots`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch characters: ${response.status} ${response.statusText}`
    );
  }

  const data: ApiResponse = await response.json();

  return data.data.chatbots;
};

export const fetchLetterData = async (
  chatroom_id: string
): Promise<LetterData> => {
  const response = await fetch(`${API_BASE_URL}/api/letters/${chatroom_id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch letter: ${response.status} ${response.statusText}`
    );
  }

  const data: LetterData = await response.json();
  return data;
};

// Socket connection and chat initiation
export const initiateChatSession = (
  nickname: string,
  chatbotId: number,
  onSuccess: (data: ChatInitResponse) => void,
  onError: (error: string) => void
): Socket => {
  const socket = io('http://localhost:5001');

  socket.on('connect', () => {
    // 연결되면 join_room 이벤트로 데이터 전송
    const payload = {
      user_nickname: nickname,
      chatbot_id: chatbotId,
    };

    socket.emit('join_room', payload, (response: SocketResponse) => {
      if (response.ok && response.data) {
        onSuccess(response.data);
      } else {
        onError(response.error || '채팅방 생성 실패');
      }
    });
  });

  socket.on('connect_error', () => {
    onError('소켓 연결 오류');
  });

  return socket;
};


