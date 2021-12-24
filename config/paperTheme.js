import { DefaultTheme } from "react-native-paper";
import theme from "./defaultStyle";

export default paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f44336",
    accent: "#aa3325",
    lightPrimary: "#e347369c",
    background: "rgba(0,0,0,0.1)",
  },
};
