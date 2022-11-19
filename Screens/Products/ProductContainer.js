import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const { width } = Dimensions.get("window");

const ProductContainer = (props) => {
  const { item } = props;

  return (
    <TouchableOpacity
      style={{ position: "relative", marginVertical: 5 }}
      onPress={() =>
        props.navigation.navigate("Product Details", { item: item })
      }
    >
      <View
        style={{
          width: width / 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductContainer;
