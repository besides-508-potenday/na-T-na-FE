/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import socket from '@/server';
import InputField from '@/modules/chat/components/InputField';
import MessageContainer from '@/modules/chat/components/MessageContainer';
import LayoutCard from '@/components/LayoutCard';
import { useAppStore } from '@/store';
import type { ClientMessage, MessageData } from '@/types';

function Chat() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState<any[]>([]);
  const [currentHearts, setCurrentHearts] = useState(5); // 하트 상태 관리
  const { chatSession } = useAppStore();
  console.log({ chatSession, message });
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

    // 서버에서 오는 모든 메시지 처리 (사용자 메시지 + 봇 메시지)
    socket.on('message', (messageData: MessageData) => {
      console.log('메시지 받음:', messageData);

      // 메시지 리스트에 추가할 형식으로 변환
      const newMessage = {
        user: {
          name:
            messageData.sender_type === 'USER'
              ? messageData.user_nickname
              : messageData.chatbot_name,
          id:
            messageData.sender_type === 'USER'
              ? messageData.user_id
              : messageData.chatbot_id,
        },
        message: messageData.message,
        sender_type: messageData.sender_type,
        score: messageData.score,
        reaction_image: messageData.reaction_image,
        chatbot_profile_image: messageData.chatbot_profile_image,
      };

      setMessageList((prev) => prev.concat(newMessage));

      // 봇 메시지인 경우 하트, 거리, 턴 수 업데이트
      if (
        messageData.sender_type === 'BOT' &&
        messageData.heart_life !== undefined
      ) {
        setCurrentHearts(messageData.heart_life);
      }
    });

    // 에러 수신 처리
    socket.on('message_error', (err: { error: string }) => {
      console.error('메시지 에러:', err?.error);
    });

    return () => {
      socket.off('message');
      socket.off('message_error');
    };
  }, [chatSession]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!chatSession || !message.trim()) return;

    // 서버에 새로운 형식으로 메시지 전송
    const clientMessage: ClientMessage = {
      chatbot_id: chatSession.chatbot_id,
      message: message,
      sender_type: 'USER',
      chatroom_id: chatSession.chatroom_id,
      user_id: chatSession.user_id,
    };

    socket.emit('send_message', clientMessage);

    setMessage('');
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
