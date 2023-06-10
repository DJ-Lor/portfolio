import React from "react";
import Square from "./Square";
import calculateWinner from "../helper/calculateWinner";

// eslint-disable-next-line react/prop-types
export default function Board({ xIsNext, squares, onPlay, indices }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // eslint-disable-next-line react/prop-types
    const newSquares = squares.slice();

    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    onPlay(newSquares);
  }

  const winner = calculateWinner(squares);

  let status;
  let draw;

  if (winner) {
    status = "Game Complete!";
  } else if (indices === 9 && !winner) {
    status = "It's a draw";
    draw = true;
  } else {
    status = `Player Turn:${xIsNext ? "  X" : "  O"}`;
  }

  return (
    <div>
      <div className="status text-3xl md:text-4xl pb-4 text-floral-white">
        {winner || draw ? null : status}
      </div>

      <div className="text-3xl md:text-4xl text-floral-white mb-8">
        {winner ? `PLAYER ${winner} WINS!🏆` : null}
        {!winner && draw ? `NO WINNER. TRY AGAIN 🙁` : null}
      </div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}