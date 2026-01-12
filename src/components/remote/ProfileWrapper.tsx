import { lazy, useEffect, useRef, useState } from 'react';

import { mount } from 'angularRemote/ProfileUi';
import { User } from 'firebase/auth';

interface ProfileWrapperProps {
  onLogout: (data: CustomEvent) => void;
  user: User | null;
}

export const ProfileCmp = lazy(async () => {
  await mount();

  return {
    default: ({ onLogout, user }: ProfileWrapperProps) => {
      const elementRef = useRef<HTMLElement>(null);

      useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        // Listener for Angular @Output
        const handleLogout = (event: CustomEvent) => {
          // Angular emits data inside event.detail
          if (onLogout) {
            onLogout(event);
          }
        };

        // Add native event listener
        el.addEventListener('onLogout', handleLogout as EventListener);

        // Cleanup
        return () => {
          el.removeEventListener('onLogout', handleLogout as EventListener);
        };
      }, [onLogout, user]);

      return <profile-ui ref={elementRef} user={user} />;
    },
  };
});
