import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../Screens/Products/ProductList";
import SingleProduct from "../Screens/Products/SingleProduct";

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={ProductList} />
      <Stack.Screen name="Product Details" component={SingleProduct} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
