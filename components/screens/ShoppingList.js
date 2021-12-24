import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../common/Screen";
import AppText from "../common/AppText";
import ItemCard from "../shopping/ItemCard";

function ShoppingList(props) {
  return (
    <Screen
      style={styles.root}
      backNav
      backAction={() => console.log("going back...")}
      navTitle="Mangalore shopping"
    >
      {/* <AppText bold size={16} style={styles.heading}>
        Items
      </AppText> */}
      <ItemCard bought />
    </Screen>
  );
}
const styles = StyleSheet.create({
  root: {},
  heading: {
    padding: 10,
    color: "rgba(0,0,0,0.7)",
  },
});
export default ShoppingList;
