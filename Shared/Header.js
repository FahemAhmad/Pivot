import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import React, { useCallback, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { COLORS } from "../assets/colors";

SplashScreen.preventAutoHideAsync();

const Header = () => {
  const [fontsLoaded] = useFonts({
    Linerama: require("../assets/fonts/Linerama-eZvWO.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Entypo name="classic-computer" size={30} color="white" />
      <Text style={{ fontFamily: "Linerama", color: "white", fontSize: 30 }}>
        TekhnoLabs
      </Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
