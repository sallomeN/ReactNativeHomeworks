import { View, Text, StyleSheet } from "react-native";

export function Card2() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>This is Card 2</Text>
      <Text style={styles.cardText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, dolore quod nesciunt mollitia unde sit
        esse temporibus quam sapiente molestias eligendi quis voluptas dolores!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F5F5F5",
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    borderColor: "#556B2F",
    borderWidth: 5
  },
  cardTitle: {
    color: "#556B2F",
    fontSize: 25,
    fontWeight: "bold"
  },
  cardText: {
    color: "#DC143C",
    fontSize: 18,
    marginTop: 5
  }
});
