import * as React from "react";
import { View } from "react-native";
import { Dialog, Portal } from "react-native-paper";

const AppDialog = ({ open, setOpen, title, content, action }) => {
  const hideDialog = () => setOpen(false);

  return (
    <View>
      <Portal>
        <Dialog visible={open} onDismiss={hideDialog}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>{content}</Dialog.Content>
          <Dialog.Actions>{action}</Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default AppDialog;
