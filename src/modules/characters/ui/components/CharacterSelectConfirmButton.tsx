import { StepIcon } from '@/assets/icons';
import { useAppStore } from '@/store';
import { useNavigate } from 'react-router';

const CharacterSelectConfirmButton = () => {
  const navigate = useNavigate();
  const { selectedCharacter } = useAppStore();

  const handleClick = () => {
    if (selectedCharacter) {
      navigate('/chat');
    }
  };

  const isDisabled = !selectedCharacter;

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`w-full rounded-md px-5 py-4 flex items-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 ${
        isDisabled
          ? 'bg-gray-300 border-l-[3px] border-b-[3px] border-gray-400 cursor-not-allowed opacity-60'
          : 'bg-[#95CDFE] border-l-[3px] border-b-[3px] border-[#2C55C7] hover:bg-[#759CFE] active:bg-[#2C55C7] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px] cursor-pointer'
      }`}
    >
      <StepIcon size={24} fill={isDisabled ? '#9CA3AF' : '#18181B'} />

      <span
        className={`text-[24px] leading-[1em] font-normal text-center ${
          isDisabled ? 'text-gray-500' : 'text-[#18181B]'
        }`}
        style={{ fontFamily: 'DungGeunMo' }}
      >
        이 친구랑 대화할래요
      </span>
    </button>
  );
};

export default CharacterSelectConfirmButton;
