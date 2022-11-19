import { StyleSheet, View, SafeAreaView, AppRegistry } from "react-native";
import ProductList from "./Screens/Products/ProductList";
import Header from "./Shared/Header";
import { extendTheme, NativeBaseProvider } from "native-base";
import Banner from "./Shared/Banner";
import { NavigationContainer } from "@react-navigation/native";

//Navigators
import Main from "./Navigators/Main";
import { COLORS } from "./assets/colors";

//Sreens

//theme
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <View style={styles.topbar}>
            <Header />
            <Main />
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: COLORS.bg,
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,

    backgroundColor: COLORS.primary,
  },
});
