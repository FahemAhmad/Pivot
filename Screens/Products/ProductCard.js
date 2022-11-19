import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../assets/colors";

const { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image, countInStock, description, rating } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: image
            ? image
            : "https://propellerads.com/wp-content/themes/appon/assets/images/no-image/No-Image-Found-400x264.png",
        }}
      />

      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
      <Text style={styles.desc}>
        {description.length > 50
          ? description.substring(0, 50 - 3) + "..."
          : description}
      </Text>
      <View style={styles.spacer} />

      <View style={styles.cardBottom}>
        {countInStock > 0 ? (
          <Text style={[styles.stock, styles.green]}>In Stock</Text>
        ) : (
          <Text style={[styles.stock, styles.red]}>Out of Stock</Text>
        )}
        <View style={styles.starsContainer}>
          {[...Array(Math.floor(rating))].map((star, index) => (
            <Text key={index} style={{ color: "gold" }}>
              &#9733;
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.cardBottom}>
        <Text style={styles.price}>${price}</Text>

        <AntDesign name="pluscircle" size={24} color={COLORS.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },
  image: {
    width: width / 2 - 40,
    height: width / 3,
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
  },

  title: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    width: "100%",
  },
  desc: {
    fontSize: 10,
    textAlign: "left",
    lineHeight: 12,
    width: "100%",
  },
  spacer: {
    flex: 1,
  },
  cardBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  price: {
    fontSize: 16,
    color: COLORS.primary,
  },
  stock: {
    fontSize: 12,

    marginTop: 10,
    marginBottom: 10,
  },
  red: {
    color: "red",
  },
  green: {
    color: "green",
  },
  starsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProductCard;
