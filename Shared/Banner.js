import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  AppRegistry,
} from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import { COLORS } from "../assets/colors";
const { width } = Dimensions.get("window");

AppRegistry.registerComponent("pivot", () => Banner);

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://charlieintel.com/wp-content/uploads/2022/05/call-of-duty-modern-warfare-2.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1222140/capsule_616x353.jpg?t=1667468479",
      "https://staticc.sportskeeda.com/editor/2022/09/28c0c-16620407597913-1920.jpg",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView horizontal>
      <View style={styles.bannerImageContainer}>
        <View style={styles.swiperContainer}>
          <Swiper
            style={styles.swiper}
            showButton={false}
            autoplay={false}
            autoplayTimeout={2}
            removeClippedSubviews={false}
            scrollEnabled={true}
            dot={<View style={styles.dot} />}
            activeDot={<View style={[styles.dot, styles.activeDot]} />}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageContainer}
                  resizeMode="stretch"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerImageContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
    height: width / 2.2 + 30,
  },
  swiperContainer: {
    width: width,
    height: "100%",
    marginTop: 15,
  },

  swiper: {
    height: width / 2.2,
  },
  imageContainer: {
    height: width / 2.2,
    width: width - 40,
    alignSelf: "center",
    borderRadius: 10,
  },
  dot: {
    backgroundColor: "rgba(255,255,255,.3)",
    width: 15,
    height: 5,
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 0,
  },
  activeDot: {
    backgroundColor: "white",
  },
});

export default Banner;
