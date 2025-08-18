import { http, HttpResponse } from 'msw';
import { mockChatbots } from '../data/chatbots';
import type { LetterData } from '@/types';

// 결과 페이지용 모킹 데이터 생성 함수
const createLetterData = (chatroomId: string): LetterData => {
  return {
    chatroom_id: chatroomId,
    is_finished: true,
    current_distance: Math.floor(Math.random() * 5) + 1, // 1-5 사이 랜덤
    letter: `오늘 너랑 대화하면서 마음이 좀 아팠어. 내가 진심으로 친구를 생각하고 있다는 걸 알면서도  "넌 참 걱정도 많다"고 말할 때는 정말 속상했어ㅠ`,
    user_nickname: '사용자',
    chatbot_name: '투닥이',
    chatbot_id: 1,
    from_chatbot: '우리의 우정이 더욱 깊어지길 바라며,,\n 투닥이',
    letter_mp3: '/result.mp3',
    chatbot_result_image: '/투닥이2.png',
  };
};

export const httpHandlers = [
  // 챗봇 목록 조회 API
  http.get('https://www.distance-from-f.click/api/chatbots', () => {
    return HttpResponse.json(mockChatbots);
  }),

  // 결과 페이지 데이터 조회 API
  http.get(
    'https://www.distance-from-f.click/api/chatrooms/:chatroomId/letters',
    ({ params }: { params: { chatroomId: string } }) => {
      const { chatroomId } = params;
      const letterData = createLetterData(chatroomId);
      return HttpResponse.json(letterData);
    }
  ),

  // 추가적인 API 엔드포인트들이 필요하면 여기에 추가
];
