import { useNavigate } from "react-router-dom";

const Intropage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="gradient"></div>
      <div className="gameContainer intro">
        <h1>Star match</h1>
        <button
          className="utilbutton"
          onClick={() => {
            navigate("/StarMatch");
          }}
        >
          Play
        </button>
      </div>
    </>
  );
};

export default Intropage;
