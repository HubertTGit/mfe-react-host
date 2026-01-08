/// <reference path="./declarations.d.ts" />
import { lazy, useEffect, useRef } from 'react';

import { mount } from 'angularRemote/LoginUi';

interface LoginWrapperProps {
  name: string;
  onLogin: (data: CustomEvent) => void;
}

export const LoginWrapper = lazy(async () => {
  await mount();

  return {
    default: ({ name, onLogin }: LoginWrapperProps) => {
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

      console.log('LoginWrapper', name, onLogin);
      return <login-ui name={name} ref={elementRef} />;
    },
  };
});
