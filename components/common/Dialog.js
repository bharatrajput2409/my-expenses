import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
import { useDispatch } from "react-redux";
import { UnSetActiveDialog } from "../../store/ui";
import paperTheme from "../../config/paperTheme";
import AppText from "./AppText";

const AppDialog = ({ open, setOpen, title, content, action }) => {
  const dispatch = useDispatch();
  const hideDialog = () => dispatch(UnSetActiveDialog());

  return (
    <Portal>
      <Dialog visible={open} style={styles.root} onDismiss={hideDialog}>
        <AppText bold padding={[10, 10, 10, 20]} color="white" size={20}>
          {title}
        </AppText>
        <View style={styles.container}>
          <Dialog.Content>{content}</Dialog.Content>
          <Dialog.Actions>{action}</Dialog.Actions>
        </View>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: paperTheme.colors.primary,
    elevation: 5,
    borderRadius: 10,
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
  },
});

export default AppDialog;
