import type { Character } from '@/types';

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

export const fetchResult = async (nickname: string, chatroom_id: number) => {
  const response = await fetch(`${API_BASE_URL}/api/letters/${chatroom_id}`, {
    method: 'POST',
    body: JSON.stringify({ nickname }),
  });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch result: ${response.status} ${response.statusText}`
    );
  }
  const data = await response.json();
  console.log('data', data.data);
  return data;
};
