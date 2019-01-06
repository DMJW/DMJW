import React, { Component } from "react";

export default function UpDownGame() {
  return (
    <div>
      <title>DMJW's|Guess Game</title>
      <div>
        <h1>Up ☝︎☟ Down Guess Game</h1>
      </div>
      <div>
        <h2>How To play Up Down Guess Game(UDGG)</h2>
        <h4>1. Easy, Normal, Hard, Extreme</h4>
        <p>
          In every game you have to guess the number that the computer randomly
          thinks. Easy is 1~30(9chances), Normal(10chances) is 1~50,
          Hard(11chances): 1~100, Extreme(15chances): 1~250.
          <br />
          It will say UP if the number you said is smaller than the "number". It
          will say DOWN if the number you said is bigger than the "number".
        </p>
        <p>
          For example, if the computer is thinking 3 and you said 1 it will
          print "UP". After that if you said 5 it will print DOWN. <br />
          When you guessed it correct in chances(depending on mode) the game
          will be over. Also, Even if you didn't guess the number and the
          chances are not left the game will be over.
        </p>
        <h4>2. Opposite Mode</h4>
        <p>
          The computer will try to guess the number you have selected.
          <br />
          First, you have to type in the number you thought. This will NOT be
          passed to the answer thinking computer! Then, the computer will start
          guessing. If your 'number' is smaller than the number it guessed press
          DOWN. If its(your number) bigger then press UP. These buttons will
          send "UP" or "DOWN" to the computer.
        </p>
      </div>
      <div>
        <h2>Let's Start!</h2>
        <h3>Choose a Game Mode</h3>
        <p>
          Easy(9chances): 1~30, Normal(10chances): 1~50, Hard(11chances): 1~100,
          Extreme(15chances): 1~250.
        </p>
        <button onClick="UDGEasy()">Easy</button>
        <button onClick="UDGNorm()">Normal</button>
        <button onClick="UDGHard()">Hard</button>
        <button onClick="UDGExtr()">Extreme</button>
        <br />
        <button onClick="UDGOpp()">Opposite</button>
      </div>
    </div>
  );
}
