import {
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
  FirestoreError,
  QuerySnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { IChatMessage } from 'angularRemote/compiled-types/app/ui/chat-ui/chat.interface';

const db = getFirestore();

interface IMessageObserver {
  next?: (snapshot: QuerySnapshot<IChatMessage>) => void;
  error?: (error: FirestoreError) => void;
  complete?: () => void;
}

export const getChats = (observer: IMessageObserver) => {
  const messagesCollection = collection(db, 'chats');
  const q = query(messagesCollection, orderBy('created'));
  return onSnapshot(q, observer as any);
};

export const sendChat = (data: IChatMessage) => {
  return addDoc(collection(db, 'chats'), data);
};
