import React from "react";

const PlayAgain = (props) => {
  const clr = { color: props.gameStatus === "lost" ? "red" : "green" };
  return (
    <div className="game-done">
      <div className="message" style={clr}>
        {props.gameStatus === "lost" ? "Game Over" : "You Won"}
      </div>
      <button className="utilbutton" onClick={props.onClick}>
        Play Again
      </button>
    </div>
  );
};

export default PlayAgain;
