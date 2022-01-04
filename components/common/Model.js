import React from "react";
import { StyleSheet, Modal, View } from "react-native";
import { Button } from "react-native-paper";
import defaultStyle from "../../config/defaultStyle";

function AppModel({ children, visible, onRequestClose, style, ...otherProps }) {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      style={[styles.root, style && style]}
      {...otherProps}
    >
      <View style={styles.closeBtnContainer}>
        <Button
          textStyle={styles.closeText}
          onPress={onRequestClose}
          contentStyle={{ height: 50 }}
        >
          Close
        </Button>
      </View>
      {children}
    </Modal>
  );
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    zIndex: 1000,
  },
  closeText: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    color: defaultStyle.palette.danger,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  closeBtnContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
export default AppModel;
