import { lazy, useEffect, useRef } from 'react';

import { mount } from 'angularRemote/LoginUi';

interface LoginWrapperProps {
  onLogin?: (data: CustomEvent) => void;
  isLoading?: boolean;
}

const LoginCmpRaw = ({ onLogin, isLoading }: LoginWrapperProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Listener for Angular @Output
    const handleLogin = (event: CustomEvent) => {
      // Angular emits data inside event.detail
      if (onLogin) {
        onLogin(event);
      }
    };

    // Add native event listener
    el.addEventListener('onLogin', handleLogin as EventListener);

    // Cleanup
    return () => {
      el.removeEventListener('onLogin', handleLogin as EventListener);
    };
  }, [onLogin]);

  return <login-ui ref={elementRef} isLoading={isLoading} />;
};

export const LoginCmp = lazy(async () => {
  await mount();

  // delay for 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    default: LoginCmpRaw,
  };
});
