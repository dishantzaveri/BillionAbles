import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLE-F1jqvBTDpDXQ0e2PPpnZqe9cUgx5g",
  authDomain: "billion-ables-6296c.firebaseapp.com",
  projectId: "billion-ables-6296c",
  storageBucket: "billion-ables-6296c.appspot.com",
  messagingSenderId: "347351551446",
  appId: "1:347351551446:web:ce9ec5d43ca84be0bf6877"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);