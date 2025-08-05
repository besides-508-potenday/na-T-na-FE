import { createBrowserRouter } from 'react-router';
import App from '@/App';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Characters from './pages/Characters';
import Nickname from './pages/Nickname';
import CharacterLoadingFallback from '@/components/CharacterLoadingFallback';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'characters',
        element: <Characters />,
      },
      {
        path: 'nickname',
        element: <Nickname />,
      },
      {
        path: 'character-loading',
        element: <CharacterLoadingFallback />,
      },
    ],
  },
]);
