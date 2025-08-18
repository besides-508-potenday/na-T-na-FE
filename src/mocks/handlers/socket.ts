/* eslint-disable @typescript-eslint/no-explicit-any */
import { createJoinRoomResponse, createBotResponse } from '../data/responses';
import type { ChatInitResponse, ClientMessage } from '@/types';

// 가짜 소켓 클래스
class MockSocket {
  private listeners: { [event: string]: ((...args: any[]) => void)[] } = {};
  private currentChatSession: ChatInitResponse | null = null;
  private currentTurnCount = 9;

  // 이벤트 리스너 등록
  on(event: string, callback: (...args: any[]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  // 이벤트 리스너 제거
  off(event: string, callback?: (...args: any[]) => void) {
    if (!this.listeners[event]) return;

    if (callback) {
      this.listeners[event] = this.listeners[event].filter(
        (cb) => cb !== callback
      );
    } else {
      delete this.listeners[event];
    }
  }

  // 이벤트 발생
  emit(event: string, data: any, acknowledgment?: (response: any) => void) {
    console.log(`[Mock Socket] Emitting event: ${event}`, data);

    if (event === 'join_room') {
      // join_room 이벤트 처리
      const { user_nickname, chatbot_id } = data;

      // 응답 데이터 생성
      const responseData = createJoinRoomResponse(user_nickname, chatbot_id);
      this.currentChatSession = responseData;
      this.currentTurnCount = responseData.turn_count;

      // acknowledgment 콜백 실행
      if (acknowledgment) {
        setTimeout(() => {
          acknowledgment({
            data: responseData,
          });
        }, 500); // 네트워크 지연 시뮬레이션
      }
    } else if (event === 'answer') {
      // answer 이벤트 처리 (사용자 메시지 전송)
      const messageData: ClientMessage = data;

      if (this.currentChatSession) {
        // 정책 오류 체크
        if (this.triggerPolicyError(messageData.message)) {
          return; // 부적절한 메시지인 경우 더 이상 진행하지 않음
        }

        // 사용자 메시지를 먼저 전송
        setTimeout(() => {
          this.triggerEvent('answer', {
            data: {
              ...messageData,
              user_nickname: this.currentChatSession?.user_nickname,
              chatbot_name: this.currentChatSession?.chatbot_name,
              sender_type: 'USER',
              chatbot_profile_image:
                this.currentChatSession?.chatbot_profile_image,
            },
          });
        }, 100);

        // 봇 응답 생성 및 전송
        setTimeout(() => {
          const botResponse = createBotResponse(
            messageData.message,
            this.currentChatSession!,
            this.currentTurnCount
          );

          this.currentTurnCount = botResponse.turn_count || 0;

          this.triggerEvent('answer', {
            data: botResponse,
          });

          // 턴 카운트가 0이면 게임 종료
          if (this.currentTurnCount <= 0) {
            console.log('[Mock Socket] 게임 종료 - 결과 페이지로 이동');
          }
        }, 1000 + Math.random() * 2000); // 1-3초 사이 랜덤 지연
      }
    }
  }

  // 이벤트 트리거 (서버에서 클라이언트로 이벤트 전송 시뮬레이션)
  private triggerEvent(event: string, data: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => {
        callback(data);
      });
    }
  }

  // 정책 오류 시뮬레이션 (부적절한 메시지 감지)
  triggerPolicyError(message: string) {
    const inappropriateKeywords = ['욕설', '비방', '혐오'];
    const hasInappropriateContent = inappropriateKeywords.some((keyword) =>
      message.includes(keyword)
    );

    if (hasInappropriateContent) {
      setTimeout(() => {
        this.triggerEvent('policy_error', {
          error: '부적절한 메시지가 감지되었어요. 다시 입력해주세요.',
        });
      }, 500);
      return true;
    }
    return false;
  }
}

// 싱글톤 패턴으로 모킹 소켓 인스턴스 생성
export const mockSocket = new MockSocket();

// 원래 소켓을 모킹 소켓으로 대체하는 함수
export const setupSocketMock = () => {
  console.log('[Mock Socket] Socket.IO 모킹이 활성화되었습니다.');
  return mockSocket;
};
