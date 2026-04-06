import Layout from "./Layout";

function Question({ next }) {

  const dodge = (e) => {
    e.target.style.position = "absolute";
    e.target.style.top = Math.random()*140 + "%";
    e.target.style.left = Math.random()*140 + "%";
  };

  return (
    <Layout>

      <h1 className="title">
        I wanna say u something...
      </h1>

      <p style={{marginBottom:"25px"}}>
        you feel ready..❓
      </p>

      <button onClick={next}>
        Yes ❤️
      </button>

      <button onMouseEnter={dodge}>
        No 🙃
      </button>

    </Layout>
  );
}

export default Question;
