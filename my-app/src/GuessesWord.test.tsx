import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWords: "train",
      letterMatchCount: 2,
    },
  ],
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

// test("", () => {});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-words-guessed");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word ", () => {
    const instruction = findByTestAttr(wrapper, "instruction");
    expect(instruction.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    {
      guessedWords: "train",
      letterMatchCount: 3,
    },
    {
      guessedWords: "agile",
      letterMatchCount: 1,
    },
    {
      guessedWords: "party",
      letterMatchCount: 5,
    },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-words-guessed");
    expect(component.length).toBe(1);
  });
  test("renders guessed word section ", () => {
    const guessedWordSection = findByTestAttr(wrapper, "guessed-word-section");
    expect(guessedWordSection.length).toBe(1);
  });
  test("renders number of guessed words", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
