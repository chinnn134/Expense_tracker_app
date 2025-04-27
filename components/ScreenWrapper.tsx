<<<<<<< HEAD
import {
  Dimensions,
  Platform,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import React from "react";
import { ScreenWrapperProps } from "@/types";
import { colors } from "@/constants/theme";

const { height } = Dimensions.get("window");
const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = Platform.OS == "ios" ? height * 0.06 : 50;
=======
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'
import { colors } from '@/constants/theme'

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 50

>>>>>>> 6163a122ef3268511a8c254e7e4007d395cfd283
  return (
    <View
      style={[
        {
          paddingTop,
          flex: 1,
<<<<<<< HEAD
          backgroundColor: colors.neutral900,
=======
          backgroundColor: colors.neutral900, // dùng background nếu có
>>>>>>> 6163a122ef3268511a8c254e7e4007d395cfd283
        },
        style,
      ]}
    >
<<<<<<< HEAD
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
=======
      {/* hoặc light-content tùy theme */}
      <StatusBar barStyle="dark-content" />
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})
>>>>>>> 6163a122ef3268511a8c254e7e4007d395cfd283
