import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <main className="bg-[#fffde4] bg-cover bg-center mx-auto min-w-[375px] max-w-[480px] min-h-[812px] max-h-[1039px]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
