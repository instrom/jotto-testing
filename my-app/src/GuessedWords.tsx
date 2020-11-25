import React from "react";

interface IProps {
  guessedWords: Array<IGuessedWords>;
}

interface IGuessedWords {
  guessedWords: string;
  letterMatchCount: number;
}

function GuessedWords(props: IProps) {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <div data-test="instruction">guess the secret word correctly dude</div>
    );
  } else {
    contents = (
      <div data-test="guessed-word-section">
        <h3>Guessed Words</h3>
        {props.guessedWords.map((data, i) => {
          return (
            <div data-test="guessed-word" key={i}>
              <div>{data.guessedWords}</div>
              <div>{data.letterMatchCount}</div>
            </div>
          );
        })}
      </div>
    );
  }
  return <div data-test="component-words-guessed"> {contents}</div>;

  // return <div></div>;
}

export default GuessedWords;
