import { useParams } from 'react-router';
import ResultLayoutCard from '@/modules/result/ui/ResultLayoutCard';
import { LetterPage } from '@/modules/result/ui/LetterPage';
import { RefreshButton } from '@/modules/result/components/RefreshButton';
import { AudioPlayButton } from '@/modules/result/components/AudioPlayButton';
import { ShareResultButton } from '@/modules/result/components/ShareResultButton';
import { useLetterData } from '@/hooks/useCharacters';

import Error from '@/components/Error';
import FallbackWritting from '@/components/FallbackWritting';

function Result() {
  const { chatroom_id } = useParams<{ chatroom_id: string }>();
  const { data: letterData, isLoading, isError } = useLetterData(chatroom_id);
  console.log('letterData', letterData);
  if (isLoading) {
    return <FallbackWritting />;
  }

  if (isError || !letterData) {
    return <Error />;
  }

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
          <ShareResultButton />
          <RefreshButton />
        </div>

        {/* 두 번째 줄 - 오디오 플레이 버튼 */}
        <div className="flex px-3">
          <AudioPlayButton letterMp3={letterData.letter_mp3} />
        </div>
      </div>
    </ResultLayoutCard>
  );
}

export default Result;
