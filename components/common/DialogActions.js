import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import { useDispatch } from "react-redux";
import { UnSetActiveDialog } from "../../store/ui";

function DialogActions({ onNext, nextBtnTitle, dispatch, disabled }) {
  const handleClose = () => {
    dispatch(UnSetActiveDialog());
  };
  return (
    <View style={styles.root}>
      <AppButton onPress={handleClose}>Cancle</AppButton>
      <AppButton onPress={onNext} disabled={disabled}>
        {nextBtnTitle}
      </AppButton>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
  },
});
export default DialogActions;
