import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotesList from "../screen/NotesList";
import NotesAdd from "../screen/NotesAdd";
import NotesEdit from "../screen/NotesEdit";
import GeneralSelctor from "../screen/GeneralSelctor";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NoteList"
          component={NotesList}
          options={{ title: "Notes" }}
        />
        <Stack.Screen
          name="AddNote"
          component={NotesAdd}
          options={{ title: "Add Note" }}
        />
        <Stack.Screen
          name="UpdateNote"
          component={NotesEdit}
          options={{ title: "Update Note" }}
        />
        <Stack.Screen
          name="GeneralSelector"
          component={GeneralSelctor}
          options={{ title: "Select" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
