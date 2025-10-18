import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { phoneWidth } from "./constants/Dimensions";
import { Card } from "./components/Card";

const phones = [
  {
    name: "iPhone 15",
    price: "$999",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#FFF44F",
    nameColor: "#FF6347",
  },
  {
    name: "Samsung Galaxy A22",
    price: "$680 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#FFD700",
    nameColor: "white",
  },
  {
    name: "Google Pixel 9",
    price: "$790",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#FFEF00",
    nameColor: "#FF7F50",
  },
  {
    name: "Lenovo",
    price: "$699",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#FFC300",
    nameColor: "white",
  },
];

const laptops = [
  {
    name: "MacBook Air",
    price: "$1199 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#7DA77D",
    nameColor: "white",
  },
  {
    name: "Dell",
    price: "$1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#A8C0A8",
    nameColor: "#FF7F50",
  },
  {
    name: "HP",
    price: "$995",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#DDE8DD",
    nameColor: "#FF6F61",
  },
  {
    name: "Lenovo",
    price: "$899 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#6B8E6B",
    nameColor: "white",
  },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.bigTitle}>New pieces for sale❣</Text>
        <Text style={styles.smallTitle}>Check out our phones! 📱</Text>
        <FlatList
          data={phones}
          renderItem={({ item, index }) => (
            <Card
              key={index}
              name={item.name}
              price={item.price}
              description={item.description}
              background={item.background}
              nameColor={item.nameColor}
            />
          )}
        />

        <Text style={styles.smallTitle}>Check out our laptops too! 💻</Text>
        <FlatList
          data={laptops}
          renderItem={({ item, index }) => (
            <Card
              key={index}
              name={item.name}
              price={item.price}
              description={item.description}
              background={item.background}
              nameColor={item.nameColor}
            />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: phoneWidth,
    padding: 20,
    backgroundColor: "#FF6347",
  },
  bigTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  smallTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    paddingVertical: 8,
    textAlign: "center",
  },
});
