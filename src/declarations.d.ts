declare module 'angularRemote/LoginUi';
declare module 'angularRemote/MyAngularElement';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'login-ui': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
