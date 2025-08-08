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
createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<Error />}>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </ErrorBoundary>
);
