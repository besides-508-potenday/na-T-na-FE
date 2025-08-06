import LayoutCard from '@/components/LayoutCard';
import { PencilIcon } from '@/assets/icons';
function Loading() {
  return (
    <LayoutCard headerMessage="편지지 생성중。。。">
      <div className="flex-1 flex flex-col justify-center items-center gap-10 px-4 z-10">
        {/* 소개 텍스트 */}
        <div className="text-center">
          <p
            className="text-[26px] font-semibold leading-[1.193em] text-[#18181B] flex flex-col justify-center gap-2"
            style={{ fontFamily: 'Pretendard' }}
          >
            투닥이가
            <br />
            <span className="flex items-center gap-2">
              편지를 쓰는 중이에요
              <PencilIcon />
            </span>
          </p>

          <p className="pt-3 text-[22px] font-semibold leading-[1.193em] text-[#71717A]">
            잠시만 기다려주세요...
          </p>
        </div>

        {/* 채팅 애니메이션 */}
        <img src={'/loading.png'} alt="loading" />
      </div>
    </LayoutCard>
  );
}

export default Loading;
