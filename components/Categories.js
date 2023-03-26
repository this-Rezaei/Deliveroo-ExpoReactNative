import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CategoriesCard from "./CategoriesCard";
import { client, urlFor } from "../sanity";
const Categories = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    client.fetch('*[_type == "category"]').then((data) => {
      setcategories(data);
    });
  }, []);
  // console.log("categories", categories[0]);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* categories Card */}
      {categories?.map((category) => (
        <CategoriesCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
