import Layout from "./Layout";

function Intro({ next, startMusic }) {

  const handleClick = () => {
    startMusic();   // starts music ONLY once
    next();         // moves to next page
  };

  return (
    <Layout>

      <h1 className="title">
        Hey... 🙂
      </h1>

      <p style={{marginBottom:"30px"}}>
        I made something small for you🤌🏼.
      </p>

      <button onClick={handleClick}>
        Open it 💌
      </button>

    </Layout>
  );
}

export default Intro;
