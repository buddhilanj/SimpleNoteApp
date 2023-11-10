import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./src/store/store";
// import { store, persistor } from "./src/store/persistedStore";
import AppNavigation from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}> */}
      <AppNavigation />
      {/* </PersistGate> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
