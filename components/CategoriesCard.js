import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoriesCard = ({ imgUrl, title }) => {
  const newLocal = "";
  return (
    <TouchableOpacity className="mr-2  bg-white rounded-sm ">
      <Image className="w-20 h-20 " source={{ uri: imgUrl }} />
      <Text className="text-center mb-1 font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
