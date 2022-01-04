import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import paperTheme from "../../../config/paperTheme";
import Touchable from "../Touchable";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveDialog,
  setActiveTab,
  UnSetActiveDialog,
} from "../../../store/ui";
import AppDialog from "../Dialog";
import DialogActions from "../DialogActions";
import { createUser } from "../../../model/Users";
import AppTextInput from "../AppTextInput";
import Form from "../Form";
import { fetchUsers } from "../../../store/users";
import { createShopping } from "../../../model/shopping";
import { fetchShopping } from "../../../store/shopping";

function BottomNav() {
  const [userName, setUserName] = React.useState("");
  const dispatch = useDispatch();
  const activeDialog = useSelector((state) => state.ui.activeDialog);
  const handleAddDialog = () => {
    dispatch(setActiveDialog("addNewStuffDialog"));
  };
  const handleDialogClose = () => {
    dispatch(setActiveDialog(""));
  };
  const handleTabChange = (tab) => () => {
    dispatch(setActiveTab(tab));
  };

  return (
    <View style={styles.root}>
      <Touchable
        onPress={handleTabChange("expenses")}
        style={styles.homeNavBtn}
      >
        <View style={styles.btnContainer}>
          <FontAwesome
            name="money"
            size={24}
            color={paperTheme.colors.iconColor}
          />
          <Text style={styles.btnText}>Expenses</Text>
        </View>
      </Touchable>
      <View style={[styles.homeNavBtn, { paddingVertical: 0 }]}>
        <View style={styles.plusContainer}>
          <Touchable onPress={handleAddDialog} style={styles.touchablePlus}>
            <View style={styles.plusWrapper}>
              <FontAwesome
                name="plus"
                size={24}
                color={paperTheme.colors.primary}
              />
            </View>
          </Touchable>
        </View>
      </View>
      <Touchable
        onPress={handleTabChange("shopping")}
        style={styles.homeNavBtn}
      >
        <View style={styles.btnContainer}>
          <FontAwesome
            name="shopping-cart"
            size={24}
            color={paperTheme.colors.iconColor}
          />
          <Text style={styles.btnText}>Shopping</Text>
        </View>
      </Touchable>

      <AppDialog
        open={activeDialog === "newUser"}
        setOpen={handleDialogClose}
        title={"New user"}
        content={<AddNewUserForm dispatch={dispatch} />}
      />
      <AppDialog
        open={activeDialog === "newShopping"}
        setOpen={handleDialogClose}
        title={"New shopping list"}
        content={<AddNewShoppingForm dispatch={dispatch} />}
      />
    </View>
  );
}

function AddNewUserForm({ dispatch }) {
  const handleSubmit = async (values) => {
    if (!values.name) return;
    let res = await createUser({ name: values.name, amount: 0 });
    if (res) {
      dispatch(fetchUsers());
      dispatch(UnSetActiveDialog());
      dispatch(setActiveTab("expenses"));
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name required";
    return errors;
  };
  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ name: "" }}
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
            label="Name"
            name="name"
            onBlur={handleBlur}
            value={values.name}
            onChangeText={handleChange("name")}
            error={errors.name && touched.name && errors.name}
            placeholder="i.e. Bharat singh"
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
function AddNewShoppingForm({ dispatch }) {
  const handleSubmit = async (values) => {
    if (!values.name) return;
    let res = await createShopping(values.name, []);
    if (res) {
      dispatch(fetchShopping());
      dispatch(UnSetActiveDialog());
      dispatch(setActiveTab("shopping"));
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name required";
    return errors;
  };
  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ name: "" }}
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
            label="Name"
            name="name"
            onBlur={handleBlur}
            value={values.name}
            onChangeText={handleChange("name")}
            error={errors.name && touched.name && errors.name}
            placeholder="i.e Wedding shopping list"
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    height: 64,
    display: "flex",
    flexDirection: "row",
    elevation: 5,
  },
  homeNavBtn: {
    borderRadius: 25,
    // paddingHorizontal: 15,
    // paddingVertical: 15,
    flex: 1,
    position: "relative",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btnText: {
    color: paperTheme.colors.iconColor,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  dflexrow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  plusContainer: {
    backgroundColor: paperTheme.colors.primary,
    position: "relative",
    left: "50%",
    bottom: 25,
    width: 64,
    height: 64,
    borderRadius: 40,
    transform: [{ translateX: -32 }],
    overflow: "hidden",
    elevation: 2,
  },
  plusWrapper: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    position: "relative",
    top: 7,
    left: 7,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  touchablePlus: {
    height: 64,
  },
});
export default BottomNav;
