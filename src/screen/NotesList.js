import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import NoteRow from "../components/notes/NoteRow";
import { deleteNote } from "../slices/NotesSlice";

export default function NotesList() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const handleNotePress = (note) => {
    navigation.navigate("UpdateNote", { note });
  };
  const handleNoteDetete = (note) => {
    dispatch(deleteNote(note));
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.notelist}
        data={notes}
        renderItem={({ item }) => (
          <NoteRow
            note={item}
            onPress={handleNotePress}
            onDelete={handleNoteDetete}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>No Notes</Text>}
      />
      <Button
        title="Add Note"
        onPress={() => {
          navigation.navigate("AddNote");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  notelist: {
    flex: 1,
  },
});
