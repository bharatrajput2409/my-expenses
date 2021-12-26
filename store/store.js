import { configureStore } from "@reduxjs/toolkit";
import ui from "./ui";
const store = configureStore({
  reducer: {
    ui,
  },
});

export default store;
