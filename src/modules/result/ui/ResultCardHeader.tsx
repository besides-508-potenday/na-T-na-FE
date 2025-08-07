import {
  DotHeartIcon,
  DotBluetoothIcon,
  DotSpeakerIcon,
  DotSpotIcon,
  DotBatteryIcon,
} from '@/assets/icons';

export const ResultCardHeader = ({ message }: { message: string }) => {
  return (
    <div
      className={`w-full rounded-t-[30px] px-4 py-3 flex items-center gap-2 ${'bg-[#C6CAFE]'}`}
    >
      {/* 좌측 네비게이션 */}
      <div className="flex items-center gap-2">
        <DotHeartIcon size={24} />
        <DotSpeakerIcon size={24} />
      </div>

      {/* 중앙 주소창/상태 */}
      <div className="flex-1 flex justify-center px-3">
        <div
          className={`bg-white/50 border-[2px] w-full rounded px-4 ${'border-[#9E85FD]'}`}
        >
          <span
            className={`text-xl font-normal ${'text-[#7538C5]'}`}
            style={{ fontFamily: 'DungGeunMo' }}
          >
            {message}
          </span>
        </div>
      </div>

      {/* 우측 윈도우 컨트롤 */}
      <div className="flex items-center gap-4">
        <DotBluetoothIcon size={24} />
        <DotSpotIcon size={24} />
        <DotBatteryIcon size={24} />
      </div>
    </div>
  );
};
