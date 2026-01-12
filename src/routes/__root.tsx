import { Outlet, createRootRoute, useRouter } from '@tanstack/react-router';
import { ThemeSwitchCmp } from './../components/remote/ThemeSwitch';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
//init firebase config
import './../utils/firebase';
import { ProfileCmp } from './../components/remote/ProfileWrapper';
import { logOut } from './../utils/auth';
import { useAuth } from './../utils/auth.provider';
import { useEffect } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouter();
  const user = useAuth();
  const handleLogout = () => {
    logOut();
  };

  useEffect(() => {
    if (user) {
      router.navigate({
        to: '/chat',
      });
    } else {
      router.navigate({
        to: '/',
      });
    }
  }, [user]);
  return (
    <>
      <header className="flex justify-between p-4">
        {user && <ProfileCmp onLogout={handleLogout} user={user} />}
        <ThemeSwitchCmp />
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
