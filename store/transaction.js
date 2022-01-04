import { createSlice } from "@reduxjs/toolkit";
import { getTransactions } from "../model/Transaction";

const initialState = {
  list: [],
  loading: true,
  LastFetch: null,
};

const slice = createSlice({
  name: "transaction",
  initialState: initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.LastFetch = Date.now();
    },
    unSetTransaction: (state, action) =>
      void ((state.list = []), (state.loading = true)),
  },
});

export const { setTransaction, unSetTransaction } = slice.actions;
const transaction = slice.reducer;
export default transaction;
export const fetchTransaction = (userId) => async (dispatch) => {
  let txn = await getTransactions(userId);
  dispatch(setTransaction(txn));
};
