import { lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';

const LoginUX = lazy(async () => {
  const elm = document.createElement('app-root');
  document.body.appendChild(elm);
  const angularRemote = await import('angularRemote/MyAngularElement');
  const loginUi = await import('angularRemote/LoginUi');

  console.log(loginUi);
  return { default: () => <login-ui /> };
});

function App() {
  return (
    <>
      <ErrorBoundary>
        <LoginUX />
      </ErrorBoundary>
    </>
  );
}

export default App;
