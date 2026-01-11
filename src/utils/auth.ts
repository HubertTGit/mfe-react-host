import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  Unsubscribe,
  User,
} from 'firebase/auth';
import { getApp } from 'firebase/app';

const app = getApp();

export enum LoginType {
  Google = 'google',
  Github = 'github',
}

export const auth = (type: LoginType) => {
  const auth = getAuth(app);

  if (type === LoginType.Google) {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  if (type === LoginType.Github) {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }
};

export const logOut = () => {
  const auth = getAuth(app);
  return signOut(auth);
};

export const authState$ = (
  cb: (user: User | null) => void,
  err: (error: Error) => void,
): Unsubscribe => {
  const auth = getAuth(app);
  return onAuthStateChanged(auth, cb, err);
};
