// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "./test/testUtils";
import App from "./App";
import Congrats from "./Congrats";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store}></App>).dive();
  // .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe("render", () => {
  test("rendered without render", () => {
    const wrapper = setup().dive();
    const appComponent = findByTestAttr(wrapper, "app-test");
    // console.log(appComponent.debug());
    expect(appComponent.length).toBe(1);
  });
});

describe("redux props", () => {
  test("state redux for success state", () => {
    const wrapper = setup({
      success: {
        success: true,
      },
    });
    // console.log();
    const successProp = wrapper.props().success;
    expect(successProp).toBe(true);
  });

  test("state redux for secretword", () => {
    const secretWord = "party";
    const wrapper = setup({
      secretWord,
    });
    const secretWordProps = wrapper.props().secretWord;
    // console.log(secretWordProps);
    expect(secretWordProps).toEqual(secretWord);
  });

  test("state redux for guessedword", () => {
    const guessWord = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({
      guessWord,
    });
    const guessWordProps = wrapper.props().guessWord;
    expect(guessWordProps).toEqual(guessWord);
  });

  test("has access to action setGuessWord action creater", () => {
    const wrapper = setup();
    const setGuessWordProp = wrapper.props().setGuessWord;
    // console.log(setGuessWordProp);
    expect(setGuessWordProp).toBeInstanceOf(Function);
  });
});
