/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import socket from '@/server';
import InputField from '@/modules/chat/components/InputField';
import MessageContainer from '@/modules/chat/components/MessageContainer';
import LayoutCard from '@/components/LayoutCard';
import { useAppStore } from '@/store';

function Chat() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState<any[]>([]);
  const [currentHearts, setCurrentHearts] = useState(5); // 하트 상태 관리
  const { chatSession } = useAppStore();

  useEffect(() => {
    // 초기 메시지 설정
    if (chatSession) {
      const initialMessage = {
        user: {
          name: chatSession.chatbot_name,
          id: chatSession.chatbot_id,
        },
        message: chatSession.message,
        sender_type: chatSession.sender_type,
      };
      setMessageList([initialMessage]);
      setCurrentHearts(chatSession.heart_life);
    }

    socket.on('message', (message) => {
      setMessageList((prev) => prev.concat(message));
    });

    return () => {
      socket.off('message');
    };
  }, [chatSession]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit('sendMessage', message, (res: any) => {
      console.log('send message response', res);
    });
    setMessage('');

    // 랜덤하게 하트 변화 시뮬레이션 (실제로는 게임 로직에 따라 변경)
    if (Math.random() > 0.8) {
      setCurrentHearts((prev) =>
        Math.max(0, Math.min(10, prev + (Math.random() > 0.5 ? 1 : -1)))
      );
    }
  };

  return (
    <LayoutCard headerMessage="채팅중" bgColor="#DAF1FE">
      {/* 채팅 영역 */}
      <div className="flex-1  flex flex-col overflow-hidden">
        {/* 메시지 리스트 - 스크롤 */}
        <div className="flex-1 overflow-hidden">
          <MessageContainer
            messageList={messageList}
            currentHearts={currentHearts}
          />
        </div>

        <div className="flex-shrink-0 px-4 pb-4 pt-2 ">
          <InputField
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </LayoutCard>
  );
}

export default Chat;
