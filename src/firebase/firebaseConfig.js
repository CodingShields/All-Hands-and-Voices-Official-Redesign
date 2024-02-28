// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "all-hands-and-voices.firebaseapp.com",
	projectId: "all-hands-and-voices",
	storageBucket: "all-hands-and-voices.appspot.com",
	messagingSenderId: "828016954979",
	appId: "1:828016954979:web:ee3be9cb357845a1d37256",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
