import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    update: (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
    },
    delete: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { add, update } = notesSlice.actions;

export default notesSlice.reducer;
