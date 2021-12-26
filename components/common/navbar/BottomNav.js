import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import AppText from "../AppText";
import paperTheme from "../../../config/paperTheme";
import Touchable from "../Touchable";

function BottomNav({ setActiveTab }) {
  return (
    <View style={styles.root}>
      <Touchable
        onPress={() => setActiveTab("shopping")}
        style={styles.homeNavBtn}
      >
        <Text style={styles.btnText}>Shopping</Text>
      </Touchable>
      <Touchable
        onPress={() => setActiveTab("expense")}
        style={styles.homeNavBtn}
      >
        <Text style={styles.btnText}>Expenses</Text>
      </Touchable>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: paperTheme.colors.primary,
    height: 64,
    display: "flex",
    flexDirection: "row",
  },
  homeNavBtn: {
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  dflexrow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default BottomNav;
