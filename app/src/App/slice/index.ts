import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../utils/@reduxjs/toolkit";
import { AppState } from "./types";

export const initialState: AppState = {
  mode: "light"
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<undefined>) {
      state.mode = state.mode === "dark" ? "light" : "dark";
    }
  }
});

export const { actions: authActions, reducer: appReducer } = slice;

export const useAppSlice = () => {
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAppSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
