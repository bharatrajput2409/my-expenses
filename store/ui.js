import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addDialog: false,
  activeTab: "shopping",
  expeseTab: "individual",
};
const slice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setAddDialog: (state, action) => void (state.addDialog = true),
    UnSetAddDialog: (state, action) => void (state.addDialog = false),
    setActiveTab: (state, action) => void (state.activeTab = action.payload),
  },
});

export const { setActiveTab, setAddDialog, UnSetAddDialog } = slice.actions;

const ui = slice.reducer;
export default ui;
