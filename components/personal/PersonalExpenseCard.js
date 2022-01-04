import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Paper from "../common/Paper";
import theme from "../../config/defaultStyle";

function PersonalExpenseCard(props) {
  return (
    <Paper style={styles.root}>
      <View style={styles.left}>
        <View>
          <Text style={styles.groupname}>Goa Trip</Text>
        </View>
        <View style={styles.memberContainer}>
          <Text>27-12-2022</Text>
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
    marginHorizontal: -14,
    borderRadius: 0,
    elevation: 0,
    borderColor: "rgba(0,0,0,0.1)",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginBottom: 10,
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
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    paddingRight: 10,
  },
});
export default PersonalExpenseCard;
