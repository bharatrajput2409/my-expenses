import { configureStore } from "@reduxjs/toolkit";
import ui from "./ui";
import user from "./users";
import transaction from "./transaction";
const store = configureStore({
  reducer: {
    ui,
    user,
    transaction,
  },
});

export default store;
