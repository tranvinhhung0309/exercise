import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home Page" }} />
    </Stack>
  )
}

export default _layout