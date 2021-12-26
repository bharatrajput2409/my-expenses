import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import AppText from "../common/AppText";
import UserCard from "./UserCard";

function IndividualTab(props) {
  const users = useSelector((state) => state.user);
  console.log(users, "users");
  return (
    <View style={styles.root}>
      <AppText bold padding={10}>
        Individual expenses
      </AppText>
      {users.list.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  root: {},
});
export default IndividualTab;
