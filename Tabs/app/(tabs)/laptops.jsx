import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { phoneWidth } from "../../constants/Dimensions";
import { Card } from "../../components/Card";

const LaptopsScreen = () => {
  const laptops = [
    {
      name: "MacBook Air",
      price: "$1199 !!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "white",
      link: "/laptopDetails",
      linkColor: "#FF4500",
    },
    {
      name: "Dell",
      price: "$1000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "#FF7F50",
      link: "/laptopDetails",
      linkColor: "#FF4500",
    },
    {
      name: "HP",
      price: "$995",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "#FF6F61",
      link: "/laptopDetails",
      linkColor: "#FF4500",
    },
    {
      name: "Lenovo",
      price: "$899 !!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "white",
      link: "/laptopDetails",
      linkColor: "#FF4500",
    },
    {
      name: "Asus ZenBook",
      price: "$950",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "#8B0000",
      link: "/laptopDetails",
      linkColor: "#FF4500",
    },
    {
      name: "Acer Swift",
      price: "$870",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae.",
      background: "#1B1B1B",
      nameColor: "#B22222",
      link: "/laptopDetails",
      linkColor: "#FF4500",
    },
    {
      name: "Microsoft Surface",
      price: "$1100",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
      background: "#1B1B1B",
      nameColor: "white",
      link: "/laptopDetails",
      linkColor: "#FF4500",
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
    backgroundColor: "#FF4500",
  },
  linkText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
export default LaptopsScreen;
