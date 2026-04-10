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

  if (audioRef.current) return;

  const first = new Audio("/fun.mp3");
  first.volume = 0.35;
  first.loop = false;

  first.play().catch(() => {
    console.log("Playback blocked");
  });

  first.onended = () => {
    const loopSong = new Audio("/loop.mp3");
    loopSong.volume = 0.35;
    loopSong.loop = true;

    loopSong.play().catch(() => {
      console.log("Loop playback blocked");
    });

    audioRef.current = loopSong;
  };

  audioRef.current = first;
};
  const playFinalMusic = () => {

  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  const finalSong = new Audio("/music.mp3");
  finalSong.volume = 0.35;
  finalSong.loop = true;

  finalSong.play().catch(() => {
    console.log("Final playback blocked");
  });

  audioRef.current = finalSong;
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
      <Final key="final" playFinalMusic={playFinalMusic} />
    )}

    </AnimatePresence>
  );
}

export default App;
