import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Divider, Menu, Provider } from "react-native-paper";
import AppIconButton from "./IconButton";

function AppMenu({ icon, items, color }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <Menu
      visible={open}
      onDismiss={closeMenu}
      anchor={
        <AppIconButton
          icon={icon}
          color={color || "white"}
          onPress={() => setOpen(!open)}
        />
      }
    >
      {items &&
        items.map((item) => (
          <Menu.Item
            icon={item.icon}
            title={item.title}
            onPress={item.onPress}
            key={item.title}
          />
        ))}
    </Menu>
  );
}
const styles = StyleSheet.create({});
export default AppMenu;
