import { ChevronLeftIcon, ChevronRightIcon } from '@/assets/icons';

export const CharacterSelectField = () => {
  return (
    <div className="flex items-center justify-between w-full">
      {/* 왼쪽 화살표 */}
      <button className="w-12 h-12 flex items-center justify-center">
        <ChevronLeftIcon size={32} fill="#18181B" />
      </button>

      {/* 캐릭터 이미지 */}
      <div className="w-[210px] h-[210px] bg-[#EFFFD3] border-[#AAFE75] border-[3px]  rounded-full flex items-center justify-center overflow-hidden">
        <img src="/tudag.png" alt="투닥이" className=" object-cover" />
      </div>

      {/* 오른쪽 화살표 */}
      <button className="w-12 h-12 flex items-center justify-center">
        <ChevronRightIcon size={32} fill="#18181B" />
      </button>
    </div>
  );
};
