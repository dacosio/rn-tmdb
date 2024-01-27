import { View, Image } from "react-native";
import React from "react";
import styles from "./slides.style";
import ReusableText from "../Reusable/ReusableText";
import ReusableBtn from "../Buttons/ReusableBtn";
import HeightSpacer from "../Reusable/HeightSpacer";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Slides = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />
        <HeightSpacer height={40} />
        <ReusableBtn
          onPress={() => navigation.navigate("Bottom")}
          btnText={"Get Started"}
          width={(SIZES.width - 50) / 2.2}
          bgColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;
