import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import ReusableText from "../../components/Reusable/ReusableText";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import Places from "../../components/Home/Places";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";
import Recommendations from "../../components/Home/Recommendations";
import BestHotels from "../../components/Home/BestHotels";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <ReusableText
              text={"Movies App"}
              family={"regular"}
              size={TEXT.large}
              color={COLORS.black}
            />
          </View>
          {/* 
          <HeightSpacer height={SIZES.xLarge} />
          <ReusableText
            text={"Places"}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />
          <Places />
          <HeightSpacer height={15} />
          <Recommendations />
          <HeightSpacer height={30} />
          <BestHotels /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
