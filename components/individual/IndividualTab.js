import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import UserCard from "./UserCard";

function IndividualTab(props) {
  return (
    <View style={styles.root}>
      <Text>individual tab</Text>
      <UserCard />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {},
});
export default IndividualTab;
