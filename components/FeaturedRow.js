import { View, Text, ScrollView } from "react-native";
import React from "react";
import IconIoni from "react-native-vector-icons/Ionicons";
const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <IconIoni name="md-arrow-forward-sharp" size={20} color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
        showsHorizontalScrollIndicator={false}
      ></ScrollView>
    </View>
  );
};

export default FeaturedRow;
