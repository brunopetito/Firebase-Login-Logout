import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  User,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import Router from 'next/router';
import { createContext, ReactNode, SetStateAction, useState } from 'react';
import { auth } from './services/firebase';
import { useRouter } from 'next/router';
interface AppContextProps {
  children?: ReactNode;
  user?: User;
  handleGoogleSignIn?: () => Promise<void>;
  handleLogout?: () => Promise<void>;
  handleEmailLogin?: (email: string, password: string) => Promise<void>;
  createUserEmail?: (email: string, password: string) => Promise<void>;
  setUser?: SetStateAction<any>;
  loading?: boolean;
  setLoading?: SetStateAction<any>;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: AppContextProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        router.push('/Logado');
      })
      .catch((error) => {
        console.log(error);
      });

    return;
  }

  async function handleLogout() {
    signOut(auth).then(() => {
      setUser(undefined);
      router.push('/');
    });
  }

  async function handleEmailLogin(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push('/Logado');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async function createUserEmail(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push('/Logado');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <AppContext.Provider
      value={{
        user,
        handleGoogleSignIn,
        handleLogout,
        handleEmailLogin,
        createUserEmail,
        setUser,
        loading,
        setLoading
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
