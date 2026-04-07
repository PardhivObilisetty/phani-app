import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";
import Question from "./components/Question";
import Messages from "./components/Messages";
import Final from "./components/Final";

function App() {

  const [step, setStep] = useState(0);

  // persistent audio reference
  const audioRef = useRef(null);

  // START MUSIC FUNCTION (SAFE VERSION)
 const startMusic = (src) => {

  // Stop any current audio
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  const audio = new Audio(src);
  audio.volume = 0.35;
  audio.loop = true;

  audio.play().catch(() => {
    console.log("Playback blocked");
  });

  audioRef.current = audio;
};

  return (
    <AnimatePresence mode="wait">

      {step === 0 && (
        <Intro
          key="intro"
          next={() => setStep(1)}
          startMusic={startMusic}
        />
      )}

      {step === 1 && (
        <Question
          key="question"
          next={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <Messages
          key="messages"
          next={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <Final key="final" startMusic={startMusic} />
      )}

    </AnimatePresence>
  );
}

export default App;
