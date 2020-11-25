import { storeFactory, findByTestAttr } from "./test/testUtils";
import { setGuessWord } from "./redux/actions";

describe("guessword action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";
  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
      console.log(store);
    });
    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(setGuessWord(unsuccessfulGuess));
      const newState = store.getState();
    //   console.log(newState, "ini new state");
      const expectedState = {
        ...initialState,
        success: {
          success: false,
        },
        guessWord: [
          {
            guessWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
    //   console.log(newState, "ini new state");
    //   console.log(expectedState, "ini expected state");
      expect(newState).toEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      store.dispatch(setGuessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: {
          success: true,
        },
        guessWord: [
          {
            guessWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("some guessed words", () => {
    const guessWord = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessWord, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(setGuessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: {
          success: false,
        },
        guessWord: [
          ...guessWord,
          { guessWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      store.dispatch(setGuessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: {
          success: true,
        },
        guessWord: [
          ...guessWord,
          {
            guessWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
