import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {phoneWidth} from './constants/Dimensions'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.title1}>Box 1</Text>
        <View style={styles.box1Container}>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.childBox}>
              <Text style={styles.emoji}>🎈</Text>
            </View>
            <View style={styles.childBox}>
              <Text style={styles.emoji}>🎀</Text>
            </View>
          </View>
          <View style={{ flexDirection: "column"}}>
            <View style={styles.childBox}>
              <Text style={styles.emoji}>💡</Text>
            </View>
            <View style={styles.childBox}>
              <Text style={styles.emoji}>🎉</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.box2}>
        <Text style={styles.title2}>Box 2</Text>
        <View style={styles.box2Container}>
          <View style={styles.childBox2}></View>
          <View style={styles.childBox2}></View>
          <View style={styles.childBox2}></View>
          <View style={styles.childBox2}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: phoneWidth,
    padding: 20,
  },
  box1: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "#FFF44F",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 20,
  },
  title1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#D81B60",
  },
  box1Container: {
    flexDirection: "row",
  },
  childBox: {
    width: 100,
    height: 100,
    backgroundColor: "#F48FB1",
    borderRadius: 20,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#D81B60",
    borderWidth: 5,
    borderStyle: "solid",
  },
  emoji: {
    fontSize: 40,
  },
  box2: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "#F06292",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 20,
    padding: 10,
  },
  title2: {
    fontSize: 25,
    flex: 0.1,
    fontWeight: "bold",
    color: "white",
  },
  box2Container: {
    flexDirection: "column",
    flex: 0.9,
    width: "100%",
  },
  childBox2: {
    flex: 0.25,
    backgroundColor: "#FFF44F",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "pink",
    borderWidth: 5,
    borderStyle: "solid",
  }
});
