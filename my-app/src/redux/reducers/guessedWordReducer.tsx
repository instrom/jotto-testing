import { actionTypes } from "../actions";

// const DEFAULT_STATE = [];

export default function guessedWordReducer(state = [], action: any) {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      //   console.log(guess);
      const tada = action.payload;
      return [...state, tada];

    default:
      return state;
  }
  //   return null;
}
