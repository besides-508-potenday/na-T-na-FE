import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SquareIcon,
  XIcon,
} from '@/assets/icons';
import { Minus } from 'lucide-react';

export const CardHeader = ({ message }: { message: string }) => {
  return (
    <div className="w-full bg-[#C6CAFE] rounded-t-[30px] px-4 py-3 flex items-center gap-2">
      {/* 좌측 네비게이션 */}
      <div className="flex items-center gap-2">
        <ChevronLeftIcon size={18} fill="#7538C5" />
        <ChevronRightIcon size={18} fill="#7538C5" />
      </div>

      {/* 중앙 주소창/상태 */}
      <div className="flex-1 flex justify-center px-3">
        <div className="bg-white/50 border-[2px] border-[#9E85FD] w-full rounded px-4">
          <span
            className="text-[#7538C5] text-xl font-normal"
            style={{ fontFamily: 'DungGeunMo' }}
          >
            {message}
          </span>
        </div>
      </div>

      {/* 우측 윈도우 컨트롤 */}
      <div className="flex items-center gap-4">
        <Minus className="w-6 h-6 text-[#7538C5]" />
        <SquareIcon size={18} fill="#7538C5" />
        <XIcon size={18} fill="#7538C5" />
      </div>
    </div>
  );
};
