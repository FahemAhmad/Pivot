import { VStack, Input, Icon, Box } from "native-base";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import data from "../../assets/Constants/products.json";
import ProductContainer from "./ProductContainer";
import { AntDesign } from "@expo/vector-icons";
import SearchedProducts from "./SearchedProducts";
import Banner from "../../Shared/Banner";
import CategoryFilter from "./CategoryFilter";
import { COLORS } from "../../assets/colors";

const { height } = Dimensions.get("window");
const productCategories = require("../../assets/Constants/categories.json");

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [searchedKey, setSearchedKey] = useState("");

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productCategories);
    setProductsCtg(data);
    setActive(-1);
    setInitialState(data);
    setSearchedKey("");

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState();
      setProductsCtg();
      setSearchedKey("");
    };
  }, []);

  const searchProduct = (text) => {
    setSearchedKey(text);
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
    setSearchedKey("");
    Keyboard.dismiss();
  };

  // Categories
  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => i.category.$oid === ctg, setActive(true))
            ),
          ];
    }
  };

  return (
    <>
      <VStack>
        <Box width={"100%"} px="5" py={"3"} bg={["gray.300"]}>
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="5"
            py="2"
            px="4"
            _focus={{
              backgroundColor: "gray.200",
              borderColor: "none",
            }}
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<AntDesign name="search1" />}
              />
            }
            InputRightElement={
              focus ? (
                <Icon
                  mr="2"
                  size="4"
                  color="gray.400"
                  as={<AntDesign name="close" />}
                  onPress={onBlur}
                />
              ) : null
            }
            value={searchedKey}
            onChangeText={(text) => searchProduct(text)}
            onFocus={openList}
          />
        </Box>
      </VStack>

      {focus === true ? (
        <SearchedProducts
          productsFiltered={productsFiltered}
          navigation={props.navigation}
        />
      ) : (
        <>
          <ScrollView>
            <View style={{ backgroundColor: COLORS.bg }}>
              <Banner />
              <CategoryFilter
                categories={categories}
                categoryFilter={changeCtg}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
              {productsCtg?.length > 0 ? (
                <View style={styles.listContainer}>
                  {productsCtg.map((item) => {
                    return (
                      <ProductContainer
                        key={item._id.$oid}
                        item={item}
                        navigation={props.navigation}
                      />
                    );
                  })}
                </View>
              ) : (
                <View style={[styles.center, { marginTop: 50 }]}>
                  <Text>No products found</Text>
                </View>
              )}
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  center: {
    textAlign: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
