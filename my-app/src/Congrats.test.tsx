import React from "react";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";


import Congrats from "./Congrats";
import { findByTestAttr } from "./test/testUtils";

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(0);
});

test("renders congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message").text();
  expect(message.length).not.toBe(0);
});
