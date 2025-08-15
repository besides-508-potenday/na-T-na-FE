import { DotMailIcon } from '@/assets/icons';
import { shareLink } from '@/lib/share';
import { toast } from 'sonner';

type ShareResultButtonProps = {
  url: string;
  title?: string;
  text?: string;
};

export function ShareResultButton({
  url,
  title,
  text,
}: ShareResultButtonProps) {
  const handleShare = async () => {
    try {
      const outcome = await shareLink({ url, title, text });
      if (outcome === 'shared') {
        toast.success('공유가 완료되었어요.');
      } else {
        toast.success('링크를 복사했어요. 친구에게 붙여넣기 해보세요!');
      }
    } catch {
      toast.error('공유에 실패했어요. 잠시 후 다시 시도해주세요.');
    }
  };
  return (
    <button
      onClick={handleShare}
      className="flex-1 bg-[#95CDFE] border-l-[2px] border-b-[2px] cursor-pointer border-[#2C55C7] rounded-md px-3 py-4 flex items-center justify-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#759CFE]  active:bg-[#2C55C7] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]"
    >
      {' '}
      <DotMailIcon />
      <span
        className="text-xl font-normal text-[#18181B]"
        style={{ fontFamily: 'DungGeunMo' }}
      >
        결과공유
      </span>
    </button>
  );
}
