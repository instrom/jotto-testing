import { Dispatch } from "react";
import { getLetterMatchCount } from "../../helpers/matchingLetters";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

export function setCorrectGuess(success: boolean) {
  return { type: actionTypes.CORRECT_GUESS, payload: { success } };
}

export function setGuessWord(guessedWord: string) {
  return function (dispatch: any, getState: any) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessWord: guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS, payload: { success: true } });
    }
  };
  // return { type: actionTypes.GUESS_WORD, payload: { guessedWord } };
}
