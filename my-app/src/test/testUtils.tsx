import { ShallowWrapper } from "enzyme";
import rootReducer from "../redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../configureStore";

export const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const storeFactory = (initialState: any) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
