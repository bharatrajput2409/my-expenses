import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppText from "../common/AppText";
import AppIconButton from "../common/IconButton";
import paperTheme from "../../config/paperTheme";

function ItemCard({ bought }) {
  const style = {
    root: {},
    itemname: {},
    qty: {},
  };
  if (bought) {
    style.root.backgroundColor = paperTheme.colors.lightGreen;
    // style.itemname.color = paperTheme.colors.greenText;
    // style.qty.color = paperTheme.colors.greenText;
  }
  return (
    <View style={[, styles.root, style.root]}>
      <View style={styles.left}>
        <AppText style={[styles.itemname, style.itemname]}>Candle</AppText>
        <AppText style={[styles.qty, style.qty]}>Quantity: 5</AppText>
      </View>
      <View style={styles.right}>
        <AppIconButton
          icon={() => (
            <MaterialIcons
              name="done"
              size={25}
              color={paperTheme.colors.primary}
            />
          )}
          color={paperTheme.colors.primary}
          onPress={() => console.log("btn pressed")}
          style={{ margin: 0, marginRight: 5 }}
          size={28}
        />
        <AppIconButton
          icon="delete"
          color={paperTheme.colors.primary}
          onPress={() => console.log("btn pressed")}
          style={{ margin: 0 }}
          size={28}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderColor: paperTheme.colors.borderColor,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingVertical: 5,
  },
  left: {
    flexGrow: 1,
  },
  right: {
    display: "flex",
    flexDirection: "row",
  },
  itemname: {
    fontSize: 18,
  },
  qty: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 12,
  },
});
export default ItemCard;
