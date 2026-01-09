import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { LoginCmp } from './components/remote/LoginWrapper';
import { ThemeSwitchCmp } from './components/remote/ThemeSwitch';

function App() {
  const onLoginHandler = (data: CustomEvent) => {
    console.log('Login', data);
  };

  return (
    <>
      <header className="flex justify-end p-4">
        <ThemeSwitchCmp />
      </header>
      <Suspense fallback={<LoginCmp isLoading={true} />}>
        <ErrorBoundary>
          <main className="flex h-screen items-center justify-center">
            <LoginCmp onLogin={onLoginHandler} />
          </main>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
