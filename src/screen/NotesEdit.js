import { StyleSheet, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { update } from "../slices/NotesSlice";
import NotesForm from "../components/notes/NotesForm";

export default function NotesEdit() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const originalNote = route.params.note;
  const hanldeUpdateNote = (note) => {
    let error = null;
    if (!note.title) {
      error = "Title is required";
    }
    if (error) {
      alert(error);
      return;
    }
    dispatch(update({ ...originalNote, ...note }));
    navigation.goBack();
  };
  return (
    <View>
      <NotesForm onSubmit={hanldeUpdateNote} note={originalNote} />
    </View>
  );
}

const styles = StyleSheet.create({});
