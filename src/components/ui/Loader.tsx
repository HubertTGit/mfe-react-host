import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center h-[88vh]">
      <div
        className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
