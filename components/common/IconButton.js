import * as React from "react";
import { IconButton } from "react-native-paper";

const AppIconButton = ({
  icon,
  color = "white",
  size = 25,
  onPress,
  ...other
}) => (
  <IconButton
    icon={icon}
    color={color}
    size={size}
    onPress={onPress}
    {...other}
  />
);

export default AppIconButton;
