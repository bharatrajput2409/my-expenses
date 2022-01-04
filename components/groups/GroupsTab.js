import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Headline } from "react-native-paper";

import GroupCard from "./GroupCard";
import AppDialog from "../common/Dialog";
import CreateNewGroup from "./CreateNewGroup";
import paperTheme from "../../config/paperTheme";
import AppText from "../common/AppText";

function GroupsTab(props) {
  const [isCreateGroupDialog, setIsCreateGroupDialog] = useState(true);
  const hideCreateGroupDialog = () => setIsCreateGroupDialog(false);
  return (
    <View style={styles.comingsoonroot}>
      <ImageBackground
        source={require("../../assets/dog.png")}
        style={styles.comingImg}
        resizeMode="center"
      />
      <AppText style={styles.comingSoonText}>Coming Soon!</AppText>
    </View>
  );
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
  comingSoonText: {
    color: paperTheme.colors.primary,
    fontSize: 28,
    textAlign: "center",
  },
  comingsoonroot: {
    flex: 1,
    height: "100%",
  },
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
  comingImg: {
    marginTop: 50,
    height: 150,
    width: "100%",
    // backgroundColor: "red",
  },
});
export default GroupsTab;
