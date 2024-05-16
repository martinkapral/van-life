import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCMK8uIEjE_2Qvk9hfpPmAiOW1ykTbdvAU",
  authDomain: "vanlife-8ed23.firebaseapp.com",
  projectId: "vanlife-8ed23",
  storageBucket: "vanlife-8ed23.appspot.com",
  messagingSenderId: "186737523581",
  appId: "1:186737523581:web:7686d7f9d281b1568eea14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}
