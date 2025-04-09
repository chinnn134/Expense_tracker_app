import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'
import { colors } from '@/constants/theme'

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 50

  return (
    <View
      style={[
        {
          paddingTop,
          flex: 1,
          backgroundColor: colors.neutral900, // dùng background nếu có
        },
        style,
      ]}
    >
      {/* hoặc light-content tùy theme */}
      <StatusBar barStyle="dark-content" />
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})
