import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { phoneWidth } from "./constants/Dimensions";
import { Card } from "./components/Card";
// import { Card2 } from "./components/Card2";
// import { Card3 } from "./components/Card3";
// import { Card4 } from "./components/Card4";
// import { Card5 } from "./components/Card5";

export default function App() {
  const cardsData = [
    {
      title: "This is Card 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, dolore quod nesciunt mollitia unde sit esse temporibus quam sapiente molestias eligendi quis voluptas dolores!",
      bgColor: "#FFD966",
      borderColor: "#FF8C00",
      titleColor: "#FF8C00",
      textColor: "#5C4033",
    },
    {
      title: "This is Card 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, dolore quod nesciunt mollitia unde sit esse temporibus quam sapiente molestias eligendi quis voluptas dolores!",
      bgColor: "#F5F5F5",
      borderColor: "#556B2F",
      titleColor: "#556B2F",
      textColor: "#DC143C",
    },
    {
      title: "This is Card 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, dolore quod nesciunt mollitia unde sit esse temporibus quam sapiente molestias eligendi quis voluptas dolores!",
      bgColor: "#003366",
      borderColor: "#F08080",
      titleColor: "#F08080",
      textColor: "#87CEFA",
    },
    {
      title: "This is Card 4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, dolore quod nesciunt mollitia unde sit esse temporibus quam sapiente molestias eligendi quis voluptas dolores!",
      bgColor: "#FADADD",
      borderColor: "#8B0000",
      titleColor: "#8B0000",
      textColor: "#8B0000",
    },
    {
      title: "This is Card 5",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, dolore quod nesciunt mollitia unde sit esse temporibus quam sapiente molestias eligendi quis voluptas dolores!",
      bgColor: "#F5E6CC",
      borderColor: "#6A5ACD",
      titleColor: "#6A5ACD",
      textColor: "#228B22",
    },
  ];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.mainTitle}>Here are five cards</Text>
          {cardsData.map((card, index) => (
            <Card
              title={card.title}
              text={card.text}
              bgColor={card.bgColor}
              borderColor={card.borderColor}
              titleColor={card.titleColor}
              textColor={card.textColor}
              key={index}
            />
          ))}
        {/* <Card2 />
        <Card3 />
        <Card4 />
        <Card5 /> */}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
    textAlign: "center",
  },
});
