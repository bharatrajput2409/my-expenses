import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import AppText from "../common/AppText";
import ShoppingListCard from "./ShoppingListCard";

function ShoppingTab(props) {
  return (
    <View style={styles.root}>
      <AppText bold color="rgba(0,0,0,0.7)" style={styles.heading}>
        Shopping Lists
      </AppText>
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
