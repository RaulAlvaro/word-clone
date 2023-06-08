import React from "react";

function GameOverBanner({ gameStatus, guessesWords, answer }) {
  return (
    <>
      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>{guessesWords} guesses</strong>.
          </p>
        </div>
      )}

      {gameStatus === "lose" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GameOverBanner;
