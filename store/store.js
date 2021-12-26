import { configureStore } from "@reduxjs/toolkit";
import ui from "./ui";
import user from "./users";
const store = configureStore({
  reducer: {
    ui,
    user,
  },
});

export default store;
