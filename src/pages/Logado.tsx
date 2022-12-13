import React, { useContext } from 'react';
import useContextData from '../hooks/useContextData';
import AppContext from '../AppContext';
export default function Logado() {
  const { handleLogout, user } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <button className="bg-red-400 py-2 px-4 rounded" onClick={handleLogout}>
        Deslogar
      </button>
      {user && <p>{user.displayName}</p>}
    </div>
  );
}
