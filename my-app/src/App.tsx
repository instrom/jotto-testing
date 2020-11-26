import React from "react";
import "./App.css";
import GuessedWord from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";
import { connect } from "react-redux";
import { setGuessWord } from "./redux/actions/index";

interface IProps {
  secretWord: string;
  success: boolean;
}

const App = (props: IProps) => {
  // console.log(props, 'ini props');
  // render() {
  return (
    <div className="App" data-test="app-test">
      <h1>Jotto app</h1>
      <Input></Input>
      <Congrats success={true}></Congrats>
      <GuessedWord
        guessedWords={[{ guessedWords: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
  // }
};

const mapStateToProps = (state: any) => {
  return {
    secretWord: state.secretWord,
    success: state.success.success,
    guessWord: state.guessWord,
  };
};

const mapDispatchToProps = () => {
  return {
    setGuessWord,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
