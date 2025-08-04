import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SquareIcon,
  XIcon,
} from '@/assets/icons';
import { Minus } from 'lucide-react';

export const CardHeader = ({ message }: { message: string }) => {
  return (
    <div className="w-full bg-[#C6CAFE] border-b-2 border-[#7538C5] rounded-t-[30px] px-4 py-3 flex items-center gap-2">
      {/* 좌측 네비게이션 */}
      <div className="flex items-center gap-1">
        <ChevronLeftIcon size={18} fill="#18181B" />
        <ChevronRightIcon size={18} fill="#18181B" />
      </div>

      {/* 중앙 주소창/상태 */}
      <div className="flex-1 flex justify-center">
        <div className="bg-white/50 border-[1.5px] border-[#9E85FD] rounded px-13 py-1">
          <span
            className="text-[#18181B] text-lg font-semibold"
            style={{ fontFamily: 'Pretendard' }}
          >
            {message}
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
  );
};
