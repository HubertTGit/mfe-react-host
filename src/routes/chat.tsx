import { createFileRoute } from '@tanstack/react-router';
import { ChatCmp } from './../components/remote/ChatWrapper';
import { useAuth } from './../utils/auth.provider';
import { useData } from './../utils/data.provider';
import ErrorBoundary from './../utils/ErrorBoundary';
import { Suspense } from 'react';
import { IChatMessage } from 'angularRemote/compiled-types/app/ui/chat-ui/chat.interface';
import { Loader } from './../components/ui/Loader';

export const Route = createFileRoute('/chat')({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useAuth();
  const { messages, sendMessage } = useData();
  return (
    <section className="px-4">
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <ChatCmp
            user={user}
            onChat={(e: CustomEvent<IChatMessage>) => sendMessage(e.detail)}
            messages={messages}
            title="Chat"
          />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
