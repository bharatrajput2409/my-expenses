import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "expenses",
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
    setExpenseTab: (state, action) => void (state.expeseTab = action.payload),
  },
});

export const {
  setActiveTab,
  setActiveDialog,
  UnSetActiveDialog,
  setExpenseTab,
} = slice.actions;

const ui = slice.reducer;
export default ui;
