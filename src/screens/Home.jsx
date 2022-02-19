import { Navbar } from "../components/Navbar";
import logo from '../utils/logo.png'

export const Home = () => {
  return (
    <div className='bg-green-200 min-h-screen'>
      <Navbar />
      <div className='flex flex-col justify-between items-center h-[90vh]'>
        <div className='flex flex-col justify-between items-center'>
          <h1 className='mt-20 text-5xl font-bold'>Believe you can and you’re halfway there.</h1>
          <h1 className='mt-6 text-gray-700 text-xl font-semibold w-[50vw]'>Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.</h1>
        </div>
        <img className='w-[60vw]' src={logo} alt="logo" />
      </div>
    </div>
  )
}
