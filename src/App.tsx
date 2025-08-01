import { Outlet } from 'react-router';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
}

export default App;
