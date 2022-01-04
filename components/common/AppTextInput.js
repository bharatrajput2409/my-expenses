import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import paperTheme from "../../config/paperTheme";

const AppTextInput = ({
  name,
  label,
  error,
  value,
  placeholder,
  onChangeText,
  ...others
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        name={name}
        theme={paperTheme}
        error={Boolean(error)}
        style={styles.input}
        placeholder={placeholder}
        selectionColor={paperTheme.colors.lightPrimary}
        activeOutlineColor={paperTheme.colors.lightPrimary}
        {...others}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    color: paperTheme.colors.notification,
    paddingLeft: 10,
    fontSize: 12,
  },
  label: {
    fontSize: 14,
    paddingVertical: 8,
  },
  input: {
    position: "relative",
    overflow: "hidden",
  },
});

export default AppTextInput;
