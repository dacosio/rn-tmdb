import { StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import reusable from "./reusable.style";
import { COLORS, TEXT, SIZES } from "../../constants/theme";
import NetworkImage from "../../components/Reusable/NetworkImage";
import WidthSpacer from "../Reusable/WidthSpacer";
import ReusableText from "./ReusableText";
import HeightSpacer from "./HeightSpacer";
import Rating from "./Rating";

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusable.rowWithSpace("flex-start")}>
        <NetworkImage
          source={"https://image.tmdb.org/t/p/original" + item.poster_path}
          width={80}
          height={80}
          borderRadius={12}
        />
        <WidthSpacer width={15} />
        <View>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
            style={{
              width: SIZES.width - 160,
            }}
          />
          <HeightSpacer height={8} />

          <View style={reusable.rowWithSpace("flex-start")}>
            <WidthSpacer width={5} />
            <ReusableText
              text={"Release Date: "}
              family={"medium"}
              size={14}
              color={COLORS.dark}
            />
            <ReusableText
              text={item.release_date}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>

          <HeightSpacer height={8} />

          <View style={reusable.rowWithSpace("flex-start")}>
            <WidthSpacer width={5} />
            <ReusableText
              text={"Popularity: "}
              family={"medium"}
              size={14}
              color={COLORS.dark}
            />
            <ReusableText
              text={item.popularity}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
