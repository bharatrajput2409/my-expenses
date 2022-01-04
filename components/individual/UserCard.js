import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/core";
import Touchable from "../common/Touchable";

function UserCard({ data }) {
  const groupMembers = ["Ankit", "Somesh", "Keshav"];
  const navigator = useNavigation();
  const handleNavigation = (userId) => () => {
    navigator.navigate("individualUser", { userId });
  };
  return (
    <Touchable style={styles.root} onPress={handleNavigation(data.id)}>
      <>
        <View style={styles.left}>
          <Text style={styles.groupname}>{data.name}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.money}>₹{data.amount}</Text>
        </View>
      </>
    </Touchable>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    borderColor: "rgba(0,0,0,0.1)",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: "white",
    marginBottom: 3,
  },
  left: {
    flexGrow: 1,
    justifyContent: "center",
  },
  right: {
    display: "flex",
    justifyContent: "center",
  },
  money: {
    fontWeight: "bold",
    color: "rgba(0,0,0,0.7)",
  },
  groupname: {
    color: "rgba(0,0,0,0.7)",
    fontSize: 17,
  },
});
export default UserCard;
