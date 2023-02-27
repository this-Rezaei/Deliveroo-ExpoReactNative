import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Kabab from "../assets/kabab.png";
const CategoriesCard = ({ imgUrl, title }) => {
  const newLocal = "";
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
      <Image className="w-20 h-20 rounded" source={{ uri: imgUrl }} />
    </TouchableOpacity>
  );
};

export default CategoriesCard;
