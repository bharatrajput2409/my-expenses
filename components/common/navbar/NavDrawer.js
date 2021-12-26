import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppDrawer from "../Drawer";
import { Drawer, Menu } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

function NavDrawer({ open, setNavOpen, setActiveTab }) {
  const [active, setActive] = React.useState(0);
  const navArray = [
    {
      label: "Shopping",
      icon: "cart",
      onPress: () => setActiveTab("shopping"),
    },
    {
      label: "Expenses",
      icon: (props) => {
        return (
          <FontAwesome
            name="rupee"
            size={props.size}
            color={props.color}
            style={{ marginLeft: 5, marginRight: 7 }}
          />
        );
      },
      onPress: () => setActiveTab("expense"),
    },
    {
      label: "Log out",
      icon: "logout",
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
            active={active === index}
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
