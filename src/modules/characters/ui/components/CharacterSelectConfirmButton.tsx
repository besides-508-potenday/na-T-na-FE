import { StepIcon } from '@/assets/icons';
import { useNavigate } from 'react-router';

const CharacterSelectConfirmButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat'); // 원하는 경로로 변경하세요
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-[#95CDFE] border-l-[3px] border-b-[3px] border-[#2C55C7] rounded-md px-5 py-4 flex items-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#85BBFE] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]"
    >
      <StepIcon size={24} fill="#18181B" />

      <span
        className="text-[#18181B] text-[24px] leading-[1em] font-normal text-center"
        style={{ fontFamily: 'DungGeunMo' }}
      >
        이 친구랑 대화할래요
      </span>
    </button>
  );
};

export default CharacterSelectConfirmButton;
