import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <main className="min-h-screen bg-[#fffde4] bg-cover bg-center mx-auto max-w-[599px]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
