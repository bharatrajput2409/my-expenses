import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppText from "../common/AppText";
import AppIconButton from "../common/IconButton";
import paperTheme from "../../config/paperTheme";
import AppMenu from "../common/Menu";
import { deleteItem } from "../../model/shopping";
import { useDispatch } from "react-redux";
import { fetchShopping } from "../../store/shopping";

function ItemCard({ data, handleDelete, handleBought }) {
  console.log(data.bought, "data");
  const style = {
    root: {
      backgroundColor: "white",
    },
    itemname: {},
    qty: {},
  };
  if (data.bought) {
    style.root.backgroundColor = paperTheme.colors.lightGreen;
    // style.itemname.color = paperTheme.colors.greenText;
    // style.qty.color = paperTheme.colors.greenText;
  }
  let menuItems = [
    {
      title: "Bought",
      icon: ({ color, size }) => (
        <MaterialIcons name="done" size={size} color={color} />
      ),
      onPress: handleBought(data.id),
    },
    {
      title: "Delete",
      icon: "delete",
      onPress: handleDelete(data.id),
    },
  ];
  if (data.bought) menuItems = [menuItems[1]];
  return (
    <View style={[styles.root, style.root]}>
      <View style={styles.left}>
        <AppText style={[styles.itemname, style.itemname]}>{data.name}</AppText>
        <AppText style={[styles.qty, style.qty]}>
          Quantity: {data.quantity} {data?.prize && `-> ₹ ${data?.prize}`}
        </AppText>
      </View>
      <View style={styles.right}>
        <AppMenu
          key="menu"
          color={paperTheme.colors.iconColor}
          icon="dots-horizontal"
          items={menuItems}
        />
        {/* <AppIconButton
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
        /> */}
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
    marginVertical: 3,
    paddingVertical: 5,
    elevation: 0,
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
