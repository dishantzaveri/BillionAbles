import React from 'react'
import { Link } from 'react-router-dom';
import SpeechToText from "../components/SpeechToText";
import TextToSpeech from "../components/TextToSpeech";
import { auth } from '../firebase';
function SpeechText() {
  return (
    <div>
        <SpeechToText />
        <TextToSpeech />
        <Link to="/objectDetection">
            Object Detection
        </Link>
        <br>
        </br>
        <button onClick={() => auth.signOut()} >Logout</button>
    </div>
  )
}

export default SpeechText