import React from "react";
import {
  NUM_OF_COLUMNS_ALLOWED,
} from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer, sizeGuessesWords }) {
  const checkedGuess = checkGuess(word, answer) || [];
  return (
    <>
      <p className="guess">
        {range(NUM_OF_COLUMNS_ALLOWED).map((item, index) => (
          <span
            className={"cell " + checkedGuess[item]?.status}
            key={index}
          >
            {checkedGuess[item]?.letter || ""}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
