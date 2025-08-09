export interface Character {
  chatbot_id: number;
  chatbot_profile_image: string;
  chatbot_name: string;
  chatbot_personalities: string;
  chatbot_speciality: string;
  is_unknown: boolean;
}

export interface LetterData {
  chatroom_id: string;
  is_finished: boolean;
  current_distance: number;
  letter: string;
  user_nickname: string;
  chatbot_name: string;
  chatbot_id: number;
  from_chatbot: string;
  letter_mp3: string;
  chatbot_result_image: string;
}

export interface AppState {
  nickname: string;
  selectedChatbotId: number | null;
  chatSession: ChatInitResponse | null;
  setNickname: (nickname: string) => void;
  setSelectedChatbotId: (chatbotId: number) => void;
  setChatSession: (session: ChatInitResponse) => void;
  resetState: () => void;
}
export interface ChatInitResponse {
  user_id: string;
  user_nickname: string;
  chatbot_id: number;
  chatroom_id: string;
  chatbot_name: string;
  current_distance: number;
  heart_life: number;
  sender_type: 'BOT';
  message: string;
  chatbot_profile_image: string;
  turn_count: number;
}

// 클라이언트에서 서버로 보내는 메시지 형식
export interface ClientMessage {
  chatbot_id: number;
  message: string;
  sender_type: 'USER';
  chatroom_id: string;
  user_id: string;
}

// 서버에서 클라이언트로 보내는 메시지 형식 (사용자 메시지 + 봇 메시지 통합)
export interface MessageData {
  chatbot_id?: number;
  chatbot_name?: string;
  message: string;
  user_id: string;
  user_nickname: string;
  sender_type: 'USER' | 'BOT';
  chatroom_id: string;
  score?: number;
  chatbot_profile_image?: string;
  reaction_image?: string;
  heart_life?: number;
  current_distance?: number;
  turn_count?: number;
}
