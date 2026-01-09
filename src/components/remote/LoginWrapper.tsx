import { lazy, useEffect, useRef } from 'react';

import { mount } from 'angularRemote/LoginUi';

interface LoginWrapperProps {
  onLogin?: (data: CustomEvent) => void;
  isLoading?: boolean;
}

export const LoginCmp = lazy(async () => {
  await mount();

  return {
    default: ({ onLogin, isLoading }: LoginWrapperProps) => {
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
    },
  };
});
