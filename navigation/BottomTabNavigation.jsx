import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Chat, Location } from "../screens";
import { COLORS } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import TopTab from "./TopTab";
const Tab = createBottomTabNavigator();

const tabBarStyle = {
  padding: 20,
  borderRadius: 20,
  height: 80,
  position: "absolute",
  bottom: 0,
  left: 20,
  right: 20,
  alignItems: "center",
};

const BottomTabNavigation = () => {

 

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#EB6A58"
      tabBarHideKeyBoard={true}
      inactiveColor="#3e2465"
      headerShown={false}
      barStyle={{ paddingBottom: 48 }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "location" : "location-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"
              }
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TopTab}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
