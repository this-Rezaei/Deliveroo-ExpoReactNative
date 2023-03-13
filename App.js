// In App.js in a new project
import * as React from "react";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    IranSans: require("./assets/fonts/IRANSansWeb(FaNum)_Medium.ttf"),
    IranSansLight: require("./assets/fonts/IRANSansWeb(FaNum)_Light.ttf"),
    IranSansSemiBold: require("./assets/fonts/IRANSansWeb(FaNum)_Black.ttf"),
    IranSansBold: require("./assets/fonts/IRANSansWeb(FaNum)_Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
