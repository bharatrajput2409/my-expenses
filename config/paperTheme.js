import { DefaultTheme } from "react-native-paper";
import theme from "./defaultStyle";

export default paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f44336",
    accent: "#aa3325",
    lightPrimary: "#f44336",
    background: "#eeeefd",
    borderColor: "rgba(0,0,0,0.1)",
    lightGreen: "rgba(0,255,0,.1)",
    iconColor: "rgba(0,0,0,0.8)",
  },
};
