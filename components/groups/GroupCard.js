import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Paper from "../common/Paper";
import theme from "../../config/defaultStyle";

function GroupCard(props) {
  const groupMembers = ["Ankit", "Somesh", "Keshav"];
  return (
    <Paper style={styles.root}>
      <View style={styles.iconContainer}>
        <FontAwesome name="group" size={32} color={theme.palette.primary} />
      </View>
      <View style={styles.left}>
        <View>
          <Text style={styles.groupname}>Goa Trip</Text>
        </View>
        <View style={styles.memberContainer}>
          {groupMembers.map((member) => (
            <Text style={styles.groupMembers} key={member}>
              {member}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.money}>₹100</Text>
      </View>
    </Paper>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
  left: {
    flexGrow: 1,
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
    fontWeight: "bold",
    color: "rgba(0,0,0,0.7)",
    fontSize: 17,
  },
  groupMembers: {
    color: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 5,
    backgroundColor: theme.palette.primary,
    fontSize: 12,
    paddingVertical: 3,
  },
  memberContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    paddingRight: 10,
  },
});
export default GroupCard;
