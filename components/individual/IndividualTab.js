import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import AppText from "../common/AppText";
import UserCard from "./UserCard";

function IndividualTab(props) {
  const users = useSelector((state) => state.user);
  return (
    <View style={styles.root}>
      <AppText bold padding={10}>
        Individual expenses
      </AppText>
      {users.list.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
      {!users?.list?.length && (
        <AppText center color="rgba(0,0,0,0.6)">
          Create new user by clicking + button below
        </AppText>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  root: {},
});
export default IndividualTab;
