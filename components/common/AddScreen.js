import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import paperTheme from "../../config/paperTheme";
import { List } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setActiveDialog, UnSetActiveDialog } from "../../store/ui";
import Touchable from "./Touchable";

function AddScreen(props) {
  const dispatch = useDispatch();
  const handleAddDialog = () => {
    dispatch(UnSetActiveDialog());
  };
  const items = [
    {
      title: "New user",
      onPress: () => {
        dispatch(setActiveDialog("newUser"));
      },
      icon: (props) => (
        <FontAwesome
          name="user-plus"
          style={[props.style, styles.icon]}
          color={props.color}
          size={20}
        />
      ),
    },

    // {
    //   title: "New group",
    //   onPress: () => console.log("..."),
    //   icon: (props) => (
    //     <FontAwesome
    //       name="plus"
    //       style={[props.style, styles.icon]}
    //       color={props.color}
    //       size={20}
    //     />
    //   ),
    // },
    {
      title: "New shopping list",
      onPress: () => {
        dispatch(setActiveDialog("newShopping"));
      },
      icon: (props) => (
        <FontAwesome
          name="cart-plus"
          style={[props.style, styles.icon]}
          color={props.color}
          size={20}
        />
      ),
    },
  ];

  return (
    <Touchable
      rippleColor="transparent"
      style={styles.root}
      onPress={handleAddDialog}
    >
      <>
        {items.map((item) => (
          <List.Item
            key={item.title}
            title={item.title}
            left={item.icon}
            titleStyle={styles.title}
            style={styles.addCard}
            theme={paperTheme}
            onPress={item.onPress}
          />
        ))}
      </>
    </Touchable>
  );
}
const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: paperTheme.colors.backdrop,
    elevation: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1000,
  },
  addCard: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  title: {
    color: "black",
    marginLeft: 10,
  },
  icon: {
    paddingTop: 5,
  },
});
export default AddScreen;
