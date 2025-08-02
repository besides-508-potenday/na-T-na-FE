import { Minus } from 'lucide-react';
import {
  XIcon,
  SquareIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@/assets/icons';

export default function IntroCard() {
  return (
    <div className="w-full h-full bg-white border-2 border-[#7538C5] rounded-[32px] shadow-[4px_4px_4px_0px_rgba(117,56,197,0.25)] flex flex-col justify-between items-center pb-[70px]">
      {/* 헤더 */}
      <div className="w-full bg-[#C6CAFE] border-b-2 border-[#7538C5] rounded-t-[30px] px-4 py-3 flex items-center gap-2">
        {/* 좌측 네비게이션 */}
        <div className="flex items-center gap-1">
          <ChevronLeftIcon size={18} fill="#18181B" />
          <ChevronRightIcon size={18} fill="#18181B" />
        </div>

        {/* 중앙 주소창/상태 */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white/50 border-[1.5px] border-[#9E85FD] rounded px-13 py-1">
            <span className="text-[#18181B] text-lg font-semibold">
              시작중...
            </span>
          </div>
        </div>

        {/* 우측 윈도우 컨트롤 */}
        <div className="flex items-center gap-[7px]">
          <Minus className="w-6 h-6 text-black" />
          <SquareIcon size={18} fill="#18181B" />
          <XIcon size={18} fill="#18181B" />
        </div>
      </div>

      {/* 로고 */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="나트나 로고"
          className="w-[301px] h-[300px] object-contain"
        />
      </div>
    </div>
  );
}
