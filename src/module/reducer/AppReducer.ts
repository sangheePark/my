import { createReducer } from "deox";
import { State } from "./index";
import { AppAction } from "@module/action";
import { MApp } from "@model/AppModel";

const defaultState: MApp = {
  isLoading: false,
  version: "",
};
export const appReducer = createReducer(defaultState, (handleAction) => [
  handleAction(AppAction.SET_LOADING.action, (state, { payload }) => {
    return {
      ...state,
      isLoading: payload,
    };
  }),
]);

export const appSelector = (state: State) => {
  return state.app;
};
