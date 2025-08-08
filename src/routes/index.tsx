import { createBrowserRouter } from 'react-router';
import App from '@/App';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Characters from './pages/Characters';
import Nickname from './pages/Nickname';

import Loading from '../components/Loading';
import Error from '../components/Error';
import Result from './pages/Result';

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
        path: 'result',
        element: <Result />,
      },
      //테스트용 페이지
      {
        path: 'loading',
        element: <Loading />,
      },
      {
        path: 'error',
        element: <Error />,
      },
    ],
  },
]);
