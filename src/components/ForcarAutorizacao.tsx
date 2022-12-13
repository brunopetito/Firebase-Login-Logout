import { onAuthStateChanged } from 'firebase/auth';

import React, { useContext, useEffect } from 'react';
import AppContext from '../AppContext';
import { auth } from '../services/firebase';
import Router, { useRouter } from 'next/router';
export default function ForcarAutorizacao(props: any) {
  const { user, setUser, loading, setLoading } = useContext(AppContext);
  auth.onAuthStateChanged(function (oldUser) {
    if (oldUser) {
      setUser(oldUser);
    }
  });

  useEffect(() => {
    if (user === undefined) {
      Router.push('/');
    } else {
      Router.push('/Logado');
    }
  }, [user]);

  return <div>{props.children}</div>;
}
