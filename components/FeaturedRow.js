import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import IconIoni from "react-native-vector-icons/Ionicons";
import RestaurantCards from "./RestaurantCards";
import { client, urlFor } from "../sanity";
const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"&& _id==$id]{
          ...,
          restaurants[]->{
           ...,
            dishes[]->,
            
              type->{
             name
             }
         }
            }[0]`,
        { id }
      )
      .then((data) => {
        console.log(data?.restaurants);
        setRestaurants(data?.restaurants)
      });
  }, []);
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
        {restaurants.map((restaurant) => (
          <RestaurantCards
            key={restaurant._id}
            imgUrl={restaurant.image}
            id={restaurant._id}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
