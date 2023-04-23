import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { client, urlFor } from "../sanity";
import CategoriesCard from "./CategoriesCard";
import Loader from "./loader/CategoriesCardLoader";
const FlatListItem = () => {
  const [categories, setcategories] = useState([]);
  const [isloading, setLoading] = useState(true);
  const ref = useRef();
  useEffect(() => {
    client.fetch('*[_type == "category"]').then((data) => {
      setcategories(data);
      setLoading(false);
    });
  }, []);

  const renderItem = ({ item }) => (
    <CategoriesCard imgUrl={urlFor(item.image).url()} title={item.name} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        inverted={true}
      />

      {/* <Loader/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginEnd: 8,
  },
});

export default FlatListItem;
