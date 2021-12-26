import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

function AppText({ children, style, bold, size, padding, ...others }) {
  const style_ = {};
  if (bold) style_.fontWeight = "bold";
  if (size) style_.fontSize = size;
  if (padding) style_.padding = padding;
  return (
    <Text style={[style_, style]} {...others}>
      {children}
    </Text>
  );
}
export default AppText;
