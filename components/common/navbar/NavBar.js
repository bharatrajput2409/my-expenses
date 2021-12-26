import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import Constants from "expo-constants";
import defaultStyle from "../../../config/defaultStyle";
import NavDrawer from "./NavDrawer";
import AppIconButton from "../IconButton";
import Touchable from "../Touchable";
import paperTheme from "../../../config/paperTheme";
import { useSelector } from "react-redux";

const NavBar = ({ expeseNav, setActiveTab }) => {
  const statusBarHeight = Constants.statusBarHeight;
  const [navOpen, setNavOpen] = React.useState(false);
  const activeTab = useSelector((state) => state.ui.activeTab);
  return (
    <>
      <StatusBar
        backgroundColor={paperTheme.colors.lightPrimary}
        barStyle="dark-content"
      />
      <Appbar.Header
        style={{
          backgroundColor: paperTheme.colors.primary,
          height: defaultStyle.toolbar.nav.height,
          elevation: 0,
        }}
        statusBarHeight={0}
      >
        <Appbar.Content
          title={activeTab}
          titleStyle={styles.heading}
          color="black"
        />
        <AppIconButton
          icon="menu"
          onPress={() => setNavOpen(!navOpen)}
          color="black"
          size={25}
        />
      </Appbar.Header>
      {expeseNav && (
        <View style={styles.homeNav}>
          <Touchable
            onPress={() => setActiveTab("individual")}
            style={styles.homeNavBtn}
          >
            <Text style={styles.text}>Individual</Text>
          </Touchable>
          <Touchable
            onPress={() => setActiveTab("groups")}
            style={styles.homeNavBtn}
          >
            <Text style={styles.text}>Groups</Text>
          </Touchable>
        </View>
      )}
      <NavDrawer
        open={navOpen}
        setNavOpen={setNavOpen}
        setActiveTab={setActiveTab}
      />
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
    backgroundColor: paperTheme.colors.primary,
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
  heading: {
    textTransform: "capitalize",
  },
  text: {
    color: paperTheme.colors.iconColor,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default NavBar;
