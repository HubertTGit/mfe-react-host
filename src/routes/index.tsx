import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { LoginCmp } from './../components/remote/LoginWrapper';
import ErrorBoundary from './../utils/ErrorBoundary';
import { LoginType, auth } from './../utils/auth';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const onLoginHandler = (data: CustomEvent) => {
    const loginType = data.detail as LoginType;
    auth(loginType);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <ErrorBoundary>
        <Suspense fallback={<>Loading...</>}>
          <LoginCmp onLogin={onLoginHandler} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
