/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import MyMessageBubble from "../ui/components/MyMessageBubble";
import AiMessageBubble from "../ui/components/AiMessageBubble";

interface MessageContainerProps {
  messageList: any[];
  user: any;
}

const MessageContainer = ({ messageList, user }: MessageContainerProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <div className="h-full overflow-y-auto space-y-4">
      {messageList.map((message, index) => {
        const userName = message?.user?.name;
        const isSystem = userName === "system";
        const isMyMessage = userName === user?.name;
        const isOtherMessage = !isSystem && !isMyMessage;

        const showAvatar =
          isOtherMessage &&
          (index === 0 ||
            messageList[index - 1].user?.name === user?.name ||
            messageList[index - 1].user?.name === "system");

        if (isSystem) {
          return (
            <div
              key={message._id}
              className="flex justify-center items-center py-2"
            >
              <div className="bg-muted/60 rounded-full px-4 py-1 text-sm text-muted-foreground">
                {message.chat}
              </div>
            </div>
          );
        }

        if (isMyMessage) {
          return (
            <div key={message._id} className="flex justify-end">
              <MyMessageBubble>{message.chat}</MyMessageBubble>
            </div>
          );
        }

        return (
          <div key={message._id} className="flex items-start gap-1">
            {/* 프로필 */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-7 h-7 rounded-full bg-[#95CDFE] border border-[#2C55C7] flex items-center justify-center",
                  !showAvatar && "invisible"
                )}
              >
                <img
                  src="/tudak2.png"
                  alt="투닥이"
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
                    style={{ fontFamily: "Pretendard" }}
                  >
                    투닥이
                  </span>
                </div>
              )}

              {/* 메시지 버블 */}
              <AiMessageBubble>{message.chat}</AiMessageBubble>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageContainer;
