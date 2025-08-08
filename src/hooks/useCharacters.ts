import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '@/lib/api';
import type { Character } from '@/types';

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
