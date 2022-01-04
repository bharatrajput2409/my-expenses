import React from "react";
import { StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
import paperTheme from "../../config/paperTheme";

function AppChip({ children }) {
  return (
    <Chip
      textStyle={{
        color: paperTheme.colors.primary,
        textTransform: "capitalize",
      }}
      mode="outlined"
      style={styles.root}
    >
      {children}
    </Chip>
  );
}
const styles = StyleSheet.create({
  root: {
    borderColor: paperTheme.colors.primary,
    paddingHorizontal: 7,
    paddingVertical: 0,
    color: paperTheme.colors.primary,
    margin: 5,
    borderRadius: 20,
    borderWidth: 2,
  },
});
export default AppChip;
