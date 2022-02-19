import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

export const VisuallyImpaired = () => {
  return (
    <div className='bg-green-200 min-h-screen text-[#0F092D]'>
      <Navbar />
      <div className="py-24 px-48 h-[90vh]">
        <h1 className='text-5xl font-semibold mb-24'>Visually Impaired</h1>
        <div className="flex space-x-24 justify-center items-center">
          <Link to='/object_detection'>
            <Card name='Object Detection' data='description' />
          </Link>
          <Link to='/text_to_speech'>
            <Card name='Text to Speech' data='description' />
          </Link>
          <Link to='/pdf_reader'>
            <Card name='PDF Reader' data='description' />
          </Link>
        </div>
      </div>
    </div>
  )
}
