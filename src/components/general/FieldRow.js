import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function FieldRow({ label, value, onChange }) {
  return (
    <View styles={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput value={value} onChangeText={onChange}  placeholder="Input Value Here"/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    width: 100,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    marginLeft: 10,
  },
});
