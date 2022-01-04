import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Provider } from "react-native-paper";

import NavBar from "./navbar/NavBar";
import defaultStyle from "../../config/defaultStyle";
import BackNav from "./navbar/BackNav";
import BottomNav from "./navbar/BottomNav";
import paperTheme from "../../config/paperTheme";
import AddScreen from "./AddScreen";
function Screen({
  children,
  style,
  expeseNav,
  setActiveTab,
  navBar,
  backNav,
  backAction,
  navTitle,
  bottomNav,
  actions,
}) {
  const [plusDialog, setplusDialog] = useState(false);
  const activeDialog = useSelector((state) => state.ui.activeDialog);

  return (
    <>
      <SafeAreaView style={[styles.root, style && style]}>
        {!backNav &&
          (navBar ? (
            navBar
          ) : (
            <NavBar expeseNav={expeseNav} setActiveTab={setActiveTab} />
          ))}
        {backNav && (
          <BackNav backAction={backAction} actions={actions} title={navTitle} />
        )}
        <Provider>
          <ScrollView style={styles.scrollView}>{children}</ScrollView>
        </Provider>
        {bottomNav && <BottomNav />}
        {activeDialog === "addNewStuffDialog" && <AddScreen />}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    position: "relative",
  },
  scrollView: {
    flex: 1,
    backgroundColor: paperTheme.colors.background,
  },
  BottomNav: {
    backgroundColor: defaultStyle.palette.primary,
    height: defaultStyle.toolbar.bottomNav.height,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomNavBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: defaultStyle.toolbar.bottomNav.height,
    flex: 1,
  },
});

export default Screen;
