import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (state, action) => {
      const newId =
        state.notes.reduce(
          (maxId, note) => Math.max(parseInt(note.id.slice(4)), maxId),
          -1
        ) + 1;
      state.notes = [...state.notes, { ...action.payload, id: "note" + newId }];
    },
    update: (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { add, update, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
