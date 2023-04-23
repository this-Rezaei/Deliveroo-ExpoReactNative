import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Skeleton } from "@rneui/themed";

const Loader = () => {
  return (
    <TouchableOpacity className="flex flex-row gap-2">
      <Skeleton width={112} height={80}  />
      <Skeleton width={120} height={80} /> 
      {/* <Skeleton width={150} height={80} />  */}
      {/* <Skeleton width={170} height={80} />  */}
    </TouchableOpacity>
  );
};
export default Loader;
