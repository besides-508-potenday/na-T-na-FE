/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import socket from '@/server';
import { useAppStore } from '@/store';
import type { ClientMessage, MessageData } from '@/types';

export function useChat() {
  const navigate = useNavigate();
  const { chatSession } = useAppStore();

  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState<any[]>([]);
  const [currentHearts, setCurrentHearts] = useState(5);
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
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

    socket.on('answer', (data: any) => {
      const messageData: MessageData = data.data;

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

      if (messageData.sender_type === 'BOT') {
        if (messageData.heart_life !== undefined) {
          setCurrentHearts(messageData.heart_life);
        }
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

    socket.on('policy_error', (err) => {
      const receivedErrorMessage =
        err?.error ?? '부적절한 메시지가 감지되었어요.';
      setErrorMessage(receivedErrorMessage);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      setIsWaitingResponse(false);
    });

    return () => {
      socket.off('answer');
      socket.off('quiz');
      socket.off('policy_error');
    };
  }, [chatSession, navigate]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!chatSession || !message.trim() || message.length > 60) return;

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
    setIsWaitingResponse(true);
  };

  return {
    message,
    setMessage,
    messageList,
    currentHearts,
    isWaitingResponse,
    errorMessage,
    showError,
    sendMessage,
  } as const;
}

export default useChat;
