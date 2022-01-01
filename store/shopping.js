import { createSlice } from "@reduxjs/toolkit";
import { getShopping } from "../model/shopping";

const initialState = {
  list: [],
  loading: true,
  lastFetch: null,
};
// shoppingList = {
//   id: "unique id",
//   name: "Mangalore Shopping",
//   image: "",
//   items: [
//     {
//       name, //unique
//       quantity,
//       isBought: false,
//       price: null,
//       paymentBy,
//     },
//   ],
//   //   createdAt: "date here...",
//   //   updatedAt: "date....",
// };
const slice = createSlice({
  name: "shopping",
  initialState: initialState,
  reducers: {
    setShopping: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    unSetShopping: (state, action) => void (state.list = action.payload),
  },
});
const { setShopping, unSetShopping } = slice.actions;
export default slice.reducer;
export const fetchShopping = () => async (dispatch) => {
  let list = await getShopping();
  dispatch(setShopping(list));
};
