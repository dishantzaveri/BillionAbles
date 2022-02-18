import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
      });
    },[]);
  
    const registerUser = async () => {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
      setEmail("");
      setPassword('');
    };
  return (
    <div>
        <h1>Login</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={"password"}
        placeholder="Enter Password"
      />
      <Link to="/">
        <button onClick={registerUser}>Login</button>      
      </Link>
    </div>
  )
}

export default Login;