import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  },[]);

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setEmail("");
      setPassword('');
    }
  };
  return (
    <div>
      <h1>Register</h1>
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
      <button onClick={registerUser}>Register</button>      
      <Link to="/login">
        Already have an account?
      </Link>
    </div>
  );
}

export default SignUp;
