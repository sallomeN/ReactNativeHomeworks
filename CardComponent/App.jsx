import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { phoneWidth } from "./constants/Dimensions";
import { Card1 } from "./components/Card1";
import { Card2 } from "./components/Card2";
import { Card3 } from "./components/Card3";
import { Card4 } from "./components/Card4";
import { Card5 } from "./components/Card5";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.mainTitle}>Here are five cards</Text>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89CFF0",
    alignItems: "center",
    justifyContent: "center",
    width: phoneWidth,
    padding: 20,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FAF884",
    textAlign: "center"
  }
});
