import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';

const ProfileScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>This is the Profile</Text>
          <Link href="/home">Go back to Home</Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default ProfileScreen