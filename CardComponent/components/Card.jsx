import { View, Text, StyleSheet } from "react-native";

export function Card({title, text, bgColor, borderColor, titleColor, textColor}) {
  return (
    <View style={[styles.card, { backgroundColor: bgColor, borderColor: borderColor } ]}>
      <Text style={[styles.cardTitle, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.cardText, { color: textColor }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 5,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 18,
    marginTop: 5,
  },
});