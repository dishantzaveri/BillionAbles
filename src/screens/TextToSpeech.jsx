import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { Navbar } from "../components/Navbar";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();
  const handleClick = () => {
    speak({ text: text });
  };
  return (
    <div className="bg-green-200 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center h-[90vh]">
        <h1 className='text-5xl font-semibold my-12'>Text To Speech</h1>
        <textarea
          className='mb-12 w-[60vw] h-36 px-4 py-2 rounded-lg text-lg text-[#0F092D]'
          rows='10'
          onChange={(text) => setText(text.target.value)}
          value={text}
        ></textarea>
        <button className='py-2 px-4 bg-[#28FF64] text-[#0F092D] text-lg rounded-lg shadow-lg font-semibold' onClick={handleClick}>Speak</button>
      </div>
    </div>
  );
};

export default TextToSpeech;
