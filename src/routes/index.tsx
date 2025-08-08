import { createBrowserRouter } from 'react-router';
import { Suspense, lazy } from 'react';
import App from '@/App';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Characters from './pages/Characters';
import Nickname from './pages/Nickname';
import Loading from '../components/Loading';
import Error from '../components/Error';
import FallbackWritting from '../components/FallbackWritting';

// Result 페이지를 lazy loading으로 변경
const Result = lazy(() => import('./pages/Result'));

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
        element: (
          <Suspense fallback={<FallbackWritting />}>
            <Result />
          </Suspense>
        ),
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
