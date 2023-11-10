import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function NoteRow({ note, onPress, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onPress(note)}>
      <View style={styles.wrapper}>
        <Text>{note.title}</Text>
        <Button
          title="Delete"
          onPress={() => {
            onDelete(note);
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
