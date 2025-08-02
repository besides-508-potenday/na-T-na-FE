import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
}

export default App;
