import React from "react";
import { TouchableRipple } from "react-native-paper";

function Touchable({ children, onPress, style, ...others }) {
  return (
    <TouchableRipple
      rippleColor="rgba(0, 0, 0, .2)"
      onPress={onPress}
      style={[style]}
      {...others}
    >
      {children}
    </TouchableRipple>
  );
}

export default Touchable;
