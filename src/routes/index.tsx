import { createFileRoute } from '@tanstack/react-router';
import { Suspense, useEffect } from 'react';
import { LoginCmp } from './../components/remote/LoginWrapper';
import ErrorBoundary from './../utils/ErrorBoundary';
import { LoginType, auth, authState$ } from './../utils/auth';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const onLoginHandler = (data: CustomEvent) => {
    const loginType = data.detail as LoginType;
    auth(loginType);
  };

  useEffect(() => {
    const sub = authState$(
      (user) => {
        if (user) {
          console.log('user', user);
        }
      },
      (error) => {
        console.log('error', error);
      },
    );

    return () => sub();
  }, []);

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
