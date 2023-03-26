import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import IconIoni from "react-native-vector-icons/Ionicons";
import { urlFor } from "../sanity";
const RestaurantCards = ({
  imgUrl,
  id,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <IconIoni name="star" opacity={0.5} size={16} color="green" />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 mt-1">
          <IconIoni
            name="md-location-outline"
            opacity={0.4}
            size={17}
            color="gray"
          />
          <Text className="text-xs text-gray-500">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
