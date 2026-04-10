import { useState, useEffect } from "react";
import Layout from "./Layout";

const finalMessages = [
  "Maybe I'm not a rama but u r my sita I'm not shiva but u r my ishaa I'm not krishna but u r my radha I'm not romeo but u r my juliet I'm ram but u r my Princess noor jahaan",
  "I know I'm not worth getting you kaani at least kontha time nitho spend chesthe chaalu just I want to say I'm sorry and I love you by holding your hands and looking into your eyes.",
  "I’ll keep waiting for you in this life… and if I’m not lucky in this life, then at least in the next one.”  like shiva waiting for Parvathi maybe I'm not shiva but you are my Parvathi.",
  "Nuvvu Yekkada unna yevaritho unna santhosam ga undali end of the day. Niku telusu nikosam emaina chestha ani.. Last ga I'm sorry and jagratha panduuuuu"
];

function Final({ playFinalMusic }) {

  const [answer, setAnswer] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    playFinalMusic();
  }, []);

  const handleNext = () => {
    if (index < finalMessages.length - 1) {
      setIndex(index + 1);
    }
  };

  return(
    <Layout>

      {/* FIRST SCREEN */}
      {!answer && (
        <>
          <h1 className="title">
            I’ve shared my truth… now I leave the rest to your heart..❤️
          </h1>

          <button onClick={()=>setAnswer("yes")}>
            Your feelings mean a lot to me 💕
            I want to take things slowly 
          </button>
        </>
      )}

      {/* MESSAGE FLOW */}
      {answer==="yes" && (
  <>
    <h1 className="title">
      {finalMessages[index]}
    </h1>

    {/* Show hint only if NOT last message */}
    {index < finalMessages.length - 1 && (
      <p style={{opacity:0.6}}>
        tap to continue
      </p>
    )}

    {/* Show button only if NOT last message */}
    {index < finalMessages.length - 1 && (
      <button onClick={handleNext} style={{marginTop:"20px"}}>
        Next
      </button>
    )}
  </>
)}
    </Layout>
  );
}

export default Final;