import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWrWjdpnl0iiDPofgMgnY18wjJ64kaJ50",
  authDomain: "reactrevison1-charan.firebaseapp.com",
  projectId: "reactrevison1-charan",
  storageBucket: "reactrevison1-charan.firebasestorage.app",
  messagingSenderId: "92060894156",
  appId: "1:92060894156:web:94d132d8960a2e9b9d1369",
  measurementId: "G-YFH85CLT3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;