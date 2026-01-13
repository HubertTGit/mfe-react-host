# React Microfrontend Host

This project is a React application that serves as a host for microfrontend components. It is built using Rspack for fast builds and leverages Module Federation to consume remote applications.

## Features

- **Microfrontend Host**: Acts as the shell application orchestrating remote microfrontends.
- **Remote Integration**: Consumes a remote Angular component (`angularRemote`) exposed as a Web Component.
- **Rspack**: High-performance bundler compatible with the Webpack ecosystem.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Custom Theming**: Uses CSS variables defined in `src/variables.css` for consistent theming across the application.

## Tech Stack

- **Framework**: React 19
- **Bundler**: Rspack
- **Styling**: Tailwind CSS v4, PostCSS
- **Routing**: TanStack Router
- **Micro Architecture**: Module Federation

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

> [!IMPORTANT]
> Ensure the remote Angular application is running on `http://localhost:4200` to load the remote component successfully.

### Building for Production

To build the application for production:

```bash
npm run build
```

This commands compiles the application using Rspack into the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Microfrontend Configuration

The Module Federation configuration is located in `rspack.config.ts`.

```typescript
new ModuleFederationPlugin({
  name: 'react_app',
  remotes: {
    angularRemote: 'angularRemote@http://localhost:4200/remoteEntry.js',
  },
  // ...
});
```

## Theming

The application uses custom CSS variables for theming. These are defined in `src/variables.css` and can be customized to change the look and feel of the application.

## Learn More

- [Rspack Documentation](https://rspack.rs)
- [Module Federation](https://module-federation.io/)
- [Tailwind CSS](https://tailwindcss.com)
