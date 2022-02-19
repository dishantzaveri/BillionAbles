import React, { useRef, useState } from 'react';
import Tesseract from 'tesseract.js';
import { Navbar } from '../components/Navbar';

function preprocessImage(canvas) {
  const ctx = canvas.getContext('2d');
  const image = ctx.getImageData(0,0,canvas.width, canvas.height);
  return image;
}

export const DyslexiaReader = () => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
 
  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]))
  }
 
  const handleClick = () => {
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    console.log(imageRef.current.height)
 
    ctx.drawImage(imageRef.current, 0, 0, imageRef.current.width, imageRef.current.height);
    ctx.putImageData(preprocessImage(canvas),0,0);
    const dataUrl = canvas.toDataURL("image/jpeg");
  
    Tesseract.recognize(
      dataUrl,'eng',
      { 
        logger: m => console.log(m) 
      }
    )
    .catch (err => {
      console.error(err);
    })
    .then(result => {
      let text = result.data.text
      setText(text);
      console.log(result.data.text)
    })
  }
 
  return (
    <div className="bg-green-200 min-h-screen">
      <Navbar />
      <main className="">
        <h1 className='text-5xl font-semibold mt-12 mb-6'>Dyslexia Reader</h1>
        <div className="flex justify-center items-center space-x-4">
          <div>
            <h3 className='text-2xl font-semibold py-3'>Actual image uploaded</h3>
            <img 
              src={image} alt="uploaded pic"
              ref={imageRef} 
              width={700} 
              height={350}
            />
          </div>
          <div>
            <h3 className='text-2xl font-semibold py-3'>Canvas</h3>
            <canvas ref={canvasRef} width={700} height={350}></canvas>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className='text-2xl font-semibold py-3'>Extracted text</h3>
          <div className="pb-4">
            <h1 className='text-xl font-body w-[70vw]'> {text} </h1>
          </div>
        </div>
        <input type="file" onChange={handleChange} />
        <button className='ml-8 py-2 px-4 bg-[#28FF64] text-[#0F092D] text-lg rounded-lg shadow-lg font-semibold' onClick={handleClick} style={{height:50}}>Convert to text</button>
      </main>
    </div>
  );
}