import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReusableTile from "../Reusable/ReusableTile";
import { useNavigation } from "@react-navigation/native";

const PopularList = ({ data }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <ReusableTile
        item={item}
        onPress={() => navigation.navigate("PlaceDetails", item._id)}
      />
    </View>
  );

  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default PopularList;

const styles = StyleSheet.create({});
