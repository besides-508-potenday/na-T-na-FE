import { CustomScrollArea, CustomScrollBar } from '@/components/ui/scroll-area';
import { ChatBubbleLetter } from './ChatBubbleLetter';
import { Distance } from './Distance';

export function LetterPage({ children }: { children: React.ReactNode }) {
  return (
    <CustomScrollArea className="h-[540px] w-full " type="always">
      <div className="flex flex-col  gap-1 mb-10">
        <div
          className="text-[24px] font-normal text-[#18181B]"
          style={{ fontFamily: 'DungGeunMo' }}
        >
          *보내는 사람*: 투닥이
        </div>
        <div
          className="text-[24px] font-normal text-[#18181B]"
          style={{ fontFamily: 'DungGeunMo' }}
        >
          *받는 사람*: 사용자 네임
        </div>
      </div>
      <div className="w-full flex justify-center mb-6 pr-8">
        <img
          src="/투닥이2.png"
          alt="투닥이"
          className="w-full max-w-[210px] h-auto"
        />
      </div>

      <Distance />
      <ChatBubbleLetter
        userName="John"
        chatbotName="Jane"
        letterContent={children as string}
      />
      <CustomScrollBar />
    </CustomScrollArea>
  );
}
