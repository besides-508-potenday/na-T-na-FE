import { BlueSpotIcon, GreenStonesIcon, RedSpotIcon } from '@/assets/pictures';

export function Distance() {
  return (
    <div className="flex flex-col items-center w-full relative mb-3 ">
      {/* 상단 텍스트 */}
      <div
        className="text-center text-black text-[22px] leading-[1em] mr-8"
        style={{ fontFamily: 'DungGeunMo' }}
      >
        나와 투닥이의 거리는..!
      </div>

      {/* 중간 거리 표시 영역 */}
      <div className="flex items-center justify-between w-full px-2 relative">
        {/* 좌측 빨간 스팟 */}
        <div className="flex-shrink-0 ml-12">
          <RedSpotIcon size={40} height={60} />
        </div>
        {/* 하단 거리 텍스트 */}
        <div
          className="absolute bottom-0 text-center text-black text-[30px] pb-5 pr-10 leading-[1em] w-full"
          style={{ fontFamily: 'DungGeunMo' }}
        >
          <span className="text-[#FF5CA4]">100</span>M
        </div>
        {/* 가운데 초록색 돌들 */}
        <div className="flex-1 flex justify-center items-end pt-15">
          <GreenStonesIcon size={165} height={20} />
        </div>

        {/* 우측 파란 스팟 */}
        <div className="flex-shrink-0 mr-18">
          <BlueSpotIcon size={40} height={60} />
        </div>
      </div>
    </div>
  );
}
