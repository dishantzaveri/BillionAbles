import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { Navbar } from "../components/Navbar";

const PDFReader = () => {
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const { speak } = useSpeechSynthesis();
  const handleClick = () => {
    speak({ text: text });
  };
  console.log(selectedFile)
  return (
    <div className="bg-green-200 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center h-[90vh]">
        <input type="file" onChange={e => setSelectedFile(URL.createObjectURL(e.target.files[0]))} />
        <h1 className='text-5xl font-semibold my-12'>PDF Reader</h1>
        <button className='py-2 px-4 bg-[#28FF64] text-[#0F092D] text-lg rounded-lg shadow-lg font-semibold' onClick={handleClick}>Speak</button>
      </div>
    </div>
  );
};

export default PDFReader;
