import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";

import defaultStyle from "../../config/defaultStyle";
import AppIconButton from "../common/IconButton";
import paperTheme from "../../config/paperTheme";
import Paper from "../common/Paper";
import { useNavigation } from "@react-navigation/core";

const UserProfileNavBar = ({ user }) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <StatusBar
        backgroundColor={paperTheme.colors.lightPrimary}
        barStyle="dark-content"
      />
      <Appbar.Header
        style={{
          backgroundColor: paperTheme.colors.primary,
          height: defaultStyle.toolbar.nav.height,
          elevation: 0,
        }}
        statusBarHeight={0}
      >
        <AppIconButton icon="arrow-left" onPress={handleBack} />
      </Appbar.Header>
      <View style={styles.userContainer}>
        <Paper style={styles.left}>
          <FontAwesome
            name="user"
            size={42}
            color={paperTheme.colors.primary}
          />
        </Paper>
        <View style={styles.right}>
          <Text style={styles.username}>{user?.name}</Text>
        </View>
        <View style={[styles.useraction]}>
          <AppIconButton
            icon="delete"
            onPress={() => console.log("delete user...")}
            size={30}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  root: {},
  btn: {
    backgroundColor: "transparent",
    paddingVertical: 7,
  },
  userContainer: {
    backgroundColor: paperTheme.colors.primary,
    display: "flex",
    flexDirection: "row",
  },
  left: {
    height: 60,
    backgroundColor: "white",
    borderRadius: 500,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
    marginLeft: 15,
    marginRight: 10,
    elevation: 10,
  },
  right: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 7,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
  relation: {
    color: "white",
    textTransform: "capitalize",
  },
  useraction: {
    height: 60,
    borderRadius: 500,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
    marginLeft: 15,
    marginRight: 10,
    elevation: 0,
  },
});
export default UserProfileNavBar;
