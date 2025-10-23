import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function PhoneDetails() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>📦 Phone Shipping & Info</Text>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Delivery</Text>
              <MaterialCommunityIcons
                name="truck-delivery"
                size={24}
                color="black"
              />
            </View>
            <Text style={styles.text}>
              We offer worldwide delivery 🌍! Most phone orders arrive in 3–7
              business days, depending on your location.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Packaging</Text>
              <FontAwesome5 name="box-open" size={24} color="black" />
            </View>
            <Text style={styles.text}>
              Your phone comes securely wrapped in eco-friendly packaging ♻️ to
              ensure maximum safety during shipping.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Warranty</Text>
              <Entypo name="shield" size={24} color="black" />
            </View>
            <Text style={styles.text}>
              All phones include a 2-year international warranty, with 24/7
              online support and easy repair options. 🤝
            </Text>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Bonus</Text>
              <FontAwesome6 name="gift" size={24} color="black" />
            </View>
            <Text style={styles.text}>
              Every order till december includes a free phone case and charging
              cable. 🔋
            </Text>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Special offer </Text>
              <AntDesign name="apple" size={24} color="black" />
              <MaterialIcons name="local-offer" size={24} color="black" />
            </View>
            <Text style={styles.text}>
              Every third person who oders an Iphone 15 this month, gets a 40%
              discount on Airpods. 🎁
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF2D87",
    paddingHorizontal: 20,
    alignItems: "center",
    flex: 1,
    paddingTop: 10,
  },
  infoBox: {
    padding: 25,
    borderColor: "black",
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
    color: "white",
  },
  sectionTitleBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 19,
    color: "black",
    fontWeight: "500",
    marginTop: 15,
    textAlign: "justify",
  },
});
