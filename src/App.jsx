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
  const startMusic = () => {

    // Prevent restarting music
    if (audioRef.current) return;

    const audio = new Audio("/fun.mp3");

    audio.volume = 0.35;
    audio.loop = true;

    // Safe play (prevents button freezing)
    audio.play().catch(() => {
      console.log("Playback blocked until user interaction");
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
        <Final key="final" />
      )}

    </AnimatePresence>
  );
}

export default App;
