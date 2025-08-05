import { StepIcon } from '@/assets/icons';

interface IntroButtonProps {
  onClick?: () => void;
}

export default function NickNameConfirmButton({ onClick }: IntroButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#95CDFE] border-l-[3px] border-b-[3px] border-[#2C55C7] rounded-md px-5 py-4 flex items-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#759CFE]  active:bg-[#2C55C7] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]"
    >
      <StepIcon size={24} fill="#18181B" />
      <span
        className="flex-1 text-[24px] font-normal text-[#18181B] text-center"
        style={{ fontFamily: 'DungGeunMo' }}
      >
        완료
      </span>
    </button>
  );
}
