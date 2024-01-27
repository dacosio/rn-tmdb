import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TEXT, COLORS } from "../../../constants/theme";
import ReusableText from "../../Reusable/ReusableText";
import HeightSpacer from "../../Reusable/HeightSpacer";
import NetworkImage from "../../Reusable/NetworkImage";
import { useNavigation } from "@react-navigation/native";

const Country = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate("CountryDetails", { item })}>
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          borderRadius={12}
        />
        <HeightSpacer height={5} />
        <ReusableText
          text={item.country}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;
