import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReusableText = ({
  text,
  family,
  size,
  color,
  align,
  bgColor,
  style,
  props,
}) => {
  const dynamicStyles = styles.textStyle(family, size, color, align, bgColor);
  return (
    <Text style={[dynamicStyles, style]} {...props}>
      {text}
    </Text>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (family, size, color, align, bgColor, ...styles) => ({
    fontFamily: family,
    fontSize: size,
    color,
    textAlign: align,
    backgroundColor: bgColor,
  }),
});
