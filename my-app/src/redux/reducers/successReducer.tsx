import { actionTypes } from "../actions";

const DEFAULT_STATE = {
  success: false,
};

export default function successReducer(state = DEFAULT_STATE, action: any) {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      const { success } = action.payload;
      return { ...DEFAULT_STATE, success };
    default:
      return state;
  }
}
