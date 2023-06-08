import React from "react";

function Search({ handleNextGuessWord, gameStatus }) {
  const [word, setWord] = React.useState("");

  function searchInput(e) {
    e.preventDefault();
    handleNextGuessWord({ answer: word });
    setWord("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={searchInput}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word}
        required
        minLength={5}
        maxLength={5}
        disabled={gameStatus !== 'running'}
        onChange={(event) => {
          setWord(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Search;
