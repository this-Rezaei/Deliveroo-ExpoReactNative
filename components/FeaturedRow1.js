import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";
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
  const renderItem = ({ item }) => (
    <RestaurantCards
      imgUrl={urlFor(item.image).url()}
      iconUrl={urlFor(item.icon).url()}
      key={item._id}
      id={item._id}
      title={item.name}
      rating={item.rating}
      genre={title}
      address={item.address}
      short_description={item.short_description}
      deliveryFee={item.deliveryFee}
      dishes={item.dishes}
      long={item.long}
      lat={item.lat}
    />
  );
  return (
    <SafeAreaView>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <IconEntypo name="chevron-left" size={20} color="#00ccbb" />
        <Text className="font-bold text-lg">{title}</Text>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <FlatList
        data={Restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        inverted={true}
      />
    </SafeAreaView>
  );
};

export default FeaturedRow;
