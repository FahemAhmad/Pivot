import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Center, Box, Image, HStack } from "native-base";
import React from "react";
import { COLORS } from "../../assets/colors";

const { width } = Dimensions.get("window");

const SearchedProducts = (props) => {
  const { productsFiltered } = props;
  return (
    <View
      style={{ width: width, backgroundColor: "#f5f6fa", minHeight: "100%" }}
    >
      {productsFiltered?.length > 0 ? (
        productsFiltered.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              props.navigation.navigate("Product Details", { item: item })
            }
          >
            <HStack py={"2"} px={"3"} alignItems="center">
              <Image
                source={{
                  uri: item.image
                    ? item.image
                    : "https://propellerads.com/wp-content/themes/appon/assets/images/no-image/No-Image-Found-400x264.png",
                }}
                alt={item.name}
                borderRadius={30}
                size={60}
              />
              <Box
                width={"80%"}
                ml={"2"}
                my={"2"}
                py={"1"}
                style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: COLORS.primary,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ color: "gray", fontSize: 12, marginVertical: 4 }}
                >
                  {item.description.length > 45
                    ? item.description.substring(0, 47 - 3) + "..."
                    : item.description}
                </Text>
              </Box>
            </HStack>
          </TouchableOpacity>
        ))
      ) : (
        <View>
          <Center>
            <Text style={{ marginTop: 20, color: "gray" }}>
              No products match the searched criteria
            </Text>
          </Center>
        </View>
      )}
    </View>
  );
};

export default SearchedProducts;
