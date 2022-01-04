import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import defaultStyle from "../../config/defaultStyle";
import { Headline } from "react-native-paper";
import paperTheme from "../../config/paperTheme";
const top = Constants.statusBarHeight;
const width = 240;
function Drawer({ children, right, style, open }) {
  return (
    <View
      style={[
        styles.root,
        { [right ? "right" : "left"]: 0 },
        { transform: [{ translateX: open ? 0 : right ? width : -width }] },
        style && style,
      ]}
    >
      <View style={[styles.companyDetails]}>
        <Headline
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 21,
            paddingLeft: 20,
          }}
        >
          My Expenses
        </Headline>
      </View>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width,
    zIndex: 10000,
    elevation: 10,
  },
  topPaddingContainer: {
    height: top,
    backgroundColor: paperTheme.colors.primary,
    opacity: 0.1,
  },
  companyDetails: {
    height: defaultStyle.toolbar.nav.height,
    backgroundColor: paperTheme.colors.primary,
    justifyContent: "flex-start",
    paddingLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Drawer;
