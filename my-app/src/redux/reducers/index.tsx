import { combineReducers } from "redux";
import successReducer from "./successReducer";
import guessedWordsReducer from "./guessedWordReducer";
import secretWordReducer from "./secretWordReducer";

export default combineReducers({
  success: successReducer,
  guessWord: guessedWordsReducer,
  secretWord: secretWordReducer,
});
