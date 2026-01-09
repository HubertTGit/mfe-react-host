declare global {
  namespace JSX {
    interface IntrinsicElements {
      'login-ui': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          name?: string;
          onLogin?: (data: CustomEvent) => void;
          ref?: React.Ref<HTMLElement>;
        },
        HTMLElement
      >;
    }
  }
}

declare module 'angularRemote/LoginUi' {
  export const mount: () => Promise<() => void>;
}

declare module 'angularRemote/ThemeSwitch' {
  export const mount: () => Promise<() => void>;
}
