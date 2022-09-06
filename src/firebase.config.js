import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNVe8cNjPvq3iYC40DBlGI8v96RyWFJno",
  authDomain: "restaurantapp-7205d.firebaseapp.com",
  databaseURL: "https://restaurantapp-7205d-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-7205d",
  storageBucket: "restaurantapp-7205d.appspot.com",
  messagingSenderId: "107146861093",
  appId: "1:107146861093:web:8c7e69d9a8f3141ee7fdcc",
};

const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
