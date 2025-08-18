import { CustomScrollArea, CustomScrollBar } from '@/components/ui/scroll-area';
import { ChatBubbleLetter } from './ChatBubbleLetter';
import { Distance } from './Distance';
import type { LetterData } from '@/types';
import { useAppStore } from '@/store';

export function LetterPage({ letterData }: { letterData: LetterData }) {
  const { nickname } = useAppStore();
  return (
    <CustomScrollArea className="h-[540px] w-full " type="always">
      <div className="flex flex-col  gap-1 mb-10">
        <div
          className="text-[24px] font-normal text-[#18181B]"
          style={{ fontFamily: 'DungGeunMo' }}
        >
          *보내는 사람*: {letterData.chatbot_name}
        </div>
        <div
          className="text-[24px] font-normal text-[#18181B]"
          style={{ fontFamily: 'DungGeunMo' }}
        >
          *받는 사람*: {nickname}
        </div>
      </div>
      <div className="w-full flex justify-center mb-6 pr-8">
        <img
          src={letterData.chatbot_result_image}
          alt={letterData.chatbot_name}
          className="w-full max-w-[210px] h-auto"
        />
      </div>

      <Distance currentDistance={letterData.current_distance} />
      <ChatBubbleLetter
        userName={nickname}
        chatbotName={letterData.chatbot_name}
        letterContent={letterData.letter}
        fromChatbot={letterData.from_chatbot}
      />
      <CustomScrollBar />
    </CustomScrollArea>
  );
}
