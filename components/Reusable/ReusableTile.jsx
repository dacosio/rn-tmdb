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
import ReusableBtn from "../Buttons/ReusableBtn";

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={reusable.rowWithSpace("flex-start")}>
        <NetworkImage
          source={
            "https://image.tmdb.org/t/p/original" +
            `${item.poster_path ? item.poster_path : item.profile_path}`
          }
          width={80}
          height={80}
          borderRadius={12}
        />
        <WidthSpacer width={15} />
        <View>
          <ReusableText
            text={item.title ? item.title : item.original_name}
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
              text={item.release_date ? item.release_date : "No release date"}
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
          <View style={{ marginTop: 10 }}>
            <ReusableBtn
              onPress={onPress}
              btnText={"More Details"}
              width={200}
              bgColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
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
