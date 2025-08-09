/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import MyMessageBubble from '../ui/components/MyMessageBubble';
import AiMessageBubble from '../ui/components/AiMessageBubble';
import HeartBar from './HeartBar';

interface MessageContainerProps {
  messageList: any[];
  currentHearts?: number;
}

const MessageContainer = ({
  messageList,
  currentHearts = 5,
}: MessageContainerProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <div className="h-full flex flex-col custom-scrollbar max-h-[640px]">
      {/* 하트 바 */}
      <div className="flex-shrink-0 pt-8">
        <HeartBar currentHearts={currentHearts} />
      </div>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto space-y-4 pt-4">
        {messageList.map((message, index) => {
          const isSystem = message.user?.name === 'system';
          const isUserMessage = message.sender_type === 'USER';
          const isBotMessage = message.sender_type === 'BOT';

          const showAvatar =
            isBotMessage &&
            (index === 0 ||
              messageList[index - 1].sender_type === 'USER' ||
              messageList[index - 1].user?.name === 'system');

          if (isSystem) {
            return (
              <div
                key={message._id || index}
                className="flex justify-center items-center py-2"
              >
                <div className="bg-muted/60 rounded-full px-4 py-1 text-sm text-muted-foreground">
                  {message.message || message.chat}
                </div>
              </div>
            );
          }

          if (isUserMessage) {
            return (
              <div key={message._id || index} className="flex justify-end px-4">
                <MyMessageBubble>
                  {message.message || message.chat}
                </MyMessageBubble>
              </div>
            );
          }

          // 봇 메시지의 경우 reaction_image가 있으면 캐릭터 이미지 표시
          const showCharacter = message.reaction_image;

          return (
            <div
              key={message._id || index}
              className="flex items-start gap-1 px-4"
            >
              {/* 프로필 */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-7 h-7 rounded-full bg-[#EFFFD3] border-[#AAFE75] border  flex items-center justify-center',
                    !showAvatar && 'invisible'
                  )}
                >
                  <img
                    src={message.chatbot_profile_image || '/tudag.png'}
                    alt={message.user?.name || '챗봇'}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </div>

              {/* 채팅 영역 */}
              <div className="flex flex-col">
                {/* 이름 */}
                {showAvatar && (
                  <div className="px-1 mb-1">
                    <span
                      className="text-xs font-semibold text-black"
                      style={{ fontFamily: 'Pretendard' }}
                    >
                      {message.user?.name || '투닥이'}
                    </span>
                  </div>
                )}
                {/* 리액션 이미지 (서버에서 제공되는 경우) */}
                {showCharacter && (
                  <div className="py-4 ml-2">
                    <img
                      src={message.reaction_image || '/tudag.png'}
                      alt="리액션"
                      className="w-24 h-full object-cover"
                    />
                  </div>
                )}

                {/* 메시지 버블 */}
                <AiMessageBubble>
                  {message.message || message.chat}
                </AiMessageBubble>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageContainer;
