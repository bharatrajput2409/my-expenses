import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import AppTextInput from "../common/AppTextInput";
import AppChip from "../common/AppChip";

function CreateNewGroup(props) {
  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({ name: "", member: "" });
  const handleAddUser = () => {
    if (!form.member) return;
    setMembers([...members, form.member.trim()]);
    setForm({ ...form, member: "" });
  };
  const handleForm = (name) => (value) => {
    setForm({ ...form, [name]: value });
  };
  return (
    <View style={styles.root}>
      <AppTextInput
        label="Group Name"
        value={form.name}
        placeholder="Group Name"
        onChangeText={handleForm("name")}
      />
      <AppTextInput
        label="Group Members"
        value={form.member}
        onChangeText={handleForm("member")}
        right={
          <TextInput.Icon
            name="plus"
            onPress={handleAddUser}
            style={styles.addUserBtn}
          />
        }
        placeholder="Member Name"
      />
      <View style={styles.memberContainer}>
        {members.map((member) => (
          <AppChip key={member}>{member}</AppChip>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {},
  heading: {
    marginTop: 10,
    fontSize: 14,
  },
  memberContainer: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 5,
    flexWrap: "wrap",
  },
  addUserBtn: {
    width: 50,
    height: 55,
    borderRadius: 0,
    marginRight: 5,
    backgroundColor: "rgba(0,0,0,0.1)",
    position: "absolute",
    right: -15,
  },
});
export default CreateNewGroup;
