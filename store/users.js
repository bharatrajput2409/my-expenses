import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: true,
  lastFetch: null,
};
// user = {
//   id: "unique id",
//   name: "bharat singh",
//   phone: "74270....",
//   email: "bharatrajput2409@gmail.com",
// };
const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    }, //void prevent return value .
    unSetUsers: (state, action) => void (state.list = []), //returning updated state will cause error(no need to return)
    setLoading: (state) => void (state.loading = true),
    unSetLoading: (state) => void (state.loading = false),
  },
});
