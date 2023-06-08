import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResult({ guessesWords, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((item, index) => (
          <Guess
            key={index}
            word={guessesWords[item]?.answer || ""}
            answer={answer}
            sizeGuessesWords={guessesWords.length}
          />
        ))}
      </div>
    </>
  );
}

export default GuessResult;
