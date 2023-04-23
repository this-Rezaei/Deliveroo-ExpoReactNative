import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import IconEntypo from "react-native-vector-icons/Entypo";
const RestaurantScreen = () => {
  const {
    params: {
      imgUrl,
      iconUrl,
      id,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "TESTING",
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative h-64 bg-white ">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 right-5 p-2 bg-gray-100 rounded-full"
        >
          <IconEntypo name="chevron-right" size={20} color="#00ccbb" />
        </TouchableOpacity>
        <View
          style={styles.shadow}
          className="absolute rounded-md z-50 bg-white bottom-2 right-5 p-1 "
        >
          <Image
            source={{
              uri: urlFor(iconUrl).url(),
            }}
            className="w-16 h-16 p-4 rounded-sm"
          />
        </View>
      </View>

      <View className="bg-white ">
        <View className="px-4 pt-4">
          <Text className="text-2xl font-bold text-right">{title}</Text>
          <View className=" flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              {/* <IconIoni name="star" opacity={0.5} size={22} color="green" /> */}
              <Text className="text-gray-500 text-xs">
                {genre} .<Text className="text-green-500"> {rating}</Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              {/* <IconIoni
                name="md-location-outline"
                opacity={0.4}
                size={22}
                color="gray"
              /> */}
              <Text className="text-gray-500 text-xs">{address}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
export default RestaurantScreen;
