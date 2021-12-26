import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

function AppButton({ style, children, onPress, ...rest }) {
  return (
    <Button style={[styles.root, style]} onPress={onPress} {...rest}>
      {children}
    </Button>
  );
}
const styles = StyleSheet.create({
  root: {},
});
export default AppButton;
