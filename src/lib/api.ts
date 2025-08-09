import type { Character, LetterData } from '@/types';

const API_BASE_URL = 'http://localhost:3000';

// 캐릭터 데이터 가져오기
// API 응답 타입 정의

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await fetch(`${API_BASE_URL}/api/chatbots`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch characters: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  console.log({ data });
  return data;
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

// 기존 콜백 기반 소켓 유틸 제거 (서버에서 'message' 브로드캐스트를 수신하도록 클라이언트 측에서만 처리)
