import { Formik } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

function Form({ initialValues, validate, onSubmit, children }) {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {children}
    </Formik>
  );
}
const styles = StyleSheet.create({
  root: {},
});
export default Form;
