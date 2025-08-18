// import { io } from 'socket.io-client';
import { setupSocketMock } from './mocks/handlers/socket';

// 모든 환경에서 모킹 소켓 사용 (실제 서버 대신 모킹 사용)
const socket = setupSocketMock();

console.log('[Server] MSW 소켓 모킹 사용');

export default socket;
