import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Headline, Provider } from "react-native-paper";
import Screen from "../common/Screen";
import PersonalTab from "../personal/PersonalTab";
import GroupsTab from "../groups/GroupsTab";
import IndividualTab from "../individual/IndividualTab";
import ShoppingTab from "../shopping/ShoppingTab";
import { useSelector } from "react-redux";

function Home({ navigation, route }) {
  const activeTab = useSelector((state) => state.ui.activeTab);
  const expeseTab = useSelector((state) => state.ui.expeseTab);

  return (
    <Screen style={styles.root} expeseNav={activeTab === "expenses"} bottomNav>
      {activeTab === "shopping" && <ShoppingTab />}
      {/* {activeTab === "personal" && <PersonalTab />} */}
      {expeseTab == "individual" && <IndividualTab />}
      {expeseTab == "groups" && <GroupsTab />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {},
  navigator: {
    backgroundColor: "red",
    paddingTop: 40,
    position: "absolute",
    bottom: 0,
  },
});
export default Home;
