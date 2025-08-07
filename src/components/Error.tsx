import { StepIcon } from '@/assets/icons';
import LayoutCard from '@/components/LayoutCard';
import { useNavigate } from 'react-router';

function Error() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <LayoutCard headerMessage="/Error" error={true}>
      <div className="flex-1 flex flex-col justify-center items-center gap-10 px-4 z-10">
        {/* 소개 텍스트 */}
        <div className="text-center">
          <p
            className="text-[28px] font-semibold leading-[1.193em] text-[#18181B] flex flex-col justify-center gap-2"
            style={{ fontFamily: 'Pretendard' }}
          >
            앗, 문제가 생겼어요.
            <br />   다시 시도해주세요..!
          </p>
        </div>

        {/* 채팅 애니메이션 */}
        <img src={'/캐릭터.png'} alt="Error" />
      </div>
      <div className="px-7 pb-13">
        <button
          onClick={handleClick}
          className="w-full bg-[#95CDFE] border-l-[3px] border-b-[3px] border-[#2C55C7] rounded-md px-5 py-4 flex items-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#759CFE]  active:bg-[#2C55C7] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]"
        >
          <StepIcon size={32} fill="#18181B" />
          <span
            className="flex-1 text-xl font-normal text-[#18181B] text-center"
            style={{ fontFamily: 'DungGeunMo' }}
          >
            처음으로 돌아가기
          </span>
        </button>
      </div>
    </LayoutCard>
  );
}

export default Error;
