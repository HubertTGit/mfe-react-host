import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { ThemeSwitchCmp } from './../components/remote/ThemeSwitch';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <header className="flex justify-end p-4">
        <ThemeSwitchCmp />

        <div className="p-2 flex gap-2 text-lg">
          <Link
            to="/"
            activeProps={{
              className: 'font-bold',
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/chat"
            activeProps={{
              className: 'font-bold',
            }}
          >
            Chat
          </Link>
        </div>
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
