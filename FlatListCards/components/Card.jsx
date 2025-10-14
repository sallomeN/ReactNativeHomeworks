import { View, Text, StyleSheet } from "react-native";

export function Card({ name, price, description, background, nameColor}) {
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
    padding: 15,
    marginVertical: 10,
    borderRadius: 20
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 5,
    color: "red"
  },
  itemName: {
    fontSize: 23,
    fontWeight: "800"
  },
  itemDescription: {
    fontSize: 17,
    color: "#4B3621"
  }
});
