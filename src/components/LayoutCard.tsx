import { CardHeader } from '@/components/CardHeader';

import { GridPattern } from './GridPattern';

export default function LayoutCard({
  children,
  headerMessage,
  bgColor = '#FFFFFF',
  error = false,
}: {
  children: React.ReactNode;
  headerMessage: string;
  bgColor?: string;
  error?: boolean;
}) {
  return (
    <div className="w-full h-full">
      {/* 상단 여백 */}

      <div className="px-4 h-full flex flex-col gap-[34px]">
        {/* 메인 카드 */}
        <div
          className="flex-1 flex flex-col items-center border-[5px] rounded-[36px] shadow-[4px_4px_4px_0px_rgba(117,56,197,0.25)] pb-2"
          style={{
            backgroundColor: error ? '#FC89BA' : '#C6CAFE',
            borderColor: error ? '#FF4282' : '#7538C5',
          }}
        >
          {/* 헤더 */}
          <CardHeader message={headerMessage} error={error} />
          {/* Body */}
          <div className="flex-1 w-full px-2.5">
            <div
              className="w-full h-full rounded-t-[4px] rounded-b-[24px] border-[4px] relative overflow-hidden flex flex-col justify-between items-center"
              style={{
                borderColor: error ? '#7538C5' : '#FC89BA',
                backgroundColor: bgColor,
              }}
            >
              {/* 격자 패턴 배경 */}
              <GridPattern />
              {/* 콘텐츠 */}
              <div className="relative z-10 w-full h-full flex flex-col">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
