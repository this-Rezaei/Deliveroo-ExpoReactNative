import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
const HomeScreen = () => {
  const navigation = useNavigation();

//   useLayoutEffect(() => {
   
//   }, [])

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-600">HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
