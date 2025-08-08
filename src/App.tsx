import { Outlet, useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();
  const handleResultClick = () => {
    navigate('/result/1');
  };
  const handleErrorClick = () => {
    navigate('/error');
  };
  const handleLoadingClick = () => {
    navigate('/loading');
  };
  return (
    <>
      <main className="bg-[#fffde4] bg-cover bg-center mx-auto min-w-[375px] max-w-[480px] min-h-[812px] max-h-[1039px]">
        <div
          className="flex items-center justify-center min-h-screen"
          style={{ backgroundColor: '#FFFEF3' }}
        >
          {' '}
          <div className="w-[450px] h-[812px]">
            {' '}
            <Outlet />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-5">
          {' '}
          <button
            onClick={handleResultClick}
            className=" bg-[#D4FE8E] border-b-[2px] border-[#00D692] hover:bg-[#AAFE75] active:bg-[#88FE61] rounded-md px-3 py-4 flex items-center justify-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)]"
          >
            결과창
          </button>
          <button
            onClick={handleErrorClick}
            className="bg-[#FC89BA] border-l-[2px] border-b-[2px] border-[#FF5D94] rounded-md px-3 py-4 flex items-center justify-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#FF72AE] active:bg-[#FF4282] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]"
          >
            에러창
          </button>
          <button
            onClick={handleLoadingClick}
            className="bg-[#95CDFE] border-l-[2px] border-b-[2px] border-[#2C55C7] rounded-md px-3 py-4 flex items-center justify-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#759CFE]  active:bg-[#2C55C7] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]"
          >
            로딩창
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
