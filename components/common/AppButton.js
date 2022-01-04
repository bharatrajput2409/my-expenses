import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import paperTheme from "../../config/paperTheme";

function AppButton({ style, children, onPress, ...rest }) {
  return (
    <Button
      style={[styles.root, style]}
      onPress={onPress}
      {...rest}
      theme={paperTheme}
    >
      {children}
    </Button>
  );
}
const styles = StyleSheet.create({
  root: {},
});
export default AppButton;
