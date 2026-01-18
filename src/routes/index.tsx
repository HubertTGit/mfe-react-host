import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { LoginCmp } from './../components/remote/LoginWrapper';
import ErrorBoundary from './../utils/ErrorBoundary';
import { LoginType, auth } from './../utils/auth';
import { Loader } from './../components/ui/Loader';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Login to Weee Chat',
      },
      {
        title: 'Login - Weee Chat',
      },
    ],
  }),
});

function RouteComponent() {
  const onLoginHandler = (data: CustomEvent) => {
    const loginType = data.detail as LoginType;
    auth(loginType);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <LoginCmp onLogin={onLoginHandler} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
