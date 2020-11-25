import React from "react";
import "./App.css";
import GuessedWord from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";

function App() {
  return (
    <div className="App">
      <h1>Jotto app</h1>
      <Input></Input>
      <Congrats success={true}></Congrats>
      <GuessedWord
        guessedWords={[{ guessedWords: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
