import { DefaultTheme } from "react-native-paper";
import theme from "./defaultStyle";

export default paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#e34736",
    accent: "#aa3325",
    lightPrimary: "#f443368a",
    background: "rgba(0,0,0,0.1)",
    borderColor: "rgba(0,0,0,0.1)",
    lightGreen: "#a6e22e73",
  },
};
