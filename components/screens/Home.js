import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../common/Screen";
import GroupsTab from "../groups/GroupsTab";
import IndividualTab from "../individual/IndividualTab";
import ShoppingTab from "../shopping/ShoppingTab";
import { useSelector } from "react-redux";

function Home({ navigation, route }) {
  const activeTab = useSelector((state) => state.ui.activeTab);
  const expeseTab = useSelector((state) => state.ui.expeseTab);

  return (
    <Screen style={styles.root} bottomNav>
      {activeTab === "shopping" && <ShoppingTab />}
      {/* {activeTab === "personal" && <PersonalTab />} */}
      {expeseTab == "individual" && activeTab === "expenses" && (
        <IndividualTab />
      )}
      {expeseTab == "groups" && activeTab === "expenses" && <GroupsTab />}
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
