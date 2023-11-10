import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../slices/NotesSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: notesReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
