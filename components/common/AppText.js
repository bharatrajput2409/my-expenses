import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

function AppText({
  children,
  style,
  bold,
  size,
  color,
  padding,
  center,
  ...others
}) {
  const style_ = {};
  if (bold) style_.fontWeight = "bold";
  if (size) style_.fontSize = size;
  if (padding) {
    if (!isNaN(padding)) style_.padding = padding;
    else {
      style_.paddingTop = padding[0];
      style_.paddingRight = padding[1];
      style_.paddingBottom = padding[2];
      style_.paddingLeft = padding[3];
    }
  }
  if (center) style_.textAlign = "center";
  if (color) style_.color = color;
  return (
    <Text style={[style_, style]} {...others}>
      {children}
    </Text>
  );
}
export default AppText;
