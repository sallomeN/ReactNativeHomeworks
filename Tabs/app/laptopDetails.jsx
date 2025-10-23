import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function PhoneDetails() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>💼 Laptop Shipping & Info</Text>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Delivery</Text>
              <MaterialCommunityIcons
                name="truck-delivery"
                size={24}
                color="#1B1B1B"
              />
            </View>
            <Text style={styles.text}>
              We ship laptops worldwide 🌎 with tracked delivery and secure
              packaging. Expect arrival within 5–10 business days 🚀📮.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Packaging</Text>
              <FontAwesome5 name="box-open" size={24} color="#1B1B1B" />
            </View>
            <Text style={styles.text}>
              All laptops are packed in protective foam boxes to prevent damage
              📦✨. Every order includes setup instructions and cable management
              ties.📃
            </Text>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Warranty</Text>
              <Entypo name="shield" size={24} color="#1B1B1B" />
            </View>
            <Text style={styles.text}>
              Enjoy a 3-year global warranty, including battery replacement and
              tech support 💻⚙.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Bonus</Text>
              <FontAwesome6 name="gift" size={24} color="#1B1B1B" />
            </View>
            <Text style={styles.text}>
              Free carrying sleeve, sticker pack, and 1-month premium support!💥
            </Text>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Special offer </Text>
              <MaterialIcons name="local-offer" size={24} color="#1B1B1B" />
            </View>
            <Text style={styles.text}>
              Buy a laptop this month and if you're the 3rd lucky customer,
              you’ll get 40% off accessories like a wireless mouse or keyboard!
              ⚡🎁
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF4500",
    paddingHorizontal: 20,
    paddingTop  : 10,
    alignItems: "center",
    flex: 1,
  },
  infoBox: {
    padding: 25,
    borderColor: "#1B1B1B",
    borderWidth: 10,
    borderRadius: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  sectionTitleBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 19,
    color: "white",
    fontWeight: "500",
    marginTop: 15,
    textAlign: "justify",
  },
});
