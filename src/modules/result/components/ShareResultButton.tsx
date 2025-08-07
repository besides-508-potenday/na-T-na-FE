import { DotMailIcon } from '@/assets/icons';

export function ShareResultButton() {
  return (
<button className="flex-1 bg-[#95CDFE] border-l-[2px] border-b-[2px] border-[#2C55C7] rounded-md px-3 py-4 flex items-center justify-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#759CFE]  active:bg-[#2C55C7] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]">
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
