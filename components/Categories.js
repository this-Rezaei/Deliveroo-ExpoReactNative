import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoriesCard from "./CategoriesCard";
const Categories = () => {
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
      <CategoriesCard
        imgUrl="https://cdn.snappfood.ir/uploads/images/tags/pitza.png"
        title="Pitza"
      />
      <CategoriesCard
        imgUrl="https://cdn.snappfood.ir/uploads/images/tags/kabab.png"
        title="Kabab"
      />
      <CategoriesCard
        imgUrl="https://cdn.snappfood.ir/uploads/images/tags/icon_daryayi.png"
        title="Daryayi"
      />
      <CategoriesCard
        imgUrl="https://cdn.snappfood.ir/uploads/images/tags/aash.png"
        title="Aash"
      />
      <CategoriesCard
        imgUrl="https://cdn.snappfood.ir/uploads/images/tags/salad.png"
        title="Salad"
      />
      <CategoriesCard
        imgUrl="https://cdn.snappfood.ir/uploads/images/tags/sooshi.png"
        title="Sooshi"
      />
    </ScrollView>
  );
};

export default Categories;
