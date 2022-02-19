import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { auth } from "../firebase";
import logo from '../utils/BillionAbles.png' 

export const Navbar = () => {
  const [user, setUser] = useState([]);
  const logOut = () => {
    auth.signOut()
    setUser([])
  }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className='h-16 w-full px-8 py-4 bg-gray-800/20 flex justify-between items-center'>
      <div className="flex space-x-8 items-center">
        <img src={logo} alt='' className='w-8'></img>
        <Link to='/'>
          <h1 className='text-xl font-bold text-[#0F092D]'>BillionAbles</h1>
        </Link>
      </div>
      <div className="flex space-x-8 items-center">
        {user ? (
          <>
            <Link className='text-lg font-semibold text-[#0F092D]' to="/visually_impaired">
              Visually Impaired
            </Link>
            <Link className='text-lg font-semibold text-[#0F092D]' to="/deaf_and_dumb">
              Deaf and Dumb
            </Link>
            <Link className='text-lg font-semibold text-[#0F092D]' to="/dyslexia">
              Dyslexia
            </Link>
            <Link className='text-lg font-semibold text-[#0F092D]' to="/chat">
              Chat
            </Link>
            <Link to='/' className='text-lg font-semibold text-red-500' onClick={() => logOut()} >Logout</Link>
          </>
        ) : (
          <>
            <Link className='text-lg font-semibold text-[#0F092D]' to='/login'>Login</Link>
            <Link className='text-lg font-semibold text-[#0F092D]' to='/signup'>SignUp</Link>
          </>
        )}
      </div>
    </div>
  )
}
