import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function NotesList() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>NotesList</Text>
      <Button
        title="Add Note"
        onPress={() => {
          navigation.navigate("AddNote");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
