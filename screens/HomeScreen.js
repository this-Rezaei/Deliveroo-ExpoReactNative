import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import GlobalStyle from "../GlobalStyle";
import IconAntd from "react-native-vector-icons/AntDesign";
import IconIoni from "react-native-vector-icons/Ionicons";
import Categories from "../components/Categories";
// import FeaturedRow from "../components/FeaturedRow";
import FeaturedRow1 from "../components/FeaturedRow1";
import { client } from "../sanity";
const HomeScreen = () => {
  const [featuredCategories, setfeaturedCategories] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "TESTING",
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"]{
        ...,
         restaurants[]->{
         ...,
         dishes[]->
         }
        }`
      )
      .then((data) => {
        setfeaturedCategories(data);
      });
  }, []);

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
        <View className="flex-row h-12  justify-between space-x-2 flex-1 bg-gray-200 p-3 items-center rounded-md ">
          <IconIoni
            name="search-outline"
            className="w-[10%]"
            size={20}
            color="gray"
          />
          <TextInput
            className="w-[90%] text-right font-sans"
            placeholder="جستوجو در"
            keyboardType="default"
          />
        </View>
        {/* <IconIoni name="settings-outline" size={25} color="#00ccbb" /> */}
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-200"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}

        {/* <Categories /> */}
        <Categories />

        {/* Featured */}

        {/* {featuredCategories.map((category) => (
          <FeaturedRow
            id={category._id}
            key={category._id}
            title={category.name}
            description={category.short_description}
            featuredCategory="featured"
          />
        ))} */}
        {featuredCategories.map((category) => (
          <FeaturedRow1
            id={category._id}
            key={category._id}
            title={category.name}
            description={category.short_description}
            featuredCategory="featured"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
