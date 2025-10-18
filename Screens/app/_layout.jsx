import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='home' />
      <Stack.Screen name='profile' />
    </Stack>
  );
}

export default StackLayout