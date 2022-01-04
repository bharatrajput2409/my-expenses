import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteShopping, getShopping } from "../../model/shopping";
import { getTransactions } from "../../model/Transaction";
import { createUser, deleteUser, getUsers } from "../../model/Users";
import { fetchShopping } from "../../store/shopping";
import AppText from "../common/AppText";
import ShoppingListCard from "./ShoppingListCard";

function ShoppingTab(props) {
  const shopping = useSelector((state) => state.shopping);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchShopping());
  }, []);
  return (
    <View style={styles.root}>
      <AppText bold color="rgba(0,0,0,0.7)" style={styles.heading}>
        Shopping Lists
      </AppText>
      {/* <Button
        title="get users"
        onPress={async () => {
          // let res = await createUser({
          //   name: "bharat singh",
          //   phone: "7427064864",
          // });
          // console.log(res);
          let users = await getShopping();
          console.log(users, "users");
        }}
      />
      <Button
        title="delete user"
        onPress={async () => {
          let users = await deleteShopping(1);
          console.log(users, "users");
        }}
      /> */}
      {shopping.list.map((list) => (
        <ShoppingListCard key={list.id} data={list} />
      ))}
      {shopping.list.length === 0 && (
        <AppText style={styles.helperText}>
          Create new shopping list by clicking + button below
        </AppText>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  root: {},
  heading: {
    color: "rgba(0,0,0,0.7)",
    padding: 10,
  },
  helperText: {
    color: "rgba(0,0,0,0.6)",
    paddingHorizontal: 10,
    textAlign: "center",
  },
});
export default ShoppingTab;
