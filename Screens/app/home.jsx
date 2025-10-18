import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Welcome to Home Screen!</Text>
          <Link href="/profile">Go to Profile</Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default HomeScreen