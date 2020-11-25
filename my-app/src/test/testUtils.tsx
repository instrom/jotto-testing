import { ShallowWrapper } from "enzyme";
import rootReducer from "../redux/reducers";
import { createStore } from "redux";

export const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const storeFactory = (initialState: any) => {
  return createStore(rootReducer, initialState);
};
