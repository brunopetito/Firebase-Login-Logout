
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDUzNHG2prQkUDTXllcwKNGUmymt0i36NA",
  authDomain: "projetobasico-6d529.firebaseapp.com",
  projectId: "projetobasico-6d529",
  storageBucket: "projetobasico-6d529.appspot.com",
  messagingSenderId: "344926208538",
  appId: "1:344926208538:web:2bee340eab9aa9b59d47a3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)