import { View, Text, ScrollView } from "react-native";
import React from "react";
import IconIoni from "react-native-vector-icons/Ionicons";
import RestaurantCards from "./RestaurantCards";
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
      >
        <RestaurantCards
          imgUrl="https://cdn.snappfood.ir/300x200/uploads/images/vendors/covers/603110980e55e.jpg"
          id={123}
          title="Yo! Meat"
          rating={4.7}
          genre="Iran"
          address="Motahhari St"
          short_description="this is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          imgUrl="https://cdn.snappfood.ir/300x200/uploads/images/vendors/covers/603110980e55e.jpg"
          id={1234}
          title="Yo! Meat"
          rating={4.7}
          genre="Iran"
          address="Motahhari St"
          short_description="this is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          imgUrl="https://cdn.snappfood.ir/300x200/uploads/images/vendors/covers/603110980e55e.jpg"
          id={12345}
          title="Yo! Meat"
          rating={4.7}
          genre="Iran"
          address="Motahhari St"
          short_description="this is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          imgUrl="https://cdn.snappfood.ir/300x200/uploads/images/vendors/covers/603110980e55e.jpg"
          id={123456}
          title="Yo! Meat"
          rating={4.7}
          genre="Iran"
          address="Motahhari St"
          short_description="this is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          imgUrl="https://cdn.snappfood.ir/300x200/uploads/images/vendors/covers/603110980e55e.jpg"
          id={1234567}
          title="Yo! Meat"
          rating={4.7}
          genre="Iran"
          address="Motahhari St"
          short_description="this is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
