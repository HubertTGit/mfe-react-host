import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { IChatMessage } from 'angularRemote/compiled-types/app/ui/chat-ui/chat.interface';
import { getChats, sendChat } from './data';
import { QuerySnapshot } from 'firebase/firestore';

interface IDataContext {
  messages: IChatMessage[];
  sendMessage: (message: IChatMessage) => Promise<void>;
  loading: boolean;
  error: Error | null;
}

const DataContext = createContext<IDataContext | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = getChats({
      next: (snapshot: QuerySnapshot<IChatMessage>) => {
        const msgs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as IChatMessage[];
        setMessages(msgs);
        setLoading(false);
      },
      error: (err) => {
        console.error('Error fetching messages:', err);
        setError(err);
        setLoading(false);
      },
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (data: IChatMessage) => {
    try {
      await sendChat(data);
    } catch (err) {
      console.error('Error sending message:', err);
      throw err;
    }
  };

  return (
    <DataContext.Provider value={{ messages, sendMessage, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
