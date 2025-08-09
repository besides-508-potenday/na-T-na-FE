import type { Character, LetterData } from '@/types';

const API_BASE_URL = 'http://localhost:3000';
//"https://www.distance-from-f.click"

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await fetch(`${API_BASE_URL}/api/chatbots`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch characters: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  return data;
};

export const fetchLetterData = async (
  chatroom_id: string
): Promise<LetterData> => {
  const response = await fetch(
    `${API_BASE_URL}/api/chatrooms/${chatroom_id}/letters`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch letter: ${response.status} ${response.statusText}`
    );
  }

  const data: LetterData = await response.json();
  return data;
};
