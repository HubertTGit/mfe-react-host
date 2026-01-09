import { lazy } from 'react';
import { mount } from 'angularRemote/ThemeSwitch';

export const ThemeSwitchCmp = lazy(async () => {
  await mount();

  return {
    default: () => {
      return <theme-switch />;
    },
  };
});
