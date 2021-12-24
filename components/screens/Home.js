import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Headline, Provider } from "react-native-paper";
import Screen from "../common/Screen";
import PersonalTab from "../personal/PersonalTab";
import GroupsTab from "../groups/GroupsTab";
import IndividualTab from "../individual/IndividualTab";

function Home(props) {
  const [activeTab, setActiveTab] = useState("personal");
  return (
    <Screen style={styles.root} home setActiveTab={setActiveTab}>
      {activeTab === "personal" && <PersonalTab />}
      {activeTab == "individual" && <IndividualTab />}
      {activeTab == "groups" && <GroupsTab />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {},
});
export default Home;
