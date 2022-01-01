import { configureStore } from "@reduxjs/toolkit";
import ui from "./ui";
import user from "./users";
import transaction from "./transaction";
import shopping from "./shopping";
const store = configureStore({
  reducer: {
    ui,
    user,
    transaction,
    shopping,
  },
});

export default store;
