import { createBrowserRouter } from 'react-router';
import App from '@/App';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Chat2 from './pages/Chat2';

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
        path: 'chat2',
        element: <Chat2 />,
      },
    ],
  },
]);
