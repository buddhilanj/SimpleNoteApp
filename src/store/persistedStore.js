import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../slices/NotesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import logger from "redux-logger";
import thunk from "redux-thunk"; // there was a problem with toolkit and thunk, so I added this package to fix it

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, notesReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);
