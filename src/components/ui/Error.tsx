import { Construction } from 'lucide-react';
import { FC } from 'react';

export const Error: FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-100"
      role="status"
    >
      <Construction className="fill-red-500" />
      <h1 className="text-red-500">Something went wrong.</h1>
    </div>
  );
};
