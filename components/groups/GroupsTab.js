import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Headline } from "react-native-paper";
import GroupCard from "./GroupCard";
import AppDialog from "../common/Dialog";
import CreateNewGroup from "./CreateNewGroup";
import paperTheme from "../../config/paperTheme";

function GroupsTab(props) {
  const [isCreateGroupDialog, setIsCreateGroupDialog] = useState(true);
  const hideCreateGroupDialog = () => setIsCreateGroupDialog(false);
  return (
    <View style={styles.root}>
      <Headline style={styles.heading}>Groups</Headline>
      <GroupCard />
      <AppDialog
        open={isCreateGroupDialog}
        setOpen={setIsCreateGroupDialog}
        title="Create New Group"
        content={<CreateNewGroup />}
        action={
          <View style={styles.actionContainer}>
            <Button theme={paperTheme} onPress={hideCreateGroupDialog}>
              Cancle
            </Button>
            <Button theme={paperTheme}>Create</Button>
          </View>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 14,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.7)",
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
export default GroupsTab;
