import { shallow } from "enzyme";
import moxios from "moxios";
import { findByTestAttr } from "../../test/testUtils";
import { storeFactory } from "../../test/testUtils";
import { setSecretWord } from "./";

describe("get secretword action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("add response word to state", () => {
    const secretWord = "party";
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(setSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
