import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppDrawer from "../Drawer";
import { Drawer, Menu } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

function NavDrawer({ open, setNavOpen, setActiveTab }) {
  const [active, setActive] = React.useState(0);
  const navigator = useNavigation();
  const navArray = [
    {
      label: "About Us",
      onPress: () => navigator.navigate("aboutUs"),
    },
    {
      label: "Privacy Policy",
    },
    {
      label: "Contact us",
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
      </Drawer.Section>
    </AppDrawer>
  );
}
const styles = StyleSheet.create({
  root: {},
});
export default NavDrawer;
