import React from "react";
import { useState } from "react";

export default function TicTacToe() {
  const Square = (props) => (
    <button style={style} onClick={props.onClick}>
      {props.value}
    </button>
  );

  const style = {
    background: "lightblue",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
    margin: "0px",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="widget-tictactoe container">
      <h2>Tic Tac Toe</h2>
      <div className="tictactoe">
        <Square value="1" onClick={() => onClick("dummy value")} />
        <Square value="2" onClick={() => onClick("dummy value")} />
        <Square value="3" onClick={() => onClick("dummy value")} />
        <Square value="4" onClick={() => onClick("dummy value")} />
        <Square value="5" onClick={() => onClick("dummy value")} />
        <Square value="6" onClick={() => onClick("dummy value")} />
        <Square value="7" onClick={() => onClick("dummy value")} />
        <Square value="8" onClick={() => onClick("dummy value")} />
        <Square value="9" onClick={() => onClick("dummy value")} />
      </div>
    </div>
  );
}
