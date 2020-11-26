import { actionTypes } from "../actions";

export default function secretWordReducer(state = null, action: any) {
  //   return state;
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      const secretWord = action.payload;
      return secretWord;
    default:
      return state;
  }
}
