import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAmKMne4xRwrhFn6FSVUZ0MtIR3ElSRo8I",
  authDomain: "alura-esporte-a1c4f.firebaseapp.com",
  projectId: "alura-esporte-a1c4f",
  storageBucket: "alura-esporte-a1c4f.appspot.com",
  messagingSenderId: "245272574454",
  appId: "1:245272574454:web:4b14a6e29db5185cfdafd7",
  measurementId: "G-BXG3DGKPMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth({
    persistence: getReactNativePersistence(AsyncStorage)
})

export { auth };