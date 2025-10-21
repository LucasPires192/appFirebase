import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
{/* import { getAuth } from "firebase/auth";*/ }

const firebaseConfig = {
  apiKey: "AIzaSyCdrzSXwhmpDsY0pPFjDn3EsJD0y99mpL0",
  authDomain: "appfirebase-31598.firebaseapp.com",
  projectId: "appfirebase-31598",
  storageBucket: "appfirebase-31598.firebasestorage.app",
  messagingSenderId: "205317579997",
  appId: "1:205317579997:web:5d855729ae3ae70ae7e734",
  measurementId: "G-SNZ20HZZGD"
};

{/*Iniciando o firebase */ }
const app = initializeApp(firebaseConfig);
{/* Fazendo a autenticacao do banco com os dados de login e senha */ }
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
{/*const auth = getAuth(app);*/ }
{/* puxando os dados do perfil do banco */ }
const db = getFirestore(app);
{/* Exportando os objetos */ }
export { auth, db };