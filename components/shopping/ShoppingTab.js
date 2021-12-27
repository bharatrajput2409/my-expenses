import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { getTransactions } from "../../model/Transaction";
import { createUser, deleteUser, getUsers } from "../../model/Users";
import AppText from "../common/AppText";
import ShoppingListCard from "./ShoppingListCard";

function ShoppingTab(props) {
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
          let users = await getTransactions(17);
          console.log(users, "users");
        }}
      />
      <Button
        title="delete user"
        onPress={async () => {
          let users = await deleteUser(2);
          console.log(users, "users");
        }}
      /> */}
      <ShoppingListCard />
      <ShoppingListCard />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {},
  heading: {
    color: "rgba(0,0,0,0.7)",
    padding: 10,
  },
});
export default ShoppingTab;
