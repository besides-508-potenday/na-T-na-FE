import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// MSW 브라우저 워커 설정
export const worker = setupWorker(...handlers);

// 워커 시작 함수
export const startMSW = async () => {
  if (process.env.NODE_ENV === 'development') {
    try {
      await worker.start({
        onUnhandledRequest: 'bypass', // 처리되지 않은 요청은 그대로 통과
      });
      console.log('[MSW] 모킹이 활성화되었습니다.');
    } catch (error) {
      console.error('[MSW] 워커 시작 실패:', error);
    }
  }
};
