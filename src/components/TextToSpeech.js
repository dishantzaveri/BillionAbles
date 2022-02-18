import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();
  const handleClick = () => {
    speak({ text: text });
  };
  return (
    <div>
      <h1>Text To Speech</h1>
      <textarea
        onChange={(text) => setText(text.target.value)}
        value={text}
      ></textarea>
      <button onClick={handleClick}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
