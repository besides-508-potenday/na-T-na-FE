export interface Character {
  chatbot_id: number;
  chatbot_profile_image: string;
  chatbot_name: string;
  chatbot_personalities: string;
  chatbot_speciality: string;
  is_unknown: boolean;
}

export interface AppState {
  nickname: string;
  selectedChatbotId: number | null;
  setNickname: (nickname: string) => void;
  setSelectedChatbotId: (chatbotId: number) => void;
  resetState: () => void;
}
