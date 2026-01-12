import { lazy, useEffect, useRef } from 'react';

import { mount } from 'angularRemote/ChatUi';
import { User } from 'firebase/auth';
import { IChatMessage } from 'angularRemote/compiled-types/app/ui/chat-ui/chat.interface';

interface ChatWrapperProps {
  user: User | null;
  onChat: (data: CustomEvent<IChatMessage>) => Promise<void>;
  messages: IChatMessage[] | undefined;
  title: string;
}

export const ChatCmp = lazy(async () => {
  await mount();

  return {
    default: ({ user, onChat, messages, title }: ChatWrapperProps) => {
      const elementRef = useRef<HTMLElement>(null);

      useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        // Listener for Angular @Output
        const handleChat = (event: CustomEvent<IChatMessage>) => {
          // Angular emits data inside event.detail
          if (onChat) {
            onChat(event);
          }
        };

        // Add native event listener
        el.addEventListener('onChat', handleChat as EventListener);

        // Cleanup
        return () => {
          el.removeEventListener('onChat', handleChat as EventListener);
        };
      }, [onChat]);

      return (
        <chat-ui
          ref={elementRef}
          messages={messages}
          title={title}
          user={user}
          onChat={onChat}
        />
      );
    },
  };
});
