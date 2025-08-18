import { io } from 'socket.io-client';
import { setupSocketMock } from './mocks/handlers/socket';

// 개발 환경에서는 모킹 소켓 사용, 프로덕션에서는 실제 소켓 사용
const socket =
  process.env.NODE_ENV === 'development'
    ? setupSocketMock() || io('https://www.distance-from-f.click')
    : io('https://www.distance-from-f.click');

export default socket;
