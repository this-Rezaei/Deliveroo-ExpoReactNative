import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import GlobalStyle from "../GlobalStyle";
import IconAntd from "react-native-vector-icons/AntDesign";
import IconIoni from "react-native-vector-icons/Ionicons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { client } from "../sanity";
const HomeScreen = () => {
  const [featuredCategories, setfeaturedCategories] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "TESTING",
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client.fetch('*[_type == "post"]').then((data) => {
      console.log(data);
    });
  }, []);

  console.log(getgetCategories);
  return (
    <SafeAreaView style={GlobalStyle.droidSafeArea} className="bg-white">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
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
            <IconIoni name="chevron-down" size={20} color="#00ccbb" />
          </Text>
        </View>
        <IconAntd name="user" size={30} color="#00ccbb" />
      </View>
      {/* search */}

      <View className="flex-row items-center pb-2 mx-4 space-x-2 px-1">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-md items-center">
          <IconIoni name="search-outline" size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <IconIoni name="settings-outline" size={25} color="#00ccbb" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-200"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid Placements from our Partners"
          featuredCategory="featured"
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone s been enjoying these juicy discounts!"
          featuredCategory="discounts"
        />
        {/* Offers near you
         */}
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
