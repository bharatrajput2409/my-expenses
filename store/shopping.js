import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: true,
  lastFetch: null,
};
shoppingList = {
  id: "unique id",
  name: "Mangalore Shopping",
  image: "",
  items: [
    {
      name, //unique
      quantity,
      isBought: false,
      price: null,
      paymentBy,
    },
  ],
  //   createdAt: "date here...",
  //   updatedAt: "date....",
};
const slice = createSlice({
  name: "shoppingList",
  initialState: initialState,
});
