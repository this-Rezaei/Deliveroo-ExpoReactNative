import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoriesCard = ({ imgUrl, title }) => {
  const newLocal = "";
  return (
    <TouchableOpacity className="mr-2 relative ">
      <Image className="w-20 h-20 rounded" source={{ uri: imgUrl }} />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
