import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import GlobalStyle from "../GlobalStyle";
import IconEvil from "react-native-vector-icons/EvilIcons";
import IconAntd from "react-native-vector-icons/AntDesign";
import IconIoni from "react-native-vector-icons/Ionicons";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "TESTING",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={GlobalStyle.droidSafeArea}>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://play-lh.googleusercontent.com/96JMV4psTHKt8Luv0GzpEWkoUoeGJvt8WrrV2eDqbcQe6jcfjfjmwwhe9UavwwdjGg",
          }}
          className="h-8 w-8 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now !</Text>
          <Text className="font-bold text-xl">
            Current Location
            <IconEvil name="chevron-down" size={20} color="#00ccbb" />
          </Text>
        </View>
        <IconAntd name="user" size={30} color="#00ccbb" />
      </View>
      {/* search */}

      <View>
        <View>
          <IconIoni name="search-outline" size={30} color="#00ccbb"  />
          <TextInput />
        </View>
        <IconIoni name="settings-outline" size={30} color="#00ccbb" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
