/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import socket from '@/server';
import InputField from '@/modules/chat/components/InputField';
import MessageContainer from '@/modules/chat/components/MessageContainer';
import LayoutCard from '@/components/LayoutCard';
import { useAppStore } from '@/store';
import type { ClientMessage, MessageData } from '@/types';
import { useNavigate } from 'react-router';

function Chat() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState<any[]>([]);
  const [currentHearts, setCurrentHearts] = useState(5); // 하트 상태 관리
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);
  const { chatSession } = useAppStore();
  const navigate = useNavigate();

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
    socket.on('answer', (data: any) => {
      const messageData: MessageData = data.data;
      console.log('메시지 받음:', messageData);

      // 메시지 리스트에 추가할 형식으로 변환
      const newMessage = {
        user: {
          name: messageData.chatbot_name,
          id: messageData.chatbot_id,
        },
        message: messageData.message,
        sender_type: messageData.sender_type,
        score: messageData.score,
        reaction_image: messageData.reaction_image,
        chatbot_profile_image: messageData.chatbot_profile_image,
      };
      setMessageList((prev) => prev.concat(newMessage));

      // 봇 메시지인 경우 하트, 거리, 턴 수 업데이트
      if (messageData.sender_type === 'BOT') {
        if (messageData.heart_life !== undefined) {
          setCurrentHearts(messageData.heart_life);
        }
        // BOT 응답 수신 시 입력 가능 상태로 전환
        setIsWaitingResponse(false);
      }

      if (messageData.turn_count === 0) {
        setTimeout(() => {
          navigate(`/result/${messageData.chatroom_id}`);
        }, 4000);
      }
    });

    socket.on('quiz', (data: any) => {
      const quizData = data.data;
      console.log('퀴즈 받음:', quizData);
      const newQuiz = {
        user: {
          name: quizData.chatbot_name,
          id: quizData.chatbot_id,
        },
        message: quizData.message,
        sender_type: quizData.sender_type,
      };
      setMessageList((prev) => prev.concat(newQuiz));
    });

    // 에러 수신 처리
    socket.on('policy_error', (err) => {
      console.log('에러 받음:', err);
      console.error('메시지 에러:', err?.error);
      toast.error(err?.error ?? '부적절한 메시지가 감지되었어요.');
      // 에러 수신 시 입력 가능 상태로 전환
      setIsWaitingResponse(false);
    });

    return () => {
      socket.off('answer');
      socket.off('policy_error');
    };
  }, [chatSession, navigate]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    // 60자 초과 방지 가드
    if (!chatSession || !message.trim() || message.length > 60) return;

    // 서버에 새로운 형식으로 메시지 전송
    const clientMessage: ClientMessage = {
      chatbot_id: chatSession.chatbot_id,
      message: message,
      sender_type: 'USER',
      chatroom_id: chatSession.chatroom_id,
      user_id: chatSession.user_id,
    };
    setMessageList((prev) => prev.concat(clientMessage));

    socket.emit('answer', clientMessage);

    setMessage('');
    // 전송 후 응답 대기 상태 진입
    setIsWaitingResponse(true);
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
          <Toaster
            position="bottom-center"
            offset={240}
            richColors
            toastOptions={{
              classNames: {
                toast:
                  'rounded-xl border border-[#FFB8C8] bg-[#FFF0F4] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] px-3 p-2',
                title: 'text-[#D81B60] text-sm',
                description: 'text-[#D81B60] text-xs',
                actionButton:
                  'bg-[#D81B60] text-white hover:bg-[#c01756] focus:ring-0',
                cancelButton:
                  'bg-transparent text-[#D81B60] hover:bg-[#FFE3EB]',
              },
            }}
          />
          <InputField
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            disabled={isWaitingResponse}
          />
        </div>
      </div>
    </LayoutCard>
  );
}

export default Chat;
