import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Suspense } from 'react';
import './index.css';
import { router } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from './components/Loading';
import Error from './components/Error';
import { startMSW } from './mocks/browser';

const queryClient = new QueryClient();

// MSW 초기화 후 앱 렌더링
const initializeApp = async () => {
  // 개발 환경에서만 MSW 시작
  if (process.env.NODE_ENV === 'development') {
    await startMSW();
  }

  createRoot(document.getElementById('root')!).render(
    <ErrorBoundary fallback={<Error />}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

initializeApp();
