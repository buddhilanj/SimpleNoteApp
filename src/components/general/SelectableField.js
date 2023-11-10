import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function SelectableField({
  label,
  value,
  title,
  data,
  onSelected,
}) {
  const navigation = useNavigation();

  const handleSelectPress = () => {
    navigation.navigate("GeneralSelector", {
      data: data,
      title,
      onSelect: (item) => {
        onSelected(item);
        navigation.goBack();
      },
    });
  };

  return (
    <TouchableOpacity onPress={handleSelectPress}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value ?? "Touch to Select"}</Text>
      </View>
    </TouchableOpacity>
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
  value: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    marginLeft: 10,
  },
});
