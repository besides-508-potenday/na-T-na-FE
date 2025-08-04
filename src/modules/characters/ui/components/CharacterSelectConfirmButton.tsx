import { useNavigate } from 'react-router';

const CharacterSelectConfirmButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat'); // 원하는 경로로 변경하세요
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-[#FC89BA] border-[#FF5D94] border-b-[2.5px] border-l-[2.5px] rounded-lg shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] px-4 py-5 flex items-center justify-center gap-2"
    >
      <span
        className="text-[#18181B] text-[24px] leading-[1em] text-center"
        style={{ fontFamily: 'DungGeunMo' }}
      >
        이 친구랑 대화할래요
      </span>
    </button>
  );
};

export default CharacterSelectConfirmButton;
