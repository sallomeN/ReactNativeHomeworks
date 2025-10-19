import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { phoneWidth } from "../constants/Dimensions";
import { Card } from "../components/Card";

const LaptopsScreen = () => {
  const laptops = [
    {
      name: "MacBook Air",
      price: "$1199 !!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "white",
    },
    {
      name: "Dell",
      price: "$1000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "#FF7F50",
    },
    {
      name: "HP",
      price: "$995",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "#FF6F61",
    },
    {
      name: "Lenovo",
      price: "$899 !!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "white",
    },
    {
      name: "Asus ZenBook",
      price: "$950",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "#8B0000",
    },
    {
      name: "Acer Swift",
      price: "$870",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae.",
      background: "#1B1B1B",
      nameColor: "#B22222",
    },
    {
      name: "Microsoft Surface",
      price: "$1100",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "white",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
        <View style={styles.linkBox}>
          <Link href="/" style={styles.linkText}>
            Click here to open "Phones" again!
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: phoneWidth,
    paddingHorizontal: 15,
    backgroundColor: "#FF4500",
  },
  linkBox: {
    paddingTop: 15,
    alignItems: "center",
  },
  linkText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
export default LaptopsScreen;
