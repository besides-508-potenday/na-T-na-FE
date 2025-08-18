import type { ChatInitResponse, MessageData } from '@/types';

// UUID 생성 함수
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// join_room 응답 생성 함수
export const createJoinRoomResponse = (
  userNickname: string,
  chatbotId: number
): ChatInitResponse => {
  const chatbotNames: { [key: number]: string } = {
    1: '투닥이',
  };

  return {
    user_id: generateUUID(),
    user_nickname: userNickname,
    chatbot_id: chatbotId,
    chatroom_id: generateUUID(),
    chatbot_name: chatbotNames[chatbotId] || '투닥이',
    current_distance: 10,
    heart_life: 5,
    sender_type: 'BOT',
    message: `저기.. ${userNickname}..! 잘지냈어? 혹시 내가 할말이 있는데 들어줄래? 친구에게 서프라이즈 선물을 주고 싶은데, 혹시 내가 너무 과하게 행동하고 있는건 아닐까 걱정이 돼...ㅠㅠ`,
    chatbot_profile_image: `tudag.png`,
    turn_count: 5,
  };
};

// 챗봇 응답 메시지 생성 함수
export const createBotResponse = (
  userMessage: string,
  chatSession: ChatInitResponse,
  currentTurnCount: number
): MessageData => {
  // 간단한 응답 로직 (실제로는 더 복잡한 AI 로직이 필요)
  const responses = [
    '흐윽... 그렇게 말하니까 내가 너무 예민한 사람 같아.. ㅠㅜ 난 그저 친구를 생각하는 마음인데ㅠㅠ ',
    '그냥... 친구가 싫어할까봐... 나도 모르게 자꾸만 신경쓰게 되는데, 이게 맞는걸까?',
    '으응... 그냥 혹시라도 내마음이 부담될까봐... 혹시라도 내마음이 부담이 될까봐 부담스러워...',
    '그 친구가 소중해서 그런가봐...',
  ];

  const randomResponse =
    responses[Math.floor(Math.random() * responses.length)];

  // 하트 라이프 계산 (랜덤으로 감소)
  const heartDecrease = Math.floor(Math.random() * 2); // 0 또는 1
  const newHeartLife = Math.max(0, chatSession.heart_life - heartDecrease);

  // 거리 계산
  const newDistance =
    chatSession.current_distance - Math.floor(Math.random() * 2);

  return {
    user_id: chatSession.user_id,
    user_nickname: chatSession.user_nickname,
    chatbot_id: chatSession.chatbot_id,
    chatbot_name: chatSession.chatbot_name,
    message: randomResponse,
    sender_type: 'BOT',
    chatroom_id: chatSession.chatroom_id,
    chatbot_profile_image: '/tudag.png',
    heart_life: newHeartLife,
    current_distance: Math.max(0, newDistance),
    turn_count: currentTurnCount - 1,
    score: Math.floor(Math.random() * 4) + 1,
  };
};
