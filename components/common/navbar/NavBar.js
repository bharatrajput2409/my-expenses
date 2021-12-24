import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import Constants from "expo-constants";
import defaultStyle from "../../../config/defaultStyle";
import NavDrawer from "./NavDrawer";
import AppIconButton from "../IconButton";
import Touchable from "../Touchable";
import paperTheme from "../../../config/paperTheme";

const NavBar = ({ home, setActiveTab }) => {
  const statusBarHeight = Constants.statusBarHeight;
  const [navOpen, setNavOpen] = React.useState(false);
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
          elevation: 0,
        }}
        statusBarHeight={0}
      >
        <Appbar.Content title="Expenses" />
        <AppIconButton
          icon="menu"
          onPress={() => setNavOpen(!navOpen)}
          color="white"
          size={25}
        />
      </Appbar.Header>
      {home && (
        <View style={styles.homeNav}>
          <Touchable
            onPress={() => setActiveTab("personal")}
            style={styles.homeNavBtn}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Personal
            </Text>
          </Touchable>
          <Touchable
            onPress={() => setActiveTab("individual")}
            style={styles.homeNavBtn}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Individual
            </Text>
          </Touchable>
          <Touchable
            onPress={() => setActiveTab("groups")}
            style={styles.homeNavBtn}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Groups
            </Text>
          </Touchable>
        </View>
      )}
      <NavDrawer open={navOpen} />
    </>
  );
};
const styles = StyleSheet.create({
  root: {},
  btn: {
    backgroundColor: "transparent",
    paddingVertical: 7,
  },
  homeNav: {
    backgroundColor: defaultStyle.palette.primary,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  homeNavBtn: {
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 5,
    flex: 1,
  },
});
export default NavBar;
