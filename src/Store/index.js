import { createStore } from "redux";
import fetchUser from "../utils/fetchLocalStorageData";

const initialState = {
  user: fetchUser(),
  isMenu: false,
};

const reducerFn = (state = initialState, action) => {
  // Synchronous Function
  //   We must not mutate the original state

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "IS_MENU":
      return {
        ...state,
        isMenu: action.isMenu,
      };
    default:
      return state;
  }
};

const store = createStore(reducerFn);
export default store;
