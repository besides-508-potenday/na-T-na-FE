import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Suspense } from 'react';
import './index.css';
import { router } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from './components/Loading';
import Error from './components/Error';

const queryClient = new QueryClient();

// MSW 초기화 후 앱 렌더링
const initializeApp = async () => {
  // 모든 환경에서 MSW 시작 (실제 서버 대신 모킹 사용)
  try {
    const { startMSW } = await import('./mocks/browser');
    await startMSW();
    console.log('[MSW] 모킹 서버가 시작되었습니다.');
  } catch (error) {
    console.warn('[MSW] 모킹 초기화 실패:', error);
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
