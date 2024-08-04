import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "all-hands-and-voices.firebaseapp.com",
	projectId: "all-hands-and-voices",
	storageBucket: "all-hands-and-voices.appspot.com",
	messagingSenderId: "828016954979",
	appId: "1:828016954979:web:ee3be9cb357845a1d37256",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
