import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {phoneWidth} from './constants/Dimensions'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.title1}>Box 1</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.childBox}>
              <Text style={{ fontSize: 30 }}>🎈</Text>
            </View>
            <View style={styles.childBox}>
              <Text style={{ fontSize: 30 }}>🎀</Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.childBox}>
              <Text style={{ fontSize: 30 }}>💡</Text>
            </View>
            <View style={styles.childBox}>
              <Text style={{ fontSize: 30 }}>🎉</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.box2}>
        <Text style={styles.title2}>Box 2</Text>
        <View style={{ flexDirection: "column", width: "100%", flex: 0.9 }}>
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
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 20,
    borderRadius: 20,
  },
  box2: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "#F06292",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 20,
    padding: 10,
    paddingRight: 27,
  },
  childBox: {
    width: 100,
    height: 100,
    backgroundColor: "#F48FB1",
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#D81B60",
    borderWidth: 4,
    borderStyle: "solid",
  },
  childBox2: {
    flex: 0.25,
    width: "100%",
    backgroundColor: "#FFF44F",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "pink",
    borderWidth: 4,
    borderStyle: "solid",
  },
  title1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#D81B60",
    marginBottom: 10,
  },
  title2: {
    fontSize: 25,
    flex: 0.1,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    marginTop: 10,
  },
});
