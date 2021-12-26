import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../model/Users";

const initialState = {
  list: [],
  loading: true,
  lastFetch: null,
};
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
const { setUsers } = slice.actions;
export const fetchUsers = () => async (dispatch) => {
  let users = await getUsers();
  dispatch(setUsers(users));
};

const user = slice.reducer;
export default user;
