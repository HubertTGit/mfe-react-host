import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { LoginWrapper } from './LoginWrapper';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading Now...</div>}>
        <ErrorBoundary>
          <LoginWrapper
            name="Jack"
            onLogin={(data) => console.log('Login', data)}
          />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
