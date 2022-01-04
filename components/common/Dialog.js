import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
import { useDispatch } from "react-redux";
import { UnSetActiveDialog } from "../../store/ui";
import paperTheme from "../../config/paperTheme";

const AppDialog = ({ open, setOpen, title, content, action }) => {
  const dispatch = useDispatch();
  const hideDialog = () => dispatch(UnSetActiveDialog());

  return (
    <View>
      <Portal>
        <Dialog
          visible={open}
          style={{
            position: "relative",
            overflow: "hidden",
          }}
          onDismiss={hideDialog}
        >
          <View style={styles.topborder}></View>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>{content}</Dialog.Content>
          <Dialog.Actions>{action}</Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  topborder: {
    position: "absolute",
    backgroundColor: paperTheme.colors.primary,
    height: 7,
    top: 0,
    left: 0,
    right: 0,
  },
});

export default AppDialog;
