import { useParams } from 'react-router';
import ResultLayoutCard from '@/modules/result/ui/ResultLayoutCard';
import { LetterPage } from '@/modules/result/ui/LetterPage';
import { RefreshButton } from '@/modules/result/components/RefreshButton';
import { AudioPlayButton } from '@/modules/result/components/AudioPlayButton';
import { ShareResultButton } from '@/modules/result/components/ShareResultButton';
import { useLetterData } from '@/hooks/useCharacters';
import { Toaster } from '@/components/ui/sonner';

import Error from '@/components/Error';
import FallbackWritting from '@/components/FallbackWritting';

function Result() {
  const { chatroom_id } = useParams<{ chatroom_id: string }>();
  const { data: letterData, isLoading, isError } = useLetterData(chatroom_id);

  if (isLoading) {
    return <FallbackWritting />;
  }

  if (isError || !letterData) {
    return <Error />;
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const shareUrl = `${origin}/result/${chatroom_id}`;
  const shareTitle = `${letterData.chatbot_name}에게 받은 편지`;
  const shareText = '내 결과를 확인해보세요!';

  return (
    <ResultLayoutCard
      headerMessage={`${letterData.chatbot_name}에게 받은 편지`}
    >
      {/* 편지 내용 */}
      <div className="w-full flex justify-center px-2 pt-2">
        <LetterPage letterData={letterData} />
      </div>

      {/* 버튼들 */}
      <div className="flex flex-col gap-2 mt-8 mb-4">
        {/* 첫 번째 줄 */}
        <div className="flex gap-2.5 px-3">
          <ShareResultButton
            url={shareUrl}
            title={shareTitle}
            text={shareText}
          />
          <RefreshButton />
        </div>

        {/* 두 번째 줄 - 오디오 플레이 버튼 */}
        <div className="flex px-3">
          <AudioPlayButton letterMp3={letterData.letter_mp3} />
        </div>
      </div>
      <Toaster
        position="bottom-center"
        offset={290}
        richColors
        toastOptions={{
          classNames: {
            toast:
              'rounded-xl border border-[#FFB8C8] bg-[#FFF0F4] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] px-3 p-2',
            title: 'text-[#D81B60] text-sm',
            description: 'text-[#D81B60] text-xs',
            actionButton:
              'bg-[#D81B60] text-white hover:bg-[#c01756] focus:ring-0',
            cancelButton: 'bg-transparent text-[#D81B60] hover:bg-[#FFE3EB]',
          },
        }}
      />
    </ResultLayoutCard>
  );
}

export default Result;
