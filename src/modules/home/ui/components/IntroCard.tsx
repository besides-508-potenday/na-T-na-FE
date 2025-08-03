import { CardHeader } from '@/components/CardHeader';

export default function IntroCard() {
  return (
    <div className="w-full h-full bg-white border-2 border-[#7538C5] rounded-[32px] shadow-[4px_4px_4px_0px_rgba(117,56,197,0.25)] flex flex-col justify-between items-center pb-[70px]">
      {/* 헤더 */}

      <CardHeader message="시작중..." />
      {/* 로고 */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="나티나 로고"
          className="w-[301px] h-[300px] object-contain"
        />
      </div>
    </div>
  );
}
