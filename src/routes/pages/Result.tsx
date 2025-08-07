import ResultLayoutCard from '@/modules/result/ui/ResultLayoutCard';
import { LetterPage } from '@/modules/result/ui/LetterPage';
import { RefreshButton } from '@/modules/result/components/RefreshButton';
import { AudioPlayButton } from '@/modules/result/components/AudioPlayButton';
import { ShareResultButton } from '@/modules/result/components/ShareResultButton';

function Result() {
  const longMessage = `안녕 {name}!
오늘 우리 대화하면서 많은 생각을 하게 됐어. 네가 나를 걱정해주고 위로해주는 모습 보면서 감동받았어. 😢 특히 내가 친구 생일 파티 준비로 스트레스 받을 때 “너무 걱정하지 마”라고 해줬던 그 말이 정말 큰 힘이 되었어. 근데 또 한편으로는 내가 자꾸 부정적인 얘기만 해서 네가 좀 지쳤겠다 싶은 생각도 들어. 미안하기도 하고...  

내가 고민 많고 불안해서 네게 투정 부리는 것처럼 느껴질 수도 있었을 텐데 끝까지 내 이야기 들어주어서 고마워. 그리고 내가 계속 의심하고 불안해할 때 넌 매번 “의심하지 마!”라며 용기를 북돋아 줬잖아. 그게 참 인상 깊었어.
힘들었던 하루 끝에, 
{chatbot name}`;

  return (
    <ResultLayoutCard headerMessage="받은 메세지">
      <div className="w-full flex justify-center px-2 pt-2">
        <LetterPage>{longMessage}</LetterPage>
      </div>
      <div className="flex flex-col gap-2 mt-8 mb-4">
        {/* 첫 번째 줄 */}
        <div className="flex gap-2.5 px-3">
          <ShareResultButton />
          <RefreshButton />
        </div>

        {/* 두 번째 줄 */}
        <div className="flex px-3">
          <AudioPlayButton />
        </div>
      </div>
    </ResultLayoutCard>
  );
}

export default Result;
