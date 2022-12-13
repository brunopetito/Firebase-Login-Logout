import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Input from '../components/Input';

import useContextData from '../hooks/useContextData';

export default function Home() {
  const { user, handleGoogleSignIn, handleEmailLogin, createUserEmail } =
    useContextData();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cadastrar, setCadastrar] = useState<boolean>(false);
  useEffect(() => {
    if (user !== undefined) {
      Router.push('/Logado');
    }
  }, [user]);
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <div className="my-3 flex flex-col gap-2">
        {cadastrar ? (
          <div className=" text-center bg-sky-100 ">
            <p className="text-3xl self-center my-4">Cadastrar</p>

            <hr />
          </div>
        ) : (
          <div className=" text-center bg-sky-100 ">
            <p className="text-3xl self-center my-4">Entrar</p>

            <hr />
          </div>
        )}

        <Input labelTitle="Email" type="text" onChange={setEmail} />
        <Input labelTitle="Password" type="password" onChange={setPassword} />

        <p>
          Não Possui conta?{' '}
          <span
            className="cursor-pointer font-bold text-purple-600"
            onClick={() => setCadastrar(true)}
          >
            clique aqui
          </span>
        </p>
        {cadastrar && (
          <p>
            Já possui conta?{' '}
            <span
              className="cursor-pointer font-bold text-purple-600"
              onClick={() => setCadastrar(false)}
            >
              Entrar
            </span>
          </p>
        )}

        {!cadastrar ? (
          <div className="flex flex-col gap-2">
            <button
              className="bg-sky-400 py-2 px-4 rounded"
              onClick={() => {
                if (handleEmailLogin) {
                  handleEmailLogin(email, password);
                }
              }}
            >
              Logar com o Email
            </button>
            <button
              className="bg-red-400 py-2 px-4 rounded"
              onClick={handleGoogleSignIn}
            >
              Logar com o Google
            </button>
          </div>
        ) : (
          <button
            className="bg-red-400 py-2 px-4 rounded"
            onClick={() => {
              if (createUserEmail) {
                createUserEmail(email, password);
              }
            }}
          >
            Cadastrar
          </button>
        )}
      </div>

      {user && <p>{user.displayName}</p>}
    </div>
  );
}
