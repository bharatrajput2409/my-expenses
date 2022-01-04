import React from "react";
import {
  ImageBackground,
  Linking,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AppText from "./common/AppText";
import paperTheme from "../config/paperTheme";
import AppIconButton from "./common/IconButton";
import AppButton from "./common/AppButton";

function AboutDeveloper(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor={paperTheme.colors.lightPrimary}
        barStyle="light-content"
      />
      <View style={styles.center}>
        <ImageBackground
          source={require("../assets/icon.png")}
          style={styles.image}
        />
      </View>
      <AppText size={18} bold color="white" center padding={[10, 0, 0, 0]}>
        My Expenses
      </AppText>
      <AppText size={12} color="rgba(255,255,255,0.7)" center padding={3}>
        V 1.0
      </AppText>
      <View style={styles.socialContainer}>
        <AppIconButton
          icon={() => <FontAwesome5 name="linkedin" size={30} color="white" />}
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/bharatsinghrajput")
          }
          size={30}
        />
        <AppIconButton
          icon={() => <MaterialIcons name="email" size={30} color="white" />}
          onPress={() =>
            Linking.openURL(
              "mailto:bharatrajput2409@gmail.com?subject=My-Expenses App(contact us)"
            )
          }
          size={30}
        />
        <AppIconButton
          icon={() => <FontAwesome5 name="instagram" size={30} color="white" />}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/bharat._.singh._/")
          }
          size={30}
        />
      </View>
      <AppText color="white" padding={[15, 0, 5, 15]}>
        Hi,
      </AppText>
      <AppText color="white" padding={[0, 15, 0, 15]}>
        I'm Bharat Singh Skekhawat and i have developed this app to maintain
        shopping list and expenses in once place.I hope this app will meet your
        expectation.
      </AppText>
      <AppButton uppercase={false} color="white" style={styles.btn}>
        Rate
      </AppButton>
      <AppText color="white" padding={[0, 15, 0, 15]}>
        Send me a feeback for any improvements and bugs
      </AppText>
      <AppButton
        uppercase={false}
        color="white"
        style={[styles.btn, { width: 180 }]}
        onPress={() =>
          Linking.openURL(
            "mailto:bharatrajput2409@gmail.com?subject=Feedback for My-Expenses App"
          )
        }
      >
        Send Feedback
      </AppButton>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: paperTheme.colors.primary,
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 50,
  },
  center: {
    alignItems: "center",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  btn: {
    width: 100,
    borderRadius: 30,
    marginHorizontal: 15,
    borderColor: "white",
    borderWidth: 2,
    marginVertical: 20,
  },
});
export default AboutDeveloper;
