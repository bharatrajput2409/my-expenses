import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

function AppButton({ style, children, onPress }) {
  return (
    <Button style={[styles.root, style]} onPress={onPress}>
      {children}
    </Button>
  );
}
const styles = StyleSheet.create({
  root: {},
});
export default AppButton;
