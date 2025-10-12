import { View, Text, StyleSheet } from "react-native";

export function Card1() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>This is Card 1</Text>
      <Text style={styles.cardText}> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, dolore quod nesciunt mollitia unde sit 
      esse temporibus quam sapiente molestias eligendi quis voluptas dolores!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFD966",
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    borderColor:"#FF8C00",
    borderWidth:5
  },
  cardTitle: {
    color: "#FF8C00",
    fontSize: 25,
    fontWeight: "bold"
  },
  cardText:{
    color:"#5C4033",
    fontSize:18,
    marginTop:5
  }
});
