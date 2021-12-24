import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

function AppText({ children: children, style, bold, size, ...others }) {
  const style_ = {};
  if (bold) style_.fontWeight = "bold";
  if (size) style_.fontSize = size;
  return (
    <Text style={[style_, style]} {...others}>
      {children}
    </Text>
  );
}
export default AppText;
