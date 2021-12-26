import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "shopping",
  expeseTab: "individual",
  activeDialog: "",
};
const slice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setActiveDialog: (state, action) =>
      void (state.activeDialog = action.payload),
    UnSetActiveDialog: (state, action) => void (state.activeDialog = false),
    setActiveTab: (state, action) => void (state.activeTab = action.payload),
  },
});

export const { setActiveTab, setActiveDialog, UnSetActiveDialog } =
  slice.actions;

const ui = slice.reducer;
export default ui;
