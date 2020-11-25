export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

export default function setCorrectGuess(success: boolean) {
  return { type: actionTypes.CORRECT_GUESS, payload: { success } };
}
