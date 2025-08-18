import { httpHandlers } from './http';

// 모든 핸들러를 통합하여 내보내기
export const handlers = [
  ...httpHandlers,
  // 추가적인 핸들러들이 있다면 여기에 추가
];
