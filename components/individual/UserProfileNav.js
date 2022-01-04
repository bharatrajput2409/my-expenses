import * as React from "react";
import { Alert, StatusBar, StyleSheet, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

import defaultStyle from "../../config/defaultStyle";
import AppIconButton from "../common/IconButton";
import paperTheme from "../../config/paperTheme";
import Paper from "../common/Paper";
import { useNavigation } from "@react-navigation/core";
import AppDialog from "../common/Dialog";
import AppText from "../common/AppText";
import AppTextInput from "../common/AppTextInput";
import Form from "../common/Form";
import DialogActions from "../common/DialogActions";
import { useDispatch, useSelector } from "react-redux";
import Touchable from "../common/Touchable";
import { createTranscation } from "../../model/Transaction";
import { setActiveDialog, UnSetActiveDialog } from "../../store/ui";
import { fetchTransaction } from "../../store/transaction";
import { fetchUsers } from "../../store/users";
import { deleteUser } from "../../model/Users";

const UserProfileNavBar = ({ user }) => {
  const dispatch = useDispatch();
  const activeDialog = useSelector((state) => state.ui.activeDialog);
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  const handleUserDelete = (id) => () => {
    Alert.alert(
      `Delete ?`,
      "Once deleted can not be restored",
      [
        {
          text: "no",
          onPress: () => {},
          style: styles.btn,
        },
        {
          text: "Yes",
          onPress: async () => {
            await deleteUser(id);
            navigation.navigate("shopping");
            dispatch(fetchUsers());
          },
        },
      ],
      { cancelable: true }
    );
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
            icon="plus"
            onPress={() => dispatch(setActiveDialog("addAmount"))}
            size={30}
          />
          <AppIconButton
            icon="delete"
            onPress={handleUserDelete(user?.id)}
            size={30}
          />
        </View>
      </View>
      <AppDialog
        title="Add amount"
        open={activeDialog === "addAmount"}
        content={<AddAmountForm user={user} dispatch={dispatch} />}
      />
    </>
  );
};

function AddAmountForm({ dispatch, user }) {
  const handleSubmit = async (values, b) => {
    if (!values.amount) return;
    let res = await createTranscation(values.userId, {
      amount: values.txnWay * values.amount,
      comment: values.comment,
      date: Date.now(),
    });
    if (res) {
      dispatch(fetchTransaction(user?.id));
      dispatch(UnSetActiveDialog());
      dispatch(fetchUsers());
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.amount) errors.amount = "Amount required";
    if (!values.comment) errors.comment = "Comment required";
    return errors;
  };
  return (
    <View style={styles.addamountroot}>
      <Form
        onSubmit={handleSubmit}
        initialValues={{ amount: "", txnWay: 1, comment: "", userId: user?.id }}
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
          setFieldValue,
        }) => (
          <>
            <AppTextInput
              label="Amount"
              name="amount"
              onBlur={handleBlur("amount")}
              value={values.amount}
              onChangeText={handleChange("amount")}
              error={errors.amount && touched.amount && errors.amount}
              keyboardType="numeric"
              maxLength={7}
              placeholder="i.e 120"
            />
            <AppTextInput
              label="Comment"
              name="comment"
              onBlur={handleBlur("comment")}
              value={values.comment}
              onChangeText={handleChange("comment")}
              error={errors.comment && touched.comment && errors.comment}
              placeholder="i.e For party"
            />
            <View style={styles.txnWayWrapper}>
              <Touchable
                style={[
                  styles.checkBoxContainer,
                  values.txnWay === 1 && styles.checkBoxContainerSelected,
                ]}
                onPress={() => {
                  setFieldValue("txnWay", 1);
                }}
              >
                <AppText
                  style={
                    values.txnWay === 1 && { color: paperTheme.colors.primary }
                  }
                >
                  Given to {user?.name}
                </AppText>
              </Touchable>
            </View>
            <View style={styles.txnWayWrapper}>
              <Touchable
                style={[
                  styles.checkBoxContainer,
                  values.txnWay === -1 && styles.checkBoxContainerSelected,
                ]}
                onPress={() => {
                  setFieldValue("txnWay", -1);
                }}
              >
                <AppText
                  style={
                    values.txnWay === -1 && { color: paperTheme.colors.primary }
                  }
                >
                  Taken from {user?.name}
                </AppText>
              </Touchable>
            </View>
            <DialogActions
              nextBtnTitle="Save"
              onNext={handleSubmit}
              dispatch={dispatch}
              disabled={errors.name}
            />
          </>
        )}
      </Form>
    </View>
  );
}
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
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
    marginLeft: 15,
    marginRight: 10,
    elevation: 0,
    display: "flex",
    flexDirection: "row",
  },
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: paperTheme.colors.borderColor,
  },
  checkBoxContainerSelected: {
    // backgroundColor: paperTheme.colors.primary,
    borderColor: paperTheme.colors.primary,
  },
  txnWayWrapper: {
    marginTop: 5,
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "white",
  },
});
export default UserProfileNavBar;
