import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import GlobalStyle from "../GlobalStyle";
// import { ChevronDownIcon } from "react-native-heroicons/outline";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "TESTING",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={GlobalStyle.droidSafeArea}>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-8 w-8 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now !</Text>
          <Text className="font-bold text-xl">
            Current Location
            {/* <ChevronDownIcon size={20} color="#00ccbb"/> */}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
