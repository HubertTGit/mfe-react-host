import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { LoginWrapper } from './LoginWrapper';

function App() {
  const onLoginHandler = (data: CustomEvent) => {
    console.log('Login', data);
  };

  return (
    <>
      <Suspense fallback={<LoginWrapper isLoading={true} />}>
        <ErrorBoundary>
          <main className="flex h-screen items-center justify-center">
            <LoginWrapper name="Jack" onLogin={onLoginHandler} />
          </main>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
