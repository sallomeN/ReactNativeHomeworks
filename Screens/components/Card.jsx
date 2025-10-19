import { View, Text, StyleSheet } from "react-native";

export function Card({ name, price, description, background, nameColor }) {
  return (
    <View style={[styles.card, { backgroundColor: background }]}>
      <Text style={[styles.itemName, { color: nameColor }]}>{name}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
      <Text style={styles.itemDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginVertical: 10,
    borderRadius: 20,
  },
  itemPrice: {
    fontSize: 22,
    fontWeight: "600",
    paddingVertical: 5,
    color: "red",
  },
  itemName: {
    fontSize: 25,
    fontWeight: "800",
  },
  itemDescription: {
    fontSize: 17,
    color: "#D3D3D3",
  },
});
