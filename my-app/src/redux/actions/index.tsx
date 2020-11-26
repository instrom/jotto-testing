import { Dispatch } from "react";
import { getLetterMatchCount } from "../../helpers/matchingLetters";
import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
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

export function setSecretWord() {
  return function (dispatch: any, getState: any) {
    // const options = {
    //   method: "GET",
    //   url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/Ysera",
    //   headers: {
    //     "x-rapidapi-key": "89a5f6c0edmshc679ac3385a3495p1c00e7jsn6c7e097bf2eb",
    //     "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    //   },
    // };

    return axios
      .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/Ysera", {
        headers: {
          "x-rapidapi-key":
            "89a5f6c0edmshc679ac3385a3495p1c00e7jsn6c7e097bf2eb",
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      })
      .then(function (response) {
        // console.log(response, 'ini response');
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: response.data,
        });
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
}
