import { React, useState } from "react";
import Board from "./Board";
import CalculateWinner from "../helper/calculateWinner";

export default function GameParent() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(newSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function onRestartGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          // eslint-disable-next-line react/jsx-no-bind
          onPlay={handlePlay}
          indices={currentMove}
        />
      </div>

      <div className="new-game">
        {currentMove === 9 || CalculateWinner(currentSquares) ? (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            href="#"
            type="button"
            onClick={onRestartGame}
            className="mt-8 text-black text-xl items-center font-bold hover:text-purple bg-sunset border-l-4 border-b-4 rounded-full flex justify-center h-20 w-26"
          >
            {" "}
            Restart Game{" "}
          </a>
        ) : null}
      </div>
    </div>
  );
}
