import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import AppText from "../common/AppText";
import paperTheme from "../../config/paperTheme";
import Touchable from "../common/Touchable";

function ShoppingListCard(props) {
  return (
    <Touchable
      onPress={() => console.log("openening shopping list...")}
      style={{ marginVertical: 10 }}
    >
      <View style={styles.root}>
        <View style={styles.left}>
          <FontAwesome
            name="shopping-cart"
            size={32}
            color={paperTheme.colors.primary}
          />
        </View>
        <View style={styles.right}>
          <View style={styles.top}>
            <AppText bold size={16}>
              Mangalore Shopping
            </AppText>
          </View>
          <View style={styles.bottom}>
            <AppText style={styles.sampleItems}>Book,pen,table cover</AppText>
          </View>
        </View>
        <View style={styles.itemscount}>
          <AppText bold>12 Items</AppText>
        </View>
      </View>
    </Touchable>
  );
}
const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderColor: paperTheme.colors.borderColor,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  left: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 30,
    height: 50,
    width: 50,
    marginRight: 10,
  },
  right: {
    flexGrow: 1,
  },
  itemscount: {
    justifyContent: "center",
    alignItems: "center",
  },
  sampleItems: {
    color: "rgba(0,0,0,0.6)",
    paddingTop: 3,
  },
});
export default ShoppingListCard;
