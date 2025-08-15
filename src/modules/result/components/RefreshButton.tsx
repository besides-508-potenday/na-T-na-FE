import { DotFreshIcon } from '@/assets/icons';
import { useNavigate } from 'react-router';
export function RefreshButton() {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate('/');
  };
  
  return (
    <button
      onClick={handleRefresh}
      className="flex-1 bg-[#FC89BA] border-l-[2px] border-b-[2px] cursor-pointer border-[#FF5D94] rounded-md px-3 py-4 flex items-center justify-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#FF72AE] active:bg-[#FF4282] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]"
    >
      {' '}
      <DotFreshIcon />
      <span
        className="text-xl font-normal text-[#18181B]"
        style={{ fontFamily: 'DungGeunMo' }}
      >
        다시시작
      </span>
    </button>
  );
}
