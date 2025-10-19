import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { phoneWidth } from "../constants/Dimensions";
import { Card } from "../components/Card";

const PhonesScreen = () => {
  const phones = [
    {
      name: "iPhone 15",
      price: "$999",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
    },
    {
      name: "Samsung Galaxy A22",
      price: "$680 !!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
    },
    {
      name: "Google Pixel 9",
      price: "$790",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
    },
    {
      name: "Lenovo",
      price: "$699",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
    },
    {
      name: "Nokia Edge 5G",
      price: "$650",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis explicabo.",
      background: "black",
      nameColor: "white",
    },
    {
      name: "Huawei Nova 12",
      price: "$720",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
    },
    {
      name: "OnePlus 12",
      price: "$850",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
          <View style={styles.linkBox}>
            <Link href="/laptops" style={styles.linkText}>
              Click here to see our laptops!
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
    backgroundColor: "#FF2D87",
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
export default PhonesScreen;
