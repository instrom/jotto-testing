import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("returns default initial stte of false when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toEqual({ success: false });
});

test("returns stete of true upon receiving an action of type CORRECT_GUESS", () => {
  const newState = successReducer(
    { success: true },
    {
      type: actionTypes.CORRECT_GUESS,
      payload: {
        success: true,
      },
    }
  );
  expect(newState).toEqual({ success: true });
});
