import setCorrectGuess, { actionTypes } from "./";

describe("correct guess", () => {
  test("returns an action with type `CORRECT_GUESS` ", () => {
    const action = setCorrectGuess(true);
    expect(action).toEqual({
      type: actionTypes.CORRECT_GUESS,
      payload: { success: true },
    });
  });
});
