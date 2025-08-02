import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

interface MessageContainerProps {
  messageList: any[];
  user: any;
}

const MessageContainer = ({ messageList, user }: MessageContainerProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <div className="h-full overflow-y-auto p-4 space-y-2">
      {messageList.map((message, index) => {
        const isSystem = message.user.name === 'system';
        const isMyMessage = message.user.name === user.name;
        const isOtherMessage = !isSystem && !isMyMessage;

        // Profile image visibility logic for other users' messages
        const showAvatar =
          isOtherMessage &&
          (index === 0 ||
            messageList[index - 1].user.name === user.name ||
            messageList[index - 1].user.name === 'system');

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
            <div key={message._id} className="flex justify-end mr-3 mb-2">
              <div className="bg-indigo-600 text-primary-foreground rounded-lg px-3 py-2 max-w-xs text-sm">
                {message.chat}
              </div>
            </div>
          );
        }

        return (
          <div
            key={message._id}
            className="flex items-start space-x-2 ml-3 mb-2"
          >
            <Avatar className={cn('w-9 h-9', !showAvatar && 'invisible')}>
              <AvatarImage src="/profile.jpeg" alt="Profile" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="bg-[#262727] text-white rounded-lg px-3 py-2 max-w-xs text-sm shadow-sm">
              {message.chat}
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageContainer;
