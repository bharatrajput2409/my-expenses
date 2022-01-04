import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import Screen from "../common/Screen";
import AppText from "../common/AppText";
import ItemCard from "../shopping/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/core";
import AppIconButton from "../common/IconButton";
import { setActiveDialog, UnSetActiveDialog } from "../../store/ui";
import AppDialog from "../common/Dialog";
import Form from "../common/Form";
import AppTextInput from "../common/AppTextInput";
import DialogActions from "../common/DialogActions";
import { createShopping, insertItem, resetItems } from "../../model/shopping";
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
  const list = shopping.list.filter((item) => item.id === id)[0];
  const handleDialogClose = () => {
    dispatch(setActiveDialog(""));
  };
  const handleReset = () => {
    resetItems(id);
    Alert.alert(
      `Reset`,
      "All the items will be deleted and can not be restored",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: styles.btn,
        },
        {
          text: "reset",
          onPress: () => Alert.alert("Cancel Pressed"),
        },
      ],
      { cancelable: true }
    );
    dispatch(fetchShopping());
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
      onPress: () => console.log("add items"),
    },
  ];
  return (
    <Screen
      style={styles.root}
      backNav
      backAction={() => navigator.goBack()}
      navTitle={list.name}
      actions={[
        // <AppIconButton
        //   icon="plus"
        //   onPress={}
        //   color="white"
        //   size={32}
        //   key={"plus"}
        // />,
        <Menu key="menu" icon="dots-vertical" items={menuItems} />,
      ]}
    >
      <View style={{ paddingTop: 10 }}></View>
      {list?.items.map((item) => {
        console.log(item);
        return <ItemCard data={item} key={item.name} />;
      })}
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
        title={`Add to ${list.name}`}
        content={
          <AddNewShoppingForm
            restItems={list.items}
            id={id}
            dispatch={dispatch}
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
