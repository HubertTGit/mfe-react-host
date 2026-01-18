import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { tanstackRouter } from '@tanstack/router-plugin/rspack';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'react_app',
      filename: 'remoteEntry.js',
      remotes: {
        angularRemote: 'angularRemote@http://localhost:4200/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        firebase: { singleton: true, eager: true },
      },
      dts: {
        consumeTypes: true,
      },
    }),
  ],
  tools: {
    rspack: {
      plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true })],
    },
  },
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
});
