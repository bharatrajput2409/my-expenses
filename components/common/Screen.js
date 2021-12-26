import React from "react";
import { SafeAreaView, StyleSheet, Text, ScrollView, View } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";

import Constants from "expo-constants";
import NavBar from "./navbar/NavBar";
import defaultStyle from "../../config/defaultStyle";
import AppFabs from "./Fabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import TouchableComponent from "./Touchable";
import BackNav from "./navbar/BackNav";
import BottomNav from "./navbar/BottomNav";
function Screen({
  children,
  style,
  home,
  setActiveTab,
  navBar,
  backNav,
  backAction,
  navTitle,
  bottomNav,
}) {
  return (
    <>
      <SafeAreaView style={[styles.root, style && style]}>
        {!backNav &&
          (navBar ? (
            navBar
          ) : (
            <NavBar home={Boolean(home)} setActiveTab={setActiveTab} />
          ))}
        {backNav && <BackNav backAction={backAction} title={navTitle} />}
        <Provider>
          <ScrollView style={styles.scrollView}>{children}</ScrollView>
        </Provider>
        {/* {bottomNav && <BottomNav setActiveTab={setActiveTab} />} */}
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
