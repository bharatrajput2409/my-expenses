import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import Home from "./components/screens/Home";
import IndividualUser from "./components/screens/IndividualUser";
import theme from "./config/defaultStyle";

const themePaper = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.palette.primary,
    accent: "blue",
  },
};

export default function App() {
  return (
    <PaperProvider theme={themePaper}>
      {/* <Home /> */}
      <IndividualUser />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
