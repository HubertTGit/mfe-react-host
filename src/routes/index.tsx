import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { LoginCmp } from './../components/remote/LoginWrapper';
import ErrorBoundary from './../utils/ErrorBoundary';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const onLoginHandler = (data: CustomEvent) => {
    const loginType = data.detail as 'google' | 'github';
    console.log('Login', loginType);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <Suspense fallback={<>Loading...</>}>
        <ErrorBoundary>
          <LoginCmp onLogin={onLoginHandler} />
        </ErrorBoundary>
      </Suspense>
    </main>
  );
}
