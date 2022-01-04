import React from "react";
import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

function Paper({ children, style, ...others }) {
  return (
    <Surface style={[styles.root, style && style]} {...others}>
      {children}
    </Surface>
  );
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    borderRadius: 4,
    elevation: 4,
  },
});
export default Paper;
