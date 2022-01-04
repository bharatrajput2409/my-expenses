import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import AppModel from "./Model";

function SelectDialog({
  visible,
  title,
  onRequestClose,
  options,
  multiple,
  ...others
}) {
  const [selected, setSelected] = useState(others.selected || []);
  const isSelected = (item) => {
    return selected.findIndex((el) => el.value === item.value) !== -1;
  };
  const handleSelect = (item) => () => {
    if (!multiple) {
      setSelected([item]);
      return onRequestClose(item);
    }
    const temp = selected;
    const index = temp.findIndex((el) => el.value === item.value);
    if (index !== -1) temp.splice(index, 1);
    else temp.push(item);
    setSelected([...temp]);
  };
  return (
    <AppModel
      style={styles.root}
      visible={visible}
      {...others}
      onRequestClose={() => onRequestClose(selected)}
    >
      <List.Section>
        <List.Subheader>{title}</List.Subheader>
        {options.map((item) => {
          let show = isSelected(item);
          return (
            <List.Item
              title={item.label}
              onPress={handleSelect(item)}
              key={item.value}
              titleStyle={show && styles.selectedText}
              style={show && styles.selectedContainer}
            />
          );
        })}
      </List.Section>
    </AppModel>
  );
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "red",
  },
  selectedText: {
    fontWeight: "bold",
  },
  selectedContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
export default SelectDialog;
