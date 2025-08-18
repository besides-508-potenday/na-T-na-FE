import type { Character } from '@/types';

export const mockChatbots: Character[] = [
  {
    chatbot_id: 1,
    chatbot_profile_image: 'tudag.png',
    chatbot_name: '투닥이',
    chatbot_personality: '소심함, 감정 과몰입, 인정 욕구, 관계 중심 정서',
    chatbot_speciality: '공감 능력 학습기',
    is_unknown: false,
  },
  {
    chatbot_id: 2,
    chatbot_profile_image: '양.png',
    chatbot_name: '사회선배_???',
    chatbot_personality: '???',
    chatbot_speciality: '직장 내 감정소통 연습',
    is_unknown: true,
  },
  {
    chatbot_id: 3,
    chatbot_profile_image: '다람쥐.png',
    chatbot_name: '썸고수_???',
    chatbot_personality: '???',
    chatbot_speciality: '연애 공감 시뮬레이션션',
    is_unknown: true,
  },
];
