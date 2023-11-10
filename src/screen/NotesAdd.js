import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NotesForm from "../components/notes/NotesForm";
import { add } from "../slices/NotesSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function NotesAdd() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const hanldeAddNote = (note) => {
    let error = null;
    if (!note.title) {
      error = "Title is required";
    }
    if (!note.category) {
      error = "Category is required";
    }
    if (!note.client) {
      error = "Client is required";
    }
    if (error) {
      alert(error);
      return;
    }
    dispatch(add(note));
    navigation.goBack();
  };
  return (
    <View>
      <NotesForm onSubmit={hanldeAddNote} />
    </View>
  );
}
