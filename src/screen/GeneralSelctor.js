import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import ClickableRow from "../components/general/ClickableRow";
export default function GeneralSelctor() {
  const route = useRoute();
  const data = route.params.data;
  const onSelect = route.params.onSelect;
  const navigation = useNavigation(route.params.title);
  navigation.setOptions({ title: route.params.title });
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ClickableRow lable={item.name} onPress={() => onSelect(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
