import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/index";
import { Details } from "../screens/Details";

export type RouteParams = {
  Home: undefined;
  Details: {
    id: string;
    title: string;
    address: number[];
    image: string;
    difficulty: number;
  };
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            animation: "slide_from_right",
            headerStyle: {
              backgroundColor: '#007DE4',
            },
            headerTintColor: "#FFF",
            // headerTitleStyle: tailwind("text-lg"),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
