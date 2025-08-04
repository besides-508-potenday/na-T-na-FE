import { CardHeader } from '@/components/CardHeader';

function CharacterLoadingFallback() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* 전체 컨테이너 */}
      <div className="flex flex-col justify-between items-center gap-[34px] px-4 pt-[60px] pb-[60px]">
        {/* 메인 카드 */}
        <div className="w-full max-w-sm flex flex-col items-center bg-[#DAF1FE] border-2 border-[#7538C5] rounded-[32px] shadow-[4px_4px_4px_0px_rgba(117,56,197,0.25)]">
          {/* 헤더 */}
          <CardHeader message="로딩중..." />

          {/* 바디 */}
          <div className="flex-1 flex flex-col items-center gap-7 px-4 py-5 w-full">
            {/* 제목 섹션 */}
            <div className="flex flex-col items-center gap-1 w-full py-2">
              <h1
                className="text-[#18181B] text-[26px] font-semibold leading-[1.19] text-center"
                style={{ fontFamily: 'Pretendard' }}
              >
                투닥이가
                <br />
                편지를 쓰는 중이에요
              </h1>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <h1
                className="text-[#18181B] text-[16px] font-semibold leading-[1.19] text-center"
                style={{ fontFamily: 'Pretendard' }}
              >
                잠시만 기다려주세요
              </h1>
            </div>
            <div className="flex flex-col items-center gap-1 w-full pb-10">
              <img
                src="/Group.png"
                alt="투닥이"
                className="w-[210px] h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterLoadingFallback;
