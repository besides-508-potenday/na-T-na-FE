import { StepIcon } from '@/assets/icons';

export default function IntroButton() {
  return (
    <button className="w-full bg-[#FC89BA] border-r-[2.5px] border-b-[2.5px] border-[#FF5D94] rounded-lg px-20 py-5 flex items-center gap-2 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#FB7BB1] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]">
      <StepIcon size={32} fill="#18181B" />
      <span className="flex-1 pl-5 text-2xl font-normal text-[#18181B] text-center">
        시작하기
      </span>
    </button>
  );
}
