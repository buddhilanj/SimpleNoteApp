import { Button, StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import clients from "../../data/clients";
import categories from "../../data/categories";
import FieldRow from "../general/FieldRow";
import SelectableField from "../general/SelectableField";

export default function NotesForm({ note, onSubmit }) {
  const [newNote, setNewNote] = useState({
    title: note ? note.title : "",
    content: note ? note.content : "",
    client: note ? note.client : null,
    category: note ? note.category : null,
  });
  const client = useMemo(
    () => clients.find((c) => c.id === newNote.client),
    [clients, newNote.client]
  );

  const category = useMemo(
    () => categories.find((c) => c.id === newNote.category),
    [categories, newNote.category]
  );
  return (
    <View>
      <FieldRow
        label={"Title"}
        value={newNote.title}
        onChange={(text) => {
          setNewNote({ ...newNote, title: text });
        }}
      />
      <FieldRow
        label={"Content"}
        value={newNote.content}
        onChange={(text) => {
          setNewNote({ ...newNote, content: text });
        }}
      />
      <SelectableField
        label={"Client"}
        value={client ? client.name : null}
        data={clients}
        title="Select Client"
        onSelected={(client_t) => {
          setNewNote({ ...newNote, client: client_t.id });
        }}
      />
      <SelectableField
        label={"Catefory"}
        value={category ? category.name : null}
        data={categories}
        title="Select Category"
        onSelected={(category_t) => {
          setNewNote({ ...newNote, category: category_t.id });
        }}
      />
      <Button title={note ? "Save" : "Add"} onPress={() => onSubmit(newNote)} />
    </View>
  );
}

const styles = StyleSheet.create({});
