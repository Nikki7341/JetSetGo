import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./screens/LandingPage";
import AllFlights from "./screens/AllFlights";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="LandingPage"
            component={LandingPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AllFlights"
            component={AllFlights}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
