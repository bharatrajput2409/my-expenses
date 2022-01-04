import * as React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import Constants from "expo-constants";
import defaultStyle from "../../../config/defaultStyle";
import AppIconButton from "../IconButton";
import paperTheme from "../../../config/paperTheme";

const BackNav = ({ backAction, title, actions }) => {
  const statusBarHeight = Constants.statusBarHeight;
  return (
    <>
      <StatusBar
        backgroundColor={paperTheme.colors.lightPrimary}
        barStyle="light-content"
      />
      <Appbar.Header
        style={{
          backgroundColor: paperTheme.colors.primary,
          height: defaultStyle.toolbar.nav.height,
          // elevation: 0,
          overflow: "visible",
        }}
        statusBarHeight={0}
      >
        <AppIconButton
          icon="arrow-left"
          onPress={backAction}
          color="white"
          size={32}
        />
        <Appbar.Content
          style={{ padding: 0, marginLeft: -10 }}
          title={title}
          color="white"
        />
        {actions && actions.map((action) => action)}
      </Appbar.Header>
    </>
  );
};
const styles = StyleSheet.create({
  root: {},
  btn: {
    backgroundColor: "transparent",
    paddingVertical: 7,
  },
});
export default BackNav;
