import React from "react";
import Search from "../Search";
import GuessResult from "../GuessResult";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner";

const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesWords, setGuessesWords] = React.useState([]);
  // won, lose, running
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleNextGuessWord(newGuessWord) {
    const nextGuessesWords = [...guessesWords, newGuessWord];
    setGuessesWords(nextGuessesWords);
    updatedGameStatus(newGuessWord, nextGuessesWords);
  }

  function updatedGameStatus(newGuessWord, nextGuessesWords) {
    console.log('newGuessWord', newGuessWord)
    if (newGuessWord.answer.toUpperCase() === answer) {
      setGameStatus("won");
    }

    if (nextGuessesWords.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  }
  return (
    <>
      Put a game here!
      <Search handleNextGuessWord={handleNextGuessWord} gameStatus={gameStatus}/>
      <GuessResult guessesWords={guessesWords} answer={answer} />
      <GameOverBanner
        gameStatus={gameStatus}
        guessesWords={guessesWords.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
