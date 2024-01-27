import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "./reusable.style";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "./ReusableText";
import { SIZES, TEXT, COLORS } from "../../constants/theme";

const AppBar = ({
  bgColor,
  title,
  bgColorOne,
  icon,
  onPress,
  onPressOne,
  top,
  left,
  right,
}) => {
  return (
    <View style={styles.overlay(top, left, right)}>
      <View style={reusable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box(bgColor)} onPress={onPress}>
          <AntDesign name="left" size={26} />
        </TouchableOpacity>
        <ReusableText
          text={title}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity
          style={styles.boxOne(bgColorOne)}
          onPress={onPressOne}>
          <AntDesign name={icon} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: (top = 10, left = 0, right = 0) => ({
    position: "absolute",
    top,
    left,
    right,
    justifyContent: "center",
  }),
  box: (bgColor) => ({
    backgroundColor: bgColor,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  boxOne: (bgColorOne) => ({
    backgroundColor: bgColorOne,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
