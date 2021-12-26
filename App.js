import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import Home from "./components/screens/Home";
import IndividualUser from "./components/screens/IndividualUser";
import ShoppingList from "./components/screens/ShoppingList";
import theme from "./config/defaultStyle";
import paperTheme from "./config/paperTheme";

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <Home />
      {/* <IndividualUser /> */}
      {/* <ShoppingList /> */}
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
