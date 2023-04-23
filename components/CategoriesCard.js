import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className=" relative bg-white rounded-sm flex m-1">
      <Image className="w-28 h-20 rounded-sm " source={{ uri: imgUrl }} />
      <View className=" py-[2px] absolute  bottom-0 right-0 bg-white rounded-tl-md rounded-br-sm w-3/5 ">
        <Text className="text-center font-sans ">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
