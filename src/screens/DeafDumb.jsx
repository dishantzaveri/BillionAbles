import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

export const DeafDumb = () => {
  return (
    <div className='bg-green-200 min-h-screen'>
      <Navbar />
      <div className="py-24 px-48 h-[90vh]">
        <h1 className='text-5xl font-semibold mb-24'>Deaf and Dumb</h1>
        <div className="flex flex-row space-x-24 justify-center items-center">
          <Link to='/speech_to_text'>
            <Card name='Speech to Text' data='The speech to text feature will convert spoken words into to the text.' />
          </Link>
          <Link to='/text_to_speech'>
            <Card name='Text to Speech' data='The text to speech feature will convert the text written on the screen into the voice available in the system.' />
          </Link>
        </div>
      </div>
    </div>
  )
}
