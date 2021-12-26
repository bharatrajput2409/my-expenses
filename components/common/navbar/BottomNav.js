import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import AppText from "../AppText";
import paperTheme from "../../../config/paperTheme";
import Touchable from "../Touchable";
import { useDispatch } from "react-redux";
import { setActiveTab, setAddDialog } from "../../../store/ui";

function BottomNav() {
  const dispatch = useDispatch();
  const handleAddDialog = () => {
    dispatch(setAddDialog());
  };
  const handleTabChange = (tab) => () => {
    dispatch(setActiveTab(tab));
  };
  return (
    <View style={styles.root}>
      <Touchable
        onPress={handleTabChange("shopping")}
        style={styles.homeNavBtn}
      >
        <View style={styles.btnContainer}>
          <FontAwesome
            name="home"
            size={24}
            color={paperTheme.colors.iconColor}
          />
          <Text style={styles.btnText}>Shopping</Text>
        </View>
      </Touchable>
      <View style={[styles.homeNavBtn, { paddingVertical: 0 }]}>
        <View style={styles.plusContainer}>
          <Touchable onPress={handleAddDialog} style={styles.touchablePlus}>
            <View style={styles.plusWrapper}>
              <FontAwesome
                name="plus"
                size={24}
                color={paperTheme.colors.primary}
              />
            </View>
          </Touchable>
        </View>
      </View>
      <Touchable
        onPress={handleTabChange("expenses")}
        style={styles.homeNavBtn}
      >
        <View style={styles.btnContainer}>
          <FontAwesome
            name="money"
            size={24}
            color={paperTheme.colors.iconColor}
          />
          <Text style={styles.btnText}>Expenses</Text>
        </View>
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
    backgroundColor: "white",
    height: 64,
    display: "flex",
    flexDirection: "row",
    elevation: 5,
  },
  homeNavBtn: {
    borderRadius: 25,
    // paddingHorizontal: 15,
    // paddingVertical: 15,
    flex: 1,
    position: "relative",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btnText: {
    color: paperTheme.colors.iconColor,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  dflexrow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  plusContainer: {
    backgroundColor: paperTheme.colors.primary,
    position: "relative",
    left: "50%",
    bottom: 25,
    width: 64,
    height: 64,
    borderRadius: 40,
    transform: [{ translateX: -32 }],
    overflow: "hidden",
    elevation: 2,
  },
  plusWrapper: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    position: "relative",
    top: 7,
    left: 7,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  touchablePlus: {
    height: 64,
  },
});
export default BottomNav;
