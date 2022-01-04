import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import { UnSetActiveDialog } from "../../store/ui";

function DialogActions({
  onNext,
  nextBtnTitle,
  dispatch,
  disabled,
  negativeBtnTitle,
  onCancle,
}) {
  const handleClose = () => {
    if (onCancle) onCancle();
    dispatch(UnSetActiveDialog());
  };
  return (
    <View style={styles.root}>
      <AppButton onPress={handleClose}>
        {negativeBtnTitle || "Cancle"}
      </AppButton>
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
    justifyContent: "flex-end",
    marginTop: 10,
  },
});
export default DialogActions;
