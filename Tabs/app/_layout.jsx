import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="phoneDetails"
        options={{
          title: "Phone Details",
          headerStyle: { backgroundColor: "#FF2D87" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="laptopDetails"
        options={{
          title: "Laptop Details",
          headerStyle: { backgroundColor: "#FF4500" },
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
