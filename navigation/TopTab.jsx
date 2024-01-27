import { View, Text, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Movies, SearchResults, TVShows } from "../screens";
import { COLORS, SIZES, TEXT } from "../constants/theme";
import NetworkImage from "../components/Reusable/NetworkImage";
import AppBar from "../components/Reusable/AppBar";
import styles from "./topTab.style";
import HeightSpacer from "../components/Reusable/HeightSpacer";
import ReusableText from "../components/Reusable/ReusableText";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../components/Reusable/reusable.style";
import DropdownComponent from "../components/Reusable/Dropdown";

import { useState } from "react";

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#032541" }}>
      <SafeAreaView style={reusable.container}>
        <View style={{ backgroundColor: COLORS.lightWhite }}>
          <View>
            <ReusableText
              text={"Movies App"}
              family={"regular"}
              size={TEXT.large}
              color={COLORS.white}
              style={{
                backgroundColor: COLORS.darkBlue,
                textAlign: "center",
                justifyContent: "center",
                paddingBottom: 10,
                paddingTop: 10,
              }}
            />
          </View>
        </View>

        <Tab.Navigator style={{ position: "relative" }}>
          <Tab.Screen name="Movies" component={Movies} />
          <Tab.Screen name="Search" component={SearchResults} />
          <Tab.Screen name="TV Shows" component={TVShows} />
        </Tab.Navigator>
      </SafeAreaView>
    </View>
  );
};

export default TopTab;
