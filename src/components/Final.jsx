import { useState, useEffect } from "react";
import Layout from "./Layout";

function Final({ startMusic }) {

  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    if (startMusic) {
      startMusic("/music.mp3");
    }
  }, []);

  return(
    <Layout>

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

      {answer==="yes" && (
        <h1 className="title">
          I’ll keep waiting for you in this life… and if I’m not lucky in this life, then at least in the next one.” like shiva waiting for Parvathi may be im not shiva but you are my Parvathi.

          Nuvvu Yekkada unna yevaritho unna nvu santhosam ga undali end of the day. 

          Niku telusu nikosam emaina chestha ani..

          Last ga jagratha panduuuuu
        </h1>
      )}

    </Layout>
  );
}

export default Final;