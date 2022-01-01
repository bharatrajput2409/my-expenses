import { DefaultTheme } from "react-native-paper";
import theme from "./defaultStyle";

export default paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2196f3",
    accent: "#aa3325",
    lightPrimary: "#64b5f6",
    background: "#eeeefd",
    borderColor: "rgba(0,0,0,0.1)",
    lightGreen: "#a6e22e73",
    iconColor: "rgba(0,0,0,0.8)",
  },
};
