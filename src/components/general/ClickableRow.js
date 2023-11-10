import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function ClickableRow({ lable, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View>
      <Text>{lable}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
