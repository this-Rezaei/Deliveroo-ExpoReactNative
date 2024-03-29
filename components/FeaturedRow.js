import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import IconEntypo from "react-native-vector-icons/Entypo";
import RestaurantCards from "./RestaurantCards";
import { client, urlFor } from "../sanity";
const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  const [Restaurants, setRestaurants] = useState([]);
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
        console.log(data);
        setRestaurants(data?.restaurants);
      });
  }, []);
  console.log(Restaurants);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <IconEntypo name="chevron-left" size={20} color="#00ccbb" />
        <Text className="font-bold text-lg">{title}</Text>
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
        {Restaurants.map((restaurant) => (
          <RestaurantCards
            key={restaurant._id}
            imgUrl={restaurant.image}
            id={restaurant._id}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={title}
            address={restaurant.address}
            short_description={restaurant.short_description}
            deliveryFee={restaurant.deliveryFee}
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
