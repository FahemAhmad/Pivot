import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome, Entypo } from "@expo/vector-icons";

//Stacks
import HomeNavigator from "./HomeNavigator";
import { View } from "react-native";
import { COLORS } from "../assets/colors";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Upload"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="upload" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Index"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                borderWidth: 5,
                borderColor: "white",
                borderRadius: "50%",
                position: "absolute",
                top: -20,
                height: 70,
                width: 70,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.bg,
              }}
            >
              <FontAwesome5 name="home" color={color} size={30} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cog" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
