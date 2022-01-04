import React from "react";
import { Linking, StyleSheet } from "react-native";
import AppDrawer from "../Drawer";
import { Drawer } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import AppText from "../AppText";

function NavDrawer({ open, setNavOpen, setActiveTab }) {
  const [active, setActive] = React.useState(0);
  const navigator = useNavigation();
  const navArray = [
    {
      icon: ({ size, color }) => (
        <FontAwesome name="user" size={size} color={color} />
      ),
      label: "About App",
      onPress: () => navigator.navigate("aboutUs"),
    },
    {
      icon: ({ size, color }) => (
        <MaterialIcons name="send" size={size} color={color} />
      ),
      label: "Feedback",
      onPress: () => Linking.openURL("mailto:bharatrajput2409@gmail.com"),
    },
  ];
  return (
    <AppDrawer open={open} style={{ zIndex: 10001 }}>
      <Drawer.Section style={{ marginTop: 8 }}>
        {navArray.map((item, index) => (
          <Drawer.Item
            key={item.label}
            label={item.label}
            active={false}
            onPress={() => {
              item.onPress();
              setActive(index);
              setNavOpen(false);
            }}
            icon={item.icon}
          />
        ))}
        <AppText></AppText>
      </Drawer.Section>
    </AppDrawer>
  );
}
const styles = StyleSheet.create({
  root: {},
});
export default NavDrawer;
