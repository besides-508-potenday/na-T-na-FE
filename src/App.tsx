import { Outlet } from 'react-router';

function App() {
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
      </main>
    </>
  );
}

export default App;
