import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppDrawer from "../Drawer";
import { Drawer, Menu } from "react-native-paper";

function NavDrawer({ open, theme }) {
  const [active, setActive] = React.useState(0);
  const navArray = [
    {
      label: "Home",
      icon: "home",
    },
    {
      label: "Profile",
      icon: "account",
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
            onPress={() => setActive(index)}
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
