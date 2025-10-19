import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Phones 📱",
          headerStyle: {
            backgroundColor: "#FF2D87",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="laptops"
        options={{
          title: "Laptops 💻",
          headerStyle: {
            backgroundColor: "#FF4500",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
    </Stack>
  );
};

export default StackLayout;
