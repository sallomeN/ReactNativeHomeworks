import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { phoneWidth } from "../../constants/Dimensions";
import { Card } from "../../components/Card";

const PhonesScreen = () => {
  const phones = [
    {
      name: "iPhone 15",
      price: "$999",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
      link: "/phoneDetails",
      linkColor: "#FF2D87",
    },
    {
      name: "Samsung Galaxy A22",
      price: "$680 !!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
      link: "/phoneDetails",
      linkColor: "#FF2D87",
    },
    {
      name: "Google Pixel 9",
      price: "$790",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
      link: "/phoneDetails",
      linkColor: "#FF2D87",
    },
    {
      name: "Lenovo",
      price: "$699",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
      link: "/phoneDetails",
      linkColor: "#FF2D87",
    },
    {
      name: "Nokia Edge 5G",
      price: "$650",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis explicabo.",
      background: "black",
      nameColor: "white",
      link: "/phoneDetails",
      linkColor: "#FF2D87",
    },
    {
      name: "Huawei Nova 12",
      price: "$720",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
      link: "/phoneDetails",
      linkColor: "#FF2D87",
    },
    {
      name: "OnePlus 12",
      price: "$850",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "black",
      nameColor: "white",
      link: "/phoneDetails",
      linkColor: "#FF2D87",
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
              link={item.link}
              linkColor={item.linkColor}
            />
          )}
        />
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
  linkText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
export default PhonesScreen;
