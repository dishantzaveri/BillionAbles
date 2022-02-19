import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import logo from '../utils/BillionAbles.png' 

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  },[]);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate('/')
    } catch (error) {
      console.log(error.message);
      setError(true)
      setEmail("");
      setPassword('');
    }
  };
  return (
    <div>
      <div className="flex flex-col space-y-4 items-center justify-center bg-green-200 text-[#0F092D] w-full min-h-screen">
        <Link to='/'>
          <img src={logo} alt='' className='w-36'></img>
        </Link>
        <div className="flex flex-col space-y-4 items-center justify-end w-96 pb-6">
          <p className="text-6xl text-center">Log in</p>
        </div>
        <div className="flex flex-col space-y-8 items-center justify-end w-96">
          <input type='text' className='w-full text-[#28FF64] bg-[#0F092D] rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
          <div className='w-full'>
            <input type={showPassword ? 'text' : 'password'} className='w-full text-[#28FF64] bg-[#0F092D] rounded-lg px-5 py-3 ml-[-10px] border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/> 
            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} className='ml-[-31px] text-gray-200' onClick={() => setShowPassword(!showPassword)} /> : <FontAwesomeIcon icon={faEye} className='ml-[-30px] text-gray-200' onClick={() => setShowPassword(!showPassword)} />}
            {error ? <h1 className='text-xs pt-2 text-red-700'>*Invalid Credentials</h1> : <h1>&ensp;</h1>}
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center w-96">
          <button className='w-full py-2 bg-[#28FF64] text-[#0F092D] font-semibold text-lg rounded-lg shadow-lg shadow-green-400/30 hover:shadow-green-400/50' onClick={() => login()}>Log in</button>
          <Link to='/signup' className="text-sm font-medium text-center text-[#0F092D] hover:text-[#28FF64]">Don't have an account? Register here</Link>  
        </div>
      </div>
    </div>
  )
}

export default Login;