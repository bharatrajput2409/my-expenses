import { DefaultTheme } from "react-native-paper";
import theme from "./defaultStyle";

export default paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fad851",
    accent: "#aa3325",
    lightPrimary: "#fad851a6",
    background: "rgba(0,0,0,0.1)",
    borderColor: "rgba(0,0,0,0.1)",
    lightGreen: "#a6e22e73",
    iconColor: "rgba(0,0,0,0.8)",
  },
};
