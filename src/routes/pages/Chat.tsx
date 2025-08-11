import InputField from '@/modules/chat/components/InputField';
import MessageContainer from '@/modules/chat/components/MessageContainer';
import LayoutCard from '@/components/LayoutCard';
import { useChat } from '@/hooks/useChat';

function Chat() {
  const {
    message,
    setMessage,
    messageList,
    currentHearts,
    isWaitingResponse,
    errorMessage,
    showError,
    sendMessage,
  } = useChat();

  return (
    <LayoutCard headerMessage="채팅중" bgColor="#DAF1FE">
      {/* 채팅 영역 */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* 메시지 리스트 - 스크롤 */}
        <div className="flex-1 overflow-hidden">
          <MessageContainer
            messageList={messageList}
            currentHearts={currentHearts}
          />
        </div>

        <div className="flex-shrink-0 px-4 pb-4 pt-2 relative">
          {/* 에러 메시지 */}
          {showError && (
            <div
              className={`absolute left-5 right-5 rounded-[5px] border-[2px] text-[#D81B60] border-[#FFB8C8] bg-[#FFF0F4] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] px-3 p-3 ${
                showError
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-2'
              }`}
              style={{ bottom: 'calc(100% + 4px)' }}
            >
              <p className="text-sm font-medium ">{errorMessage}</p>
            </div>
          )}
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
