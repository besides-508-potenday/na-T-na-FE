import { useQuery } from '@tanstack/react-query';
import { fetchCharacters, fetchLetterData } from '@/lib/api';
import type { Character, LetterData } from '@/types';

export const useCharacters = () => {
  return useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    staleTime: 5 * 60 * 1000, // 5분간 stale하지 않음
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useCharacterById = (id: number | undefined) => {
  const { data: characters, ...rest } = useCharacters();

  const character = characters?.find(
    (char: Character) => char.chatbot_id === id
  );

  return {
    ...rest,
    data: character,
  };
};

export const useLetterData = (chatroom_id: string | undefined) => {
  return useQuery<LetterData>({
    queryKey: ['letter', chatroom_id],
    queryFn: () => {
      if (!chatroom_id) {
        throw new Error('채팅방 ID가 없습니다.');
      }
      return fetchLetterData(chatroom_id);
    },
    enabled: !!chatroom_id,
    staleTime: 5 * 60 * 1000, 
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
