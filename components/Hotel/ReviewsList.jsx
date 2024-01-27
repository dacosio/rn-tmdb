import { View, Text, FlatList } from "react-native";
import React from "react";
import ReviewTile from "../Tiles/Reviews/ReviewTile";

const ReviewsList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      scrollEnabled={false}
      showVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <ReviewTile review={item} />
        </View>
      )}
    />
  );
};

export default ReviewsList;
