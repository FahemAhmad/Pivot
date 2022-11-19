import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { Container, ScrollView } from "native-base";
import { COLORS } from "../../assets/colors";

const { width, height } = Dimensions.get("window");

const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.image
                ? item.image
                : "https://propellerads.com/wp-content/themes/appon/assets/images/no-image/No-Image-Found-400x264.png",
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    marginLeft: 10,
    backgroundColor: COLORS.bg,
  },
  imageContainer: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: height / 2.6,
  },
  image: {
    height: height / 2.6,
    width: width,
    borderBottomLeftRadius: 40,
  },
  informationContainer: {
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  price: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: "900",
  },
});
export default SingleProduct;
