import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../slices/NotesSlice";

export const store = configureStore({
  reducer: notesReducer,
});