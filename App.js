import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import Home from "./components/screens/Home";
import IndividualUser from "./components/screens/IndividualUser";
import ShoppingList from "./components/screens/ShoppingList";
import theme from "./config/defaultStyle";
import paperTheme from "./config/paperTheme";
import db from "./model/db";
import store from "./store/store";

export default function App() {
  useEffect(() => {
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "CREATE TABLE IF NOT EXISTS shopping (id INTEGER PRIMARY KEY AUTOINCREMENT, list TEXT)"
    //   ),
    //     null,
    //     (a, b) => {
    //       console.log(a, b);
    //     };
    // });
    const user = {
      name: "bharat",
      age: 22,
    };
    const list = JSON.stringify(user);
    console.log(list, "list");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO shopping (list) values (?)",
        [list],
        (a, b) => {
          console.log(a, b);
        },
        (a, b) => {
          console.log(a, b);
        }
      );
    });
    db.transaction((tx) => {
      // sending 4 arguments in executeS
      tx.executeSql(
        "SELECT * FROM shopping",
        null,
        (txObj, b) => console.log("data", txObj, b),
        (txObj, error) => console.log("Error ", error)
      );
    });
  }, []);
  return (
    <PaperProvider theme={paperTheme}>
      <Provider store={store}>
        <Home />
        {/* <IndividualUser /> */}
        {/* <ShoppingList /> */}
      </Provider>
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
