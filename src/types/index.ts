export interface Character {
  id: string;
  name: string;
  personality: string;
  image: string;
  description?: string;
}

export interface AppState {
  nickname: string;
  selectedCharacter: Character | null;
  characters: Character[];
  setNickname: (nickname: string) => void;
  setSelectedCharacter: (character: Character) => void;
  resetState: () => void;
}
