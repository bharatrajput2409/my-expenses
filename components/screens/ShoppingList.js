import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Screen from "../common/Screen";
import AppText from "../common/AppText";
import ItemCard from "../shopping/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import prompt from "react-native-prompt-android";
import { setActiveDialog, UnSetActiveDialog } from "../../store/ui";
import AppDialog from "../common/Dialog";
import Form from "../common/Form";
import AppTextInput from "../common/AppTextInput";
import DialogActions from "../common/DialogActions";
import {
  createShopping,
  deleteItem,
  deleteShopping,
  insertItem,
  itemBought,
  resetItems,
} from "../../model/shopping";
import { fetchShopping } from "../../store/shopping";
import AppButton from "../common/AppButton";
import paperTheme from "../../config/paperTheme";
import Menu from "../common/Menu";

function ShoppingList(props) {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const shopping = useSelector((state) => state.shopping);
  const activeDialog = useSelector((state) => state.ui.activeDialog);
  const id = useRoute().params?.id;
  const list = shopping.list?.filter((item) => item.id === id)[0];
  const [activeItem, setActiveItem] = useState("");
  const handleDialogClose = () => {
    dispatch(setActiveDialog(""));
  };
  const handleReset = () => {
    Alert.alert(
      `Reset`,
      "All the items will be deleted and can not be restored",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: styles.btn,
        },
        {
          text: "reset",
          onPress: () => {
            resetItems(id);
            dispatch(fetchShopping());
          },
        },
      ],
      { cancelable: true }
    );
  };
  const menuItems = [
    {
      title: "Add item",
      icon: "plus",
      onPress: () => dispatch(setActiveDialog("addShoppingItem")),
    },
    {
      title: "Delete",
      icon: "delete",
      onPress: async () => {
        Alert.alert(
          `Delete?`,
          `${list?.name} will be deleted and can not be restored`,
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: styles.btn,
            },
            {
              text: "Delete",
              onPress: async () => {
                await deleteShopping(id);
                navigator.navigate("shopping");
                dispatch(fetchShopping());
              },
            },
          ],
          { cancelable: true }
        );
      },
    },
  ];
  const handleItemDelete = (itemId) => async () => {
    await deleteItem(list?.items, list?.id, itemId);
    dispatch(fetchShopping());
  };
  const handleItemBought = (itemId) => async () => {
    setActiveItem(itemId);
    dispatch(setActiveDialog("itemPrizeDialog"));
  };
  return (
    <Screen
      style={styles.root}
      backNav
      backAction={() => navigator.goBack()}
      navTitle={list?.name}
      actions={[<Menu key="menu" icon="dots-vertical" items={menuItems} />]}
    >
      <View style={{ paddingTop: 10 }}></View>
      {list?.items.map((item) => (
        <ItemCard
          data={item}
          key={item?.id}
          handleDelete={handleItemDelete}
          handleBought={handleItemBought}
        />
      ))}
      {!list?.items?.length && (
        <AppText center bold color="rgba(0,0,0,0.6)">
          {list?.name} is empty
        </AppText>
      )}
      <View style={styles.center}>
        <AppButton
          onPress={handleReset}
          size={32}
          style={styles.btn}
          key={"plus"}
        >
          Reset
        </AppButton>
      </View>
      <AppDialog
        open={activeDialog === "addShoppingItem"}
        setOpen={handleDialogClose}
        title={`Add to ${list?.name}`}
        content={
          <AddNewShoppingForm
            restItems={list?.items}
            id={id}
            dispatch={dispatch}
          />
        }
      />
      <AppDialog
        open={activeDialog === "itemPrizeDialog"}
        setOpen={handleDialogClose}
        title={`Add Item Prize`}
        content={
          <AddItemPrizeForm
            items={list?.items}
            id={id}
            dispatch={dispatch}
            itemId={activeItem}
          />
        }
      />
    </Screen>
  );
}

function AddNewShoppingForm({ dispatch, id, restItems }) {
  const handleSubmit = async (values) => {
    if (!values.name || !values.quantity) return;
    let res = await insertItem(restItems, { ...values, items: [], id: id });
    if (res) {
      dispatch(fetchShopping());
      dispatch(UnSetActiveDialog());
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Item name required";
    return errors;
  };
  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ name: "", quantity: "1", comment: "comment" }}
      validate={validate}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <AppTextInput
            label="Item name"
            name="name"
            onBlur={handleBlur("name")}
            value={values.name}
            onChangeText={handleChange("name")}
            error={errors.name && touched.name && errors.name}
          />
          <AppTextInput
            label="Quantity"
            name="quantity"
            onBlur={handleBlur("name")}
            value={values.quantity}
            onChangeText={handleChange("quantity")}
            error={errors.quantity && touched.quantity && errors.quantity}
            keyboardType="numeric"
            maxLength={4}
          />
          <DialogActions
            nextBtnTitle="Save"
            onNext={handleSubmit}
            dispatch={dispatch}
            disabled={errors.name}
          />
        </>
      )}
    </Form>
  );
}

function AddItemPrizeForm({ dispatch, id, items, itemId }) {
  const handleSubmit = async (values) => {
    let res = await itemBought(items, id, itemId, values.prize);
    if (res) {
      dispatch(fetchShopping());
      dispatch(UnSetActiveDialog());
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.prize) errors.name = "Prize required";
    return errors;
  };
  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ prize: "" }}
      // validate={validate}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <AppTextInput
            label="Prize (optional)"
            name="prize"
            onBlur={handleBlur("prize")}
            value={values.prize}
            onChangeText={handleChange("prize")}
            error={errors.prize && touched.prize && errors.prize}
          />
          <DialogActions
            nextBtnTitle="Save"
            negativeBtnTitle="Skip"
            onCancle={handleSubmit}
            onNext={handleSubmit}
            dispatch={dispatch}
            disabled={errors.name}
          />
        </>
      )}
    </Form>
  );
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "red",
  },
  heading: {
    padding: 10,
    color: "rgba(0,0,0,0.7)",
  },
  btn: {
    width: 100,
    borderColor: paperTheme.colors.primary,
    borderWidth: 2,
    borderRadius: 30,
  },
  center: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 50,
  },
});
export default ShoppingList;
