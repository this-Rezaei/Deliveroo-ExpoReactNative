import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import IconIoni from "react-native-vector-icons/Ionicons";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
import HelmentRacing from "../assets/racing-helmet.png";

const RestaurantCards = ({
  imgUrl,
  iconUrl,
  id,
  title,
  rating,
  genre,
  address,
  short_description,
  deliveryFee,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  // let dollarUS = () => Intl?.NumberFormat("en-IR");
  const numberWithComma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
      className="bg-white mr-3 shadow"
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3">
        <Text className="font-bold text-base pt-2">{title}</Text>
        {/* <View className="flex-row items-center space-x-1">
          <IconIoni name="star" opacity={0.5} size={16} color="green" />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View> */}
        {/* <View className="flex-row items-center space-x-1 mt-1">
          <IconIoni
            name="md-location-outline"
            opacity={0.4}
            size={17}
            color="gray"
          />
          <Text className="text-xs text-gray-500">{address}</Text>
        </View> */}
        <View className="flex-col items-end">
          <Text className="text-xs text-gray-400 mt-1">
            {short_description}
          </Text>
          <View className=" flex-row items-center space-x-1 mt-1">
            <Text className="text-xs text-gray-400">{address}</Text>
            <IconIoni
              name="md-location-outline"
              opacity={0.4}
              size={17}
              color="#9ca3af"
            />
          </View>
        </View>
      </View>
      <View className="flex-row px-3 justify-between my-2">
        <View className="rounded-sm bg-green-600 p-[2px] px-2">
          <Text className="text-sm text-white font-sans-bold">4.0</Text>
        </View>
        <View className="flex-row space-x-1 items-center">
          <View className="flex-row space-x-1 ">
            <Text className="text-xs text-gray-700">تومان</Text>
            <Text className="text-sm text-gray-700 font-sans-bold">
              {numberWithComma(deliveryFee)}
            </Text>
          </View>
          <Image source={HelmentRacing} className="h-4 w-4" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
