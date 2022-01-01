import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider, useDispatch } from "react-redux";

import Home from "./components/screens/Home";
import IndividualUser from "./components/screens/IndividualUser";
import ShoppingList from "./components/screens/ShoppingList";
import theme from "./config/defaultStyle";
import paperTheme from "./config/paperTheme";
import db from "./model/db";
import store from "./store/store";
import { fetchUsers } from "./store/users";
import AboutDeveloper from "./components/AboutDeveloper";

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
        {/* <Home />  */}
        {/* <IndividualUser /> */}
        {/* <ShoppingList /> */}
      </Provider>
    </PaperProvider>
  );
}

function StackNavigation() {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shopping" component={Home} />
      <Stack.Screen name="aboutUs" component={AboutDeveloper} />
      <Stack.Screen name="individualUser" component={IndividualUser} />
      <Stack.Screen name="shoppingPage" component={IndividualUser} />
    </Stack.Navigator>
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
