import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.evn.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "capgain-249dc.firebaseapp.com",
  projectId: "capgain-249dc",
  storageBucket: "capgain-249dc.firebasestorage.app",
  messagingSenderId: "865194442606",
  appId: "1:865194442606:web:d8f6fff152de3fe0328b7f"
};

const app = getApps.length == 0 ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export { auth, db };