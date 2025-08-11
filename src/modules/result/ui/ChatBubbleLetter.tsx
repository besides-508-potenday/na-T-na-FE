interface ChatBubbleLetterProps {
  userName: string;
  chatbotName: string;
  letterContent: string;
  fromChatbot: string;
}

export function ChatBubbleLetter({
  userName,
  chatbotName,
  letterContent,
  fromChatbot,
}: ChatBubbleLetterProps) {
  return (
    <div className="relative flex flex-col items-stretch gap-2.5 py-3 pl-3 pr-6 w-full max-w-[350px]">
      {/* 메인 말풍선 */}
      <div
        className="relative flex flex-col items-center gap-2 px-4 pt-4 pb-0  border-2 shadow-sm"
        style={{
          backgroundColor: '#FFFEF3',
          borderColor: '#F1C983',
        }}
      >
        {/* 편지 내용 컨테이너 */}
        <div className="flex flex-col items-center text-[16px] gap-4 w-full">
          {/* 인사말 */}
          <p
            className="w-full text-left font-medium leading-5"
            style={{
              fontFamily: 'Pretendard',
              color: '#18181B',
            }}
          >
            안녕 {userName}!
          </p>

          {/* 편지 본문 */}
          <p
            className="w-full text-left font-medium leading-5"
            style={{
              fontFamily: 'Pretendard',
              color: '#18181B',
            }}
          >
            {letterContent}
          </p>

          {/* 서명 */}
          <p
            className="w-full text-right font-medium leading-5 pb-3"
            style={{
              fontFamily: 'Pretendard',
              color: '#18181B',
            }}
          >
            {fromChatbot.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < fromChatbot.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* 캐릭터 이름 태그 */}
      <div
        className="absolute -top-0.5 left-1 flex items-center justify-center gap-2.5 px-2 py-1 rounded-full border-[1.5px]"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#00D692',
        }}
      >
        <span
          className="text-base font-semibold leading-5"
          style={{
            fontFamily: 'Pretendard',
            color: '#18181B',
          }}
        >
          {chatbotName}
        </span>
      </div>
    </div>
  );
}
