import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotesList from "../screen/NotesList";
import NotesAdd from "../screen/NotesAdd";
import NotesEdit from "../screen/NotesEdit";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NoteList" component={NotesList} />
        <Stack.Screen name="AddNote" component={NotesAdd} />
        <Stack.Screen name="UpdateNote" component={NotesEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
