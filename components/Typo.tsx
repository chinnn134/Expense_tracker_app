<<<<<<< HEAD
import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";
import { TypoProps } from "@/types";
import { verticalScale } from "@/utils/styling";
=======
import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { TypoProps } from '@/types'
import { colors } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
>>>>>>> 6163a122ef3268511a8c254e7e4007d395cfd283

const Typo = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) => {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
<<<<<<< HEAD
=======

>>>>>>> 6163a122ef3268511a8c254e7e4007d395cfd283
  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo;

<<<<<<< HEAD
const styles = StyleSheet.create({});
=======
const styles = StyleSheet.create({})
>>>>>>> 6163a122ef3268511a8c254e7e4007d395cfd283
