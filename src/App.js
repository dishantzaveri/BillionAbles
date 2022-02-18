import "./App.css";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import SpeechText from "./screens/SpeechText";
import ObjectDetection from "./screens/ObjectDetection";
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <Router>
          <div>
            <Routes >
              <Route path="/" element={<SpeechText />} />   
              <Route path="/objectDetection" element={<ObjectDetection />} />     
            </Routes>
          </div>
        </Router>
      ) : (
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
