import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Badge, Box } from "native-base";
import { COLORS } from "../../assets/colors";

const CategoryFilter = (props) => {
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{
        backgroundColor: "#f2f2f2",
        marginHorizontal: 20,
        marginBottom: 10,
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        onPress={() => {
          props.categoryFilter("all"), props.setActive(-1);
        }}
      >
        <Badge
          alignItems="center"
          justifyContent="center"
          mr={"3"}
          px={"3"}
          borderRadius={"md"}
          style={[props.active === -1 ? styles.active : styles.inactive]}
        >
          <Text
            style={[
              { paddingHorizontal: 2 },
              props.active === -1
                ? {
                    color: "white",
                  }
                : { color: "black" },
            ]}
          >
            All
          </Text>
        </Badge>
      </TouchableOpacity>

      {props.categories.map((item) => {
        return (
          <TouchableOpacity
            key={item._id.$oid}
            onPress={() => {
              props.categoryFilter(item._id.$oid),
                props.setActive(props.categories.indexOf(item));
            }}
          >
            <Badge
              alignItems="center"
              justifyContent="center"
              mr={"3"}
              px={"3"}
              borderRadius={"md"}
              style={[
                props.active === props.categories.indexOf(item)
                  ? styles.active
                  : styles.inactive,
              ]}
            >
              <Text
                style={[
                  props.active === props.categories.indexOf(item)
                    ? {
                        color: "white",
                      }
                    : { color: "black" },
                  ,
                  { paddingHorizontal: 2 },
                ]}
              >
                {item.name}
              </Text>
            </Badge>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  active: {
    backgroundColor: COLORS.primary,
  },
  inactive: {
    backgroundColor: "white",
  },
});

export default CategoryFilter;
